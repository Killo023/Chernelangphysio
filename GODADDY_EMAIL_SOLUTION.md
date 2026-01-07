# GoDaddy Email Service Solution

## ✅ Correct GoDaddy SMTP Settings

GoDaddy uses **`smtpout.secureserver.net`** (not `smtp.secureserver.net`) for outgoing email.

## 🔧 Updated Configuration

### Environment Variables for Vercel:

```
SMTP_HOST = smtpout.secureserver.net
SMTP_PORT = 465
SMTP_SECURE = true
SMTP_USER = info@chernephysio.co.za
SMTP_PASS = Killo23011@
RECIPIENT_EMAIL = info@chernephysio.co.za
SENDER_EMAIL = info@chernephysio.co.za
SERVICE_NAME = Cherné Langeveldt Physiotherapy
```

**Key Changes:**
- ✅ `SMTP_HOST` = `smtpout.secureserver.net` (GoDaddy's outgoing server)
- ✅ `SMTP_PORT` = `465` (SSL)
- ✅ `SMTP_SECURE` = `true` (required for port 465)

## 📋 Steps to Fix

### Step 1: Update Environment Variables in Vercel

1. Go to **Vercel Dashboard** → Your Project → **Settings** → **Environment Variables**

2. **Update or add:**
   ```
   SMTP_HOST = smtpout.secureserver.net
   SMTP_PORT = 465
   SMTP_SECURE = true
   ```
   
   (Keep your existing SMTP_USER, SMTP_PASS, RECIPIENT_EMAIL, SENDER_EMAIL)

3. Make sure **Production** environment is selected

4. Click **Save**

### Step 2: Verify SMTP Authentication is Enabled

GoDaddy may require SMTP authentication to be enabled:

1. Log in to your **GoDaddy account**
2. Go to **Email & Office Dashboard**
3. Select your email account (`info@chernephysio.co.za`)
4. Check **SMTP settings** or contact GoDaddy support to enable SMTP authentication

**Note:** Some GoDaddy accounts have SMTP authentication disabled by default and need to be enabled manually.

### Step 3: Redeploy

1. Go to **Deployments** tab
2. Click **Redeploy** on latest deployment
3. Wait for deployment to complete

### Step 4: Test

1. Submit the contact form on your website
2. Check `info@chernephysio.co.za` inbox
3. Check Vercel Function Logs if errors occur

## 🔍 GoDaddy SMTP Server Options

GoDaddy provides different SMTP servers:

| Server | Purpose | Port | Security |
|--------|---------|------|----------|
| `smtpout.secureserver.net` | **Outgoing emails** ✅ | 465 (SSL) or 587 (TLS) | SSL/TLS |
| `smtp.secureserver.net` | Incoming (IMAP) | N/A | N/A |

**Use `smtpout.secureserver.net` for sending emails!**

## ⚠️ If Connection Timeout Persists

If you still get connection timeouts after using `smtpout.secureserver.net`, this is because **Vercel serverless functions have network restrictions** that block SMTP connections.

### Alternative Solution: Backend Proxy Service

Since Vercel blocks SMTP connections, you can use a **backend proxy service**:

**Option A: Use Railway or Render (Free tiers available)**
1. Create a small Node.js service on Railway/Render
2. This service connects to GoDaddy SMTP (no restrictions)
3. Your Vercel function calls this service via HTTP
4. This service forwards emails via GoDaddy SMTP

**Option B: Use EmailJS (Free tier)**
1. Sign up at https://www.emailjs.com
2. Configure it to use GoDaddy SMTP
3. Use EmailJS API from Vercel (HTTP-based, works with serverless)

**Option C: Contact GoDaddy Support**
- Ask if they have an **Email API** (not SMTP)
- Some email providers offer REST APIs for serverless functions
- This would avoid SMTP connection issues entirely

## 🔐 Security Checklist

- ✅ SMTP authentication enabled in GoDaddy
- ✅ Using correct SMTP server (`smtpout.secureserver.net`)
- ✅ Using SSL (port 465) or TLS (port 587)
- ✅ Credentials stored securely in Vercel environment variables

## 📞 GoDaddy Support

If you need help:
- **GoDaddy Support**: 1-480-505-8877
- **Email Setup Help**: Check GoDaddy's email setup documentation
- **SMTP Authentication**: May need to be enabled in your account settings

## 🧪 Testing SMTP Credentials

Before using in Vercel, test your SMTP settings with an email client:

1. **Using Outlook/Thunderbird:**
   - Add account: `info@chernephysio.co.za`
   - SMTP: `smtpout.secureserver.net`
   - Port: `465` (SSL) or `587` (TLS)
   - Authentication: Required
   - Username: `info@chernephysio.co.za`
   - Password: Your email password

2. **If email client works**, SMTP credentials are correct
3. **If email client fails**, check GoDaddy account settings or contact support

---

**Try `smtpout.secureserver.net` first - this is likely the issue!** 🎯

