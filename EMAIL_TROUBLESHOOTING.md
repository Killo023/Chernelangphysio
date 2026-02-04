# Email Contact Form Troubleshooting Guide

If you're experiencing errors with the contact form on your live site, follow these steps:

## 🔍 Common Issues & Solutions

### 1. **"Email service not configured" Error**

**Cause:** Environment variables are not set in Vercel.

**Solution:**
1. Go to your Vercel project dashboard
2. Navigate to **Settings → Environment Variables**
3. Add ONE of the following configurations:

   **Option A - Resend (Recommended):**
   ```
   RESEND_API_KEY = re_your_api_key_here
   RECIPIENT_EMAIL = info@chernephysio.co.za
   SENDER_EMAIL = info@chernephysio.co.za
   ```

   **Option B - SMTP:**
   ```
   SMTP_HOST = smtp.your-provider.com
   SMTP_PORT = 587
   SMTP_USER = info@chernephysio.co.za
   SMTP_PASS = your-email-password
   RECIPIENT_EMAIL = info@chernephysio.co.za
   SENDER_EMAIL = info@chernephysio.co.za
   ```

4. **Important:** After adding variables, **Redeploy** your site in Vercel

### 2. **404 Error / API Endpoint Not Found**

**Cause:** The API route might not be deployed correctly.

**Solution:**
1. Check that `/api/send-email.js` exists in your project root
2. Verify the file is committed to GitHub
3. In Vercel, check the **Functions** tab to see if `/api/send-email` appears
4. Redeploy your site

### 3. **Network Error / Failed to Fetch**

**Cause:** CORS issues or network connectivity problems.

**Solution:**
- The CORS headers have been added in the latest update
- Clear your browser cache and try again
- Check browser console (F12) for specific error messages

### 4. **Resend API Errors**

**Possible causes:**
- Invalid API key
- Unverified domain
- Rate limiting (free tier: 3,000 emails/month)

**Solution:**
1. Verify your API key in Resend dashboard
2. For production, verify your domain in Resend
3. Check Resend dashboard for error logs

### 5. **SMTP Authentication Errors**

**Possible causes:**
- Incorrect credentials
- SMTP server blocking the connection
- Need to use App Password (Gmail)

**Solution:**
1. Double-check SMTP credentials
2. For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password
3. Ensure your email provider allows SMTP access

## 🛠️ Debugging Steps

### Step 1: Check Vercel Function Logs

1. Go to Vercel Dashboard → Your Project
2. Click on **Functions** tab
3. Click on `/api/send-email`
4. Check the **Logs** tab for error messages

### Step 2: Test the API Endpoint Directly

Open your browser console and run:
```javascript
fetch('/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test',
    email: 'test@example.com',
    message: 'Test message'
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

This will show you the exact error message.

### Step 3: Verify Environment Variables

In Vercel Dashboard → Settings → Environment Variables, ensure:
- Variables are added to **Production** environment (or All)
- Variable names match exactly (case-sensitive)
- No extra spaces in values
- Variables are saved and site has been redeployed

### Step 4: Check Browser Console

1. Open your website
2. Press F12 to open Developer Tools
3. Go to **Console** tab
4. Try submitting the form
5. Look for error messages (they'll be red)

## 📋 Quick Checklist

- [ ] Environment variables added in Vercel
- [ ] Site redeployed after adding variables
- [ ] API function exists at `/api/send-email.js`
- [ ] Dependencies installed (`resend` or `nodemailer` in package.json)
- [ ] Checked Vercel function logs for errors
- [ ] Tested API endpoint directly
- [ ] Verified email service credentials are correct

## 🚨 Still Not Working?

1. **Check Vercel Logs:**
   - Go to Vercel → Your Project → Functions → /api/send-email → Logs
   - Look for error messages

2. **Verify Email Service:**
   - Resend: Check your Resend dashboard for errors
   - SMTP: Test credentials with an email client first

3. **Common Solutions:**
   - Clear Vercel build cache and redeploy
   - Verify all environment variables are set for **Production**
   - Check that the API route is accessible (should appear in Vercel Functions tab)

## 📞 Need Help?

If you're still experiencing issues:
1. Note the exact error message from browser console
2. Check Vercel function logs
3. Verify environment variables are set correctly
4. Try a simple Resend test email from their dashboard


