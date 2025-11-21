# Email Setup Guide for Contact Form

The contact form is now set up to send emails to `info@chernephysio.co.za` when users submit appointment requests.

## Setup Instructions

### Option 1: Resend API (Recommended - Easy Setup)

Resend is a modern email API that works great with Vercel. It has a free tier with 3,000 emails/month.

1. **Sign up for Resend**: Go to https://resend.com and create a free account
2. **Get your API key**: 
   - Go to https://resend.com/api-keys
   - Click "Create API Key"
   - Copy your API key
3. **Add environment variables in Vercel**:
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add the following variables:
     ```
     RESEND_API_KEY=re_your_api_key_here
     RECIPIENT_EMAIL=info@chernephysio.co.za
     SENDER_EMAIL=info@chernephysio.co.za
     SERVICE_NAME=Cherné Langeveldt Physiotherapy
     ```
4. **Install Resend package** (if not already installed):
   ```bash
   npm install resend
   ```
5. **Verify your domain** (optional but recommended):
   - In Resend dashboard, go to Domains
   - Add your domain: `chernephysio.co.za`
   - Add the DNS records provided by Resend
   - Once verified, you can use `info@chernephysio.co.za` as the sender email

### Option 2: SMTP (Use Your Email Provider)

If you prefer to use your email provider's SMTP server directly:

1. **Get SMTP credentials** from your email provider:
   - Host: e.g., `smtp.gmail.com`, `smtp-mail.outlook.com`, or your provider's SMTP
   - Port: Usually 587 (TLS) or 465 (SSL)
   - Username: Your full email address
   - Password: Your email password or app-specific password

2. **Add environment variables in Vercel**:
   ```
   SMTP_HOST=smtp.your-email-provider.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=info@chernephysio.co.za
   SMTP_PASS=your-email-password
   RECIPIENT_EMAIL=info@chernephysio.co.za
   SENDER_EMAIL=info@chernephysio.co.za
   SERVICE_NAME=Cherné Langeveldt Physiotherapy
   ```

3. **Install Nodemailer package**:
   ```bash
   npm install nodemailer
   ```

### Common SMTP Providers:

**Gmail:**
- SMTP_HOST: `smtp.gmail.com`
- SMTP_PORT: `587`
- SMTP_SECURE: `false`
- Note: You'll need to use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password

**Outlook/Hotmail:**
- SMTP_HOST: `smtp-mail.outlook.com`
- SMTP_PORT: `587`
- SMTP_SECURE: `false`

**Zoho:**
- SMTP_HOST: `smtp.zoho.com`
- SMTP_PORT: `587`
- SMTP_SECURE: `false`

**SendGrid:**
- SMTP_HOST: `smtp.sendgrid.net`
- SMTP_PORT: `587`
- SMTP_SECURE: `false`
- SMTP_USER: `apikey`
- SMTP_PASS: Your SendGrid API key

## Testing

After setting up environment variables:

1. **Redeploy your site on Vercel**:
   - Go to your Vercel project
   - Click "Redeploy" to apply the new environment variables

2. **Test the contact form**:
   - Visit your website
   - Fill out the contact form
   - Submit it
   - Check your email inbox at `info@chernephysio.co.za`

3. **Check Vercel logs** (if there are any issues):
   - Go to your Vercel project → Functions tab
   - Click on the `/api/send-email` function
   - View logs for any errors

## How It Works

1. User clicks "Book an Appointment" button → scrolls to contact form
2. User fills out the form (Name, Email, Message)
3. Form submits to `/api/send-email` (Vercel serverless function)
4. The API function sends an email to `info@chernephysio.co.za` with:
   - Subject: "New Appointment Request from [Name]"
   - Content: User's name, email, and message
   - Reply-To: Set to the user's email so you can reply directly

## Environment Variables Summary

| Variable | Required | Description | Default |
|----------|----------|-------------|---------|
| `RECIPIENT_EMAIL` | No | Email where requests are sent | `info@chernephysio.co.za` |
| `SENDER_EMAIL` | No | Email address that appears as sender | Same as RECIPIENT_EMAIL |
| `SERVICE_NAME` | No | Business name in emails | `Cherné Langeveldt Physiotherapy` |
| `RESEND_API_KEY` | Yes* | Resend API key (Option 1) | - |
| `SMTP_HOST` | Yes* | SMTP server hostname (Option 2) | - |
| `SMTP_PORT` | Yes* | SMTP server port (Option 2) | `587` |
| `SMTP_SECURE` | No | Use SSL/TLS (Option 2) | `false` |
| `SMTP_USER` | Yes* | SMTP username (Option 2) | - |
| `SMTP_PASS` | Yes* | SMTP password (Option 2) | - |

*Either Resend API key OR SMTP credentials are required

## Troubleshooting

**Email not sending?**
- Check that environment variables are set correctly in Vercel
- Redeploy your site after adding environment variables
- Check Vercel function logs for error messages
- Verify your email credentials are correct

**Getting "Email service not configured" error?**
- Make sure you've added either `RESEND_API_KEY` OR `SMTP_HOST`, `SMTP_USER`, and `SMTP_PASS` in Vercel
- Redeploy your site

**Emails going to spam?**
- For Resend: Verify your domain in Resend dashboard
- For SMTP: Make sure SPF/DKIM records are set up correctly for your domain
- Consider using a professional email service like Resend or SendGrid for better deliverability

## Support

If you need help setting this up, check:
- Resend docs: https://resend.com/docs
- Nodemailer docs: https://nodemailer.com/about/
- Vercel environment variables: https://vercel.com/docs/concepts/projects/environment-variables


