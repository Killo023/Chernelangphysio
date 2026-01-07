# Environment Variables Not Detected - Troubleshooting

If you're seeing "Email service not configured" even after adding environment variables, follow these steps:

## ✅ Quick Checklist

1. **Variables Added in Vercel Dashboard**
   - ✅ Go to: Settings → Environment Variables
   - ✅ All variables are present

2. **Environment Selection**
   - ✅ Variables added to **Production** environment
   - ✅ (Optional) Also add to Preview/Development if testing

3. **Variable Names (Case-Sensitive!)**
   - ✅ `SMTP_HOST` (not `smtp_host` or `Smtp_Host`)
   - ✅ `SMTP_PORT` (not `smtp_port`)
   - ✅ `SMTP_USER` (not `smtp_user`)
   - ✅ `SMTP_PASS` (not `smtp_pass`)
   - ✅ `RECIPIENT_EMAIL`
   - ✅ `SENDER_EMAIL`

4. **No Extra Spaces**
   - ✅ No spaces around the `=` sign
   - ✅ No leading/trailing spaces in values
   - ✅ Values start and end correctly

5. **Site Redeployed**
   - ✅ After adding variables, clicked "Redeploy"
   - ✅ Or wait for auto-deployment to complete

## 🔍 Step-by-Step Debugging

### Step 1: Verify Variables in Vercel

1. Go to Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Check each variable:
   - Click on each variable to see its value
   - Verify spelling is exact (case-sensitive)
   - Check there are no extra spaces

### Step 2: Check Function Logs

1. Go to Vercel Dashboard → Your Project
2. Click on **Functions** tab
3. Click on `/api/send-email`
4. Go to **Logs** tab
5. Look for the error log - it will show which variables are detected

The error log will show something like:
```
Email service configuration check: {
  smtpHost: 'Set (smtp.secureserver.net)' or 'Not set',
  smtpUser: 'Set' or 'Not set',
  smtpPass: 'Set' or 'Not set'
}
```

### Step 3: Verify Variable Names Match Exactly

**Correct (what the code looks for):**
```
SMTP_HOST = smtp.secureserver.net
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = info@chernephysio.co.za
SMTP_PASS = Killo23011@
RECIPIENT_EMAIL = info@chernephysio.co.za
SENDER_EMAIL = info@chernephysio.co.za
```

**Common Mistakes:**
- ❌ `smtp_host` (lowercase) - Should be `SMTP_HOST`
- ❌ `SMTP_HOST = ` (space after =) - Should be `SMTP_HOST=` or `SMTP_HOST = value`
- ❌ `SMTP_HOST= smtp.secureserver.net` (space before value)
- ❌ ` SMTP_HOST` (leading space in name)

### Step 4: Force Redeploy

1. Go to **Deployments** tab
2. Find the latest deployment
3. Click the **three dots (⋯)** menu
4. Click **Redeploy**
5. Make sure **"Use existing Build Cache"** is **UNCHECKED**
6. Click **Redeploy**

This forces Vercel to rebuild with the latest environment variables.

### Step 5: Check Environment Scope

When adding variables, make sure:
- **Production** is selected (for live site)
- **Preview** is selected (if you want it in preview deployments)
- **Development** is selected (if you want it in local dev)

For your live site, **Production** is required.

## 🐛 Common Issues & Solutions

### Issue 1: Variables Not Showing in Logs

**Solution:** 
- Variables might be added to wrong environment
- Delete and re-add variables, ensuring **Production** is selected
- Redeploy after adding

### Issue 2: Only Some Variables Detected

**Solution:**
- Check spelling of variable names
- Ensure all variables are in the same environment (Production)
- Check for typos (e.g., `SMTP_HOS` instead of `SMTP_HOST`)

### Issue 3: Variables Added But Still Getting Error

**Solution:**
1. Check Vercel Function Logs (see Step 2 above)
2. Look at the debug output - it shows exactly which variables are detected
3. Delete the deployment and trigger a new one
4. Wait for deployment to fully complete (can take 1-2 minutes)

### Issue 4: Variables Work Locally But Not on Vercel

**Solution:**
- Local `.env` files don't work on Vercel
- Must add variables in Vercel Dashboard
- Variables must be added to **Production** environment

## 📋 Exact Variables to Add

Copy and paste these exactly (no modifications):

**Variable Name:** `SMTP_HOST`
**Value:** `smtp.secureserver.net`
**Environment:** Production ✅

**Variable Name:** `SMTP_PORT`
**Value:** `587`
**Environment:** Production ✅

**Variable Name:** `SMTP_SECURE`
**Value:** `false`
**Environment:** Production ✅

**Variable Name:** `SMTP_USER`
**Value:** `info@chernephysio.co.za`
**Environment:** Production ✅

**Variable Name:** `SMTP_PASS`
**Value:** `Killo23011@`
**Environment:** Production ✅

**Variable Name:** `RECIPIENT_EMAIL`
**Value:** `info@chernephysio.co.za`
**Environment:** Production ✅

**Variable Name:** `SENDER_EMAIL`
**Value:** `info@chernephysio.co.za`
**Environment:** Production ✅

**Variable Name:** `SERVICE_NAME`
**Value:** `Cherné Langeveldt Physiotherapy`
**Environment:** Production ✅

## ✅ After Adding Variables

1. **Verify** each variable shows in the list
2. **Redeploy** your site (Deployments → Redeploy)
3. **Wait** for deployment to complete (check status)
4. **Test** the contact form again
5. **Check** Function Logs if it still fails

## 🔍 Still Not Working?

If you've tried everything:

1. **Check Function Logs** - They will show exactly which variables are detected
2. **Delete all variables** and add them again (one by one)
3. **Create a new deployment** from scratch
4. **Contact Vercel support** with the function logs showing which variables are missing

The function logs will tell you exactly what's wrong!

