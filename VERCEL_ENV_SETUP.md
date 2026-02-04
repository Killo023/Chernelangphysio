# Vercel Environment Variables Setup

## Required Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

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

## Important Notes:

1. **SMTP_PORT**: Changed from 80 to **587** (correct port for GoDaddy SMTP with TLS)
2. **SMTP_SECURE**: Set to `false` because port 587 uses STARTTLS (not SSL)
3. **After adding variables**: You MUST redeploy your site for them to take effect

## Steps to Add in Vercel:

1. Go to https://vercel.com/dashboard
2. Select your project: **Chernelangphysio** (or your project name)
3. Click **Settings** tab
4. Click **Environment Variables** in the sidebar
5. Add each variable one by one:
   - Click "Add New"
   - Enter variable name (e.g., `SMTP_HOST`)
   - Enter value (e.g., `smtp.secureserver.net`)
   - Select environment: **Production** (and optionally Preview/Development)
   - Click "Save"
6. Repeat for all variables listed above
7. **IMPORTANT**: Go to **Deployments** tab and click "Redeploy" on the latest deployment

## GoDaddy SMTP Settings Reference:

- **Host**: smtp.secureserver.net
- **Port**: 587 (with TLS) or 465 (with SSL)
- **Security**: STARTTLS for port 587, SSL for port 465
- **Authentication**: Required (your email and password)

## Testing:

After redeploying, test the contact form on your live site. If you encounter issues:

1. Check Vercel Function Logs (Deployments → Function Logs)
2. Verify all environment variables are set correctly
3. Test SMTP credentials with an email client first


