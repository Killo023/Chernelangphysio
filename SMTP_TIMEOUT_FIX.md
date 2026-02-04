# SMTP Connection Timeout Fix

## Issue
Connection timeout when connecting to GoDaddy SMTP server from Vercel serverless functions.

## Solutions Applied

### 1. Increased Timeouts
- Connection timeout: 30 seconds (increased from 10s)
- Greeting timeout: 30 seconds (increased from 10s)
- Socket timeout: 30 seconds (added)

### 2. Try Alternative Port
If port 587 continues to timeout, try port 465 (SSL):

**Update in Vercel Environment Variables:**
```
SMTP_PORT = 465
SMTP_SECURE = true
```

Port 465 uses SSL instead of STARTTLS and may have better connectivity from Vercel.

## Alternative: Try Port 465 (SSL)

GoDaddy supports both:
- **Port 587** (STARTTLS/TLS) - Current
- **Port 465** (SSL) - Alternative

### Steps to Try Port 465:

1. **Update Environment Variables in Vercel:**
   ```
   SMTP_PORT = 465
   SMTP_SECURE = true
   ```
   (Keep all other variables the same)

2. **Redeploy** your site

3. **Test** the contact form again

## Why Timeouts Happen

Vercel serverless functions may have network restrictions or delays when connecting to external SMTP servers. This is why:
- We increased timeout values
- Port 465 (SSL) might work better (direct SSL connection)
- GoDaddy's SMTP might have rate limiting or connection throttling

## If Port 465 Also Times Out

Consider using **Resend** (email API service) instead:
1. Sign up at https://resend.com (free tier available)
2. Get API key
3. Add to Vercel:
   ```
   RESEND_API_KEY = re_your_key_here
   RECIPIENT_EMAIL = info@chernephysio.co.za
   SENDER_EMAIL = info@chernephysio.co.za
   ```
4. Resend works better with serverless functions (API-based, no SMTP connection)

## Testing

After updating configuration:
1. Redeploy site
2. Submit contact form
3. Check Vercel Function Logs for errors
4. If timeout persists, try port 465 or switch to Resend


