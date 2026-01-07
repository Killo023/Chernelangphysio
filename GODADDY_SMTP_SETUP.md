# GoDaddy SMTP Configuration Guide

Your contact form is configured to use **GoDaddy SMTP server** for sending appointment booking emails.

## ✅ Current Configuration

The system is set up to use GoDaddy's SMTP server with the following settings:

- **SMTP Server**: `smtp.secureserver.net` (GoDaddy's SMTP server)
- **Port**: `587` (STARTTLS/TLS) - Recommended for GoDaddy
- **Authentication**: Required
- **Security**: STARTTLS (TLS encryption)

## 📋 Environment Variables for Vercel

Add these **exact** variables in Vercel Dashboard → Settings → Environment Variables:

```
SMTP_HOST = smtp.secureserver.net
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = info@chernephysio.co.za
SMTP_PASS = Killo23011@
RECIPIENT_EMAIL = info@chernephysio.co.za
SENDER_EMAIL = info@chernephysio.co.za
SERVICE_NAME = Cherné Langeveldt Physiotherapy
```

## 🔧 GoDaddy SMTP Settings Explained

### Port Options:
1. **Port 587** (Recommended) ✅
   - Uses STARTTLS/TLS encryption
   - `SMTP_SECURE = false`
   - Most reliable for GoDaddy

2. **Port 465** (Alternative)
   - Uses SSL encryption
   - `SMTP_PORT = 465`
   - `SMTP_SECURE = true`
   - Older protocol, but still supported

### Why Port 587?
- Modern standard for SMTP
- Better compatibility with Vercel serverless functions
- GoDaddy's recommended port
- Supports STARTTLS encryption

## 📝 Setup Steps

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your project

2. **Add Environment Variables**
   - Navigate to: **Settings → Environment Variables**
   - Add each variable listed above
   - Make sure to select **Production** environment

3. **Redeploy**
   - After adding all variables, go to **Deployments** tab
   - Click **Redeploy** on the latest deployment
   - This ensures environment variables are loaded

4. **Verify Function**
   - Check **Functions** tab - you should see `/api/send-email`
   - If not visible, the deployment might still be processing

## ✅ Testing the Setup

1. **Test Contact Form**
   - Visit: https://www.chernelangphysio.co.za/
   - Scroll to contact form
   - Fill out and submit

2. **Check Email**
   - Check inbox at `info@chernephysio.co.za`
   - Email should arrive within seconds

3. **If Issues Occur**
   - Check Vercel Function Logs (Deployments → Function Logs)
   - Verify credentials are correct
   - Test SMTP with an email client first

## 🔍 Troubleshooting GoDaddy SMTP

### Common Issues:

**1. "Authentication failed"**
- Verify email and password are correct
- Check that password doesn't have special characters that need escaping
- Ensure account is active in GoDaddy

**2. "Connection timeout"**
- Check that port 587 is not blocked
- Verify `smtp.secureserver.net` is correct
- Try port 465 as alternative

**3. "Email not sending"**
- Check Vercel function logs for detailed errors
- Verify all environment variables are set
- Ensure site has been redeployed after adding variables

**4. "Certificate errors"**
- The code is configured to handle GoDaddy's certificate
- This should not be an issue with current settings

## 📧 Email Behavior

When a user submits the contact form:
- **Subject**: "New Appointment Request from [Client Name]"
- **To**: info@chernephysio.co.za
- **From**: info@chernephysio.co.za
- **Reply-To**: Client's email address (so you can reply directly)
- **Content**: Includes client name, email, and message in formatted HTML

## 🔐 Security Notes

- ✅ Password is stored securely in Vercel environment variables
- ✅ Connection uses TLS encryption (port 587)
- ✅ SMTP credentials are never exposed to the client
- ✅ Email validation is performed before sending

## 📞 Need Help?

If you're still experiencing issues:
1. Check Vercel Function Logs for specific error messages
2. Verify your GoDaddy email account credentials
3. Test SMTP settings with an email client (Outlook, Thunderbird) first
4. Contact GoDaddy support if authentication issues persist

---

**Status**: ✅ Configured and ready to use with GoDaddy SMTP

