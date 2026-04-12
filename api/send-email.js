// Vercel Serverless Function to send emails
// Supports Resend API (recommended) or SMTP

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Recipient email (from environment or default)
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'cherne.langeveldt@gmail.com';
    const senderEmail = process.env.SENDER_EMAIL || recipientEmail;
    const serviceName = process.env.SERVICE_NAME || 'Cherné Langeveldt Physiotherapy';

    // Try Resend API first (if API key is provided)
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resendClient = new Resend(process.env.RESEND_API_KEY);
        
        const result = await resendClient.emails.send({
          from: `"${serviceName}" <${senderEmail}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `New Appointment Request from ${name}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background-color: #6B8E23; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
                  .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px; }
                  .field { margin-bottom: 15px; }
                  .field-label { font-weight: bold; color: #6B8E23; }
                  .field-value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #6B8E23; }
                  .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h2>New Appointment Request</h2>
                    <p>${serviceName}</p>
                  </div>
                  <div class="content">
                    <div class="field">
                      <div class="field-label">From:</div>
                      <div class="field-value">${name}</div>
                    </div>
                    <div class="field">
                      <div class="field-label">Email:</div>
                      <div class="field-value">${email}</div>
                    </div>
                    <div class="field">
                      <div class="field-label">Message:</div>
                      <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
                    </div>
                    <div class="footer">
                      <p>This email was sent from the contact form on your website.</p>
                      <p>You can reply directly to this email to contact ${name} at ${email}.</p>
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `,
          text: `
New Appointment Request
${serviceName}

From: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from the contact form on your website.
You can reply directly to this email to contact ${name} at ${email}.
          `.trim(),
        });

        if (result.error) {
          console.error('Resend error:', result.error);
          return res.status(502).json({
            error: result.error.message || 'Failed to send email via Resend',
            hint:
              'Set SENDER_EMAIL to onboarding@resend.dev until your domain is verified in Resend, or verify your domain and use an address on that domain.',
          });
        }

        return res.status(200).json({ 
          success: true, 
          message: 'Email sent successfully',
          id: result.data?.id 
        });
      } catch (resendErr) {
        console.error('Resend request failed:', resendErr);
        return res.status(502).json({
          error: resendErr.message || 'Resend request failed',
          hint:
            'Check RESEND_API_KEY and SENDER_EMAIL in Vercel. For testing, use SENDER_EMAIL=onboarding@resend.dev.',
        });
      }
    }

    // Fallback to SMTP if RESEND_API_KEY is not provided
    // Using nodemailer for SMTP
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const nodemailer = await import('nodemailer');
        // GoDaddy SMTP configuration
        const smtpPort = parseInt(process.env.SMTP_PORT || '587');
        const isSecure = smtpPort === 465 || process.env.SMTP_SECURE === 'true';
        
        // GoDaddy SMTP server configuration
        // Note: GoDaddy uses smtpout.secureserver.net (outgoing) not smtp.secureserver.net
        const smtpHost = process.env.SMTP_HOST || 'smtpout.secureserver.net';
        
        const transporter = nodemailer.default.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: isSecure, // true for 465 (SSL), false for 587 (STARTTLS)
          requireTLS: smtpPort === 587 && !isSecure, // Require TLS for port 587
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
          tls: {
            // GoDaddy SMTP server certificate settings
            rejectUnauthorized: false, // Allow self-signed certificates
            minVersion: 'TLSv1.2',
            servername: smtpHost // Set SNI for SSL/TLS
          },
          // Increased timeouts for GoDaddy SMTP
          connectionTimeout: 30000, // 30 second timeout
          greetingTimeout: 30000, // 30 second timeout
          socketTimeout: 30000, // 30 second socket timeout
          // Retry configuration
          pool: false,
          maxConnections: 1,
          maxMessages: 1,
          // Additional GoDaddy-specific settings
          debug: false, // Set to true for verbose logging
          logger: false
        });

        const mailOptions = {
          from: `"${serviceName}" <${process.env.SMTP_USER}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `New Appointment Request from ${name}`,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                  .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                  .header { background-color: #6B8E23; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
                  .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px; }
                  .field { margin-bottom: 15px; }
                  .field-label { font-weight: bold; color: #6B8E23; }
                  .field-value { margin-top: 5px; padding: 10px; background-color: white; border-left: 3px solid #6B8E23; }
                  .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
                </style>
              </head>
              <body>
                <div class="container">
                  <div class="header">
                    <h2>New Appointment Request</h2>
                    <p>${serviceName}</p>
                  </div>
                  <div class="content">
                    <div class="field">
                      <div class="field-label">From:</div>
                      <div class="field-value">${name}</div>
                    </div>
                    <div class="field">
                      <div class="field-label">Email:</div>
                      <div class="field-value">${email}</div>
                    </div>
                    <div class="field">
                      <div class="field-label">Message:</div>
                      <div class="field-value">${message.replace(/\n/g, '<br>')}</div>
                    </div>
                    <div class="footer">
                      <p>This email was sent from the contact form on your website.</p>
                      <p>You can reply directly to this email to contact ${name} at ${email}.</p>
                    </div>
                  </div>
                </div>
              </body>
            </html>
          `,
          text: `
New Appointment Request
${serviceName}

From: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from the contact form on your website.
You can reply directly to this email to contact ${name} at ${email}.
          `.trim(),
        };

        const info = await transporter.sendMail(mailOptions);
        
        return res.status(200).json({ 
          success: true, 
          message: 'Email sent successfully',
          messageId: info.messageId 
        });
      } catch (importError) {
        console.error('Failed to import nodemailer:', importError);
        // Fall through to error message
      }
    }

    // If neither Resend nor SMTP is configured
    const hasResendKey = !!process.env.RESEND_API_KEY;
    const hasSmtpHost = !!process.env.SMTP_HOST;
    const hasSmtpUser = !!process.env.SMTP_USER;
    const hasSmtpPass = !!process.env.SMTP_PASS;
    const hasSmtpConfig = hasSmtpHost && hasSmtpUser && hasSmtpPass;
    
    // Log detailed information for debugging
    console.error('Email service configuration check:', {
      hasResendKey,
      hasSmtpConfig,
      smtpHost: hasSmtpHost ? `Set (${process.env.SMTP_HOST})` : 'Not set',
      smtpUser: hasSmtpUser ? 'Set' : 'Not set',
      smtpPass: hasSmtpPass ? 'Set' : 'Not set',
      smtpPort: process.env.SMTP_PORT || 'Not set',
      allEnvKeys: Object.keys(process.env).filter(key => 
        key.includes('SMTP') || key.includes('RESEND') || key.includes('EMAIL')
      )
    });
    
    // Provide helpful error message
    let errorMessage = 'Email service not configured. ';
    if (!hasResendKey && !hasSmtpConfig) {
      errorMessage +=
        'Add RESEND_API_KEY (recommended) or SMTP_HOST, SMTP_USER, and SMTP_PASS in Vercel → Settings → Environment Variables. Enable them for Production, then redeploy.';
      if (hasSmtpHost && !hasSmtpUser) {
        errorMessage += ' SMTP_HOST is set but SMTP_USER is missing.';
      } else if (hasSmtpUser && !hasSmtpHost) {
        errorMessage += ' SMTP_USER is set but SMTP_HOST is missing.';
      } else if (hasSmtpHost && hasSmtpUser && !hasSmtpPass) {
        errorMessage += ' SMTP_HOST and SMTP_USER are set but SMTP_PASS is missing.';
      }
    }
    
    return res.status(500).json({ 
      error: errorMessage,
      debug: {
        smtpHostSet: hasSmtpHost,
        smtpUserSet: hasSmtpUser,
        smtpPassSet: hasSmtpPass,
        resendKeySet: hasResendKey
      }
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

