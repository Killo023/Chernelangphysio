# Resend API Setup Guide - Recommended Solution

## Why Resend?

Vercel serverless functions have connection restrictions that block direct SMTP connections to GoDaddy's servers. **Resend API** is the solution because:

✅ **API-based** - Works perfectly with serverless functions  
✅ **No connection timeouts** - HTTP API instead of SMTP  
✅ **Reliable delivery** - Built for modern serverless architecture  
✅ **Free tier** - 3,000 emails/month free  
✅ **Better deliverability** - Professional email infrastructure  

## 🚀 Quick Setup (5 minutes)

### Step 1: Sign Up for Resend

1. Go to **https://resend.com**
2. Click **"Sign Up"** (use Google/GitHub or email)
3. Verify your email

### Step 2: Get Your API Key

1. Once logged in, go to **https://resend.com/api-keys**
2. Click **"Create API Key"**
3. Give it a name: "Cherne Physio Website"
4. Select **"Sending access"** (read-only is fine)
5. Copy the API key (starts with `re_`)
   - **Important**: You can only see it once, so copy it immediately

### Step 3: Verify Your Domain (Recommended)

**For production use, verify your domain:**

1. In Resend dashboard, go to **Domains**
2. Click **"Add Domain"**
3. Enter: `chernephysio.co.za`
4. Resend will show DNS records to add:
   - Go to your domain registrar (GoDaddy)
   - Add the provided DNS records
   - Wait for verification (usually 5-15 minutes)
5. Once verified, you can use `info@chernephysio.co.za` as sender

**For testing (skip verification):**
- You can use Resend's default domain for testing
- Sender will be something like `onboarding@resend.dev`
- Recipients still work fine

### Step 4: Add to Vercel

1. Go to **Vercel Dashboard** → Your Project
2. **Settings** → **Environment Variables**
3. Add these variables:

   ```
   RESEND_API_KEY = re_your_api_key_here
   RECIPIENT_EMAIL = info@chernephysio.co.za
   SENDER_EMAIL = info@chernephysio.co.za
   ```
   
   **OR** if domain not verified yet, use:
   ```
   RESEND_API_KEY = re_your_api_key_here
   RECIPIENT_EMAIL = info@chernephysio.co.za
   SENDER_EMAIL = onboarding@resend.dev
   ```

4. Make sure **Production** environment is selected
5. Click **Save**

### Step 5: Remove SMTP Variables (Optional)

Since you're using Resend, you can remove SMTP variables:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`

(Or leave them - the code will prefer Resend if API key is present)

### Step 6: Redeploy

1. Go to **Deployments** tab
2. Click **Redeploy** on latest deployment
3. Wait for deployment to complete

### Step 7: Test

1. Visit your website
2. Submit the contact form
3. Check `info@chernephysio.co.za` inbox
4. Email should arrive within seconds! ✅

## 📧 How It Works

When a user submits the contact form:
- Form sends data to `/api/send-email`
- Code checks for `RESEND_API_KEY` first
- If present, sends email via Resend API
- Email arrives at `info@chernephysio.co.za`
- Reply-To is set to the client's email (you can reply directly)

## 💰 Pricing

**Free Tier:**
- 3,000 emails/month
- 100 emails/day
- Perfect for a physiotherapy practice

**If you need more:**
- $20/month for 50,000 emails
- Pay as you go options available

## ✅ Benefits Over SMTP

| Feature | SMTP | Resend API |
|---------|------|------------|
| Serverless compatibility | ❌ Timeouts | ✅ Perfect |
| Setup complexity | ⚠️ Medium | ✅ Easy |
| Reliability | ⚠️ Network issues | ✅ Very reliable |
| Deliverability | ⚠️ Variable | ✅ Excellent |
| Cost | Free | Free (up to 3K/mo) |

## 🔍 Troubleshooting

**"Invalid API key" error:**
- Check you copied the full key (starts with `re_`)
- Make sure no extra spaces in Vercel environment variable
- Verify API key is for "Sending access"

**Email not sending:**
- Check Resend dashboard → Logs for errors
- Verify `RECIPIENT_EMAIL` is set correctly
- Check if you've hit rate limits (100/day on free tier)

**Domain verification:**
- Takes 5-15 minutes after adding DNS records
- Check Resend dashboard for verification status
- You can send emails before verification (using `onboarding@resend.dev`)

## 📞 Support

- Resend Docs: https://resend.com/docs
- Resend Support: support@resend.com
- Resend Discord: https://resend.com/discord

---

**This will solve your SMTP timeout issues!** Resend is built specifically for serverless functions like Vercel. 🚀


