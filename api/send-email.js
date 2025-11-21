// Vercel Serverless Function to send emails
// Supports Resend API (recommended) or SMTP

export default async function handler(req, res) {
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
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'info@chernephysio.co.za';
    const senderEmail = process.env.SENDER_EMAIL || recipientEmail;
    const serviceName = process.env.SERVICE_NAME || 'Cherné Langeveldt Physiotherapy';

    // Try Resend API first (if API key is provided)
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resendClient = new Resend(process.env.RESEND_API_KEY);
        
        const result = await resendClient.emails.send({
          from: senderEmail,
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
          throw new Error(result.error.message || 'Failed to send email via Resend');
        }

        return res.status(200).json({ 
          success: true, 
          message: 'Email sent successfully',
          id: result.data?.id 
        });
      } catch (importError) {
        console.error('Failed to import Resend:', importError);
        // Fall through to SMTP if Resend import fails
      }
    }

    // Fallback to SMTP if RESEND_API_KEY is not provided
    // Using nodemailer for SMTP
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const nodemailer = await import('nodemailer');
        const transporter = nodemailer.default.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
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
    return res.status(500).json({ 
      error: 'Email service not configured. Please set RESEND_API_KEY or SMTP credentials in environment variables.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

