# Gemini AI Chatbot Setup Guide

Your FAQ bot now uses Google Gemini AI to provide intelligent, context-aware responses based on your business information.

## 🚀 Quick Setup

### Step 1: Get Gemini API Key

1. Go to **Google AI Studio**: https://makersuite.google.com/app/apikey
2. Sign in with your Google account
3. Click **"Get API Key"** or **"Create API Key"**
4. Select or create a Google Cloud project
5. Copy your API key (starts with `AIza...`)

**Note**: Gemini API has a free tier with generous limits. Check current pricing at https://ai.google.dev/pricing

### Step 2: Add to Vercel

1. Go to **Vercel Dashboard** → Your Project
2. Navigate to **Settings** → **Environment Variables**
3. Add new variable:
   ```
   GEMINI_API_KEY = your_api_key_here
   ```
4. Select **Production** environment (and optionally Preview/Development)
5. Click **Save**

### Step 3: Redeploy

1. Go to **Deployments** tab
2. Click **Redeploy** on the latest deployment
3. Wait for deployment to complete

### Step 4: Test

1. Visit your website
2. Click the FAQ bot button (bottom-right)
3. Ask a question like:
   - "What are your operating hours?"
   - "How long does a session take?"
   - "Do you treat sports injuries?"
   - "What should I bring to my first appointment?"

The bot will provide intelligent, context-aware responses!

## 📋 What the Bot Knows

The bot has comprehensive information about:

- ✅ **Business Details**: Practice name, tagline, social media
- ✅ **Contact Information**: Phone, email, WhatsApp, address
- ✅ **All Services**: 11 service categories with details
- ✅ **Treatment Techniques**: Manual therapy, exercises, etc.
- ✅ **Appointment Booking**: All booking methods
- ✅ **Location**: Address, home visits availability
- ✅ **Insurance**: Medical aid acceptance
- ✅ **Session Information**: Duration, what to bring

## 🔧 How It Works

1. **User asks a question** in the chat
2. **Question is sent** to Gemini AI via API
3. **Gemini uses business context** to generate accurate answer
4. **Response is displayed** in the chat interface
5. **Conversation history** is maintained for context

## 💡 Example Questions Users Can Ask

- "What time do you open?"
- "How much does a session cost?"
- "Do you treat back pain?"
- "Can I book online?"
- "What should I bring?"
- "Do you accept medical aid?"
- "Where are you located?"
- "How long is a session?"
- "Do you offer home visits?"
- "What services do you provide for sports injuries?"

## ⚙️ Customization

To update business information in the bot's knowledge:

1. Edit `/api/chat.js`
2. Update the `businessContext` string with new information
3. Redeploy your site

## 🔐 Security

- ✅ API key stored securely in Vercel environment variables
- ✅ API endpoint includes CORS protection
- ✅ Input validation and error handling
- ✅ API key never exposed to client-side code

## 💰 Pricing

**Gemini API Free Tier:**
- 60 requests per minute
- 1,500 requests per day
- Generous for most websites

**If you need more:**
- Check current pricing: https://ai.google.dev/pricing
- Most physiotherapy practices won't exceed free tier

## 🐛 Troubleshooting

### Bot not responding?
1. Check Vercel Function Logs (Deployments → Function Logs)
2. Verify `GEMINI_API_KEY` is set in environment variables
3. Ensure site has been redeployed after adding the key

### Getting API errors?
1. Verify API key is correct (starts with `AIza...`)
2. Check if you've exceeded rate limits
3. Check Vercel function logs for specific error messages

### Responses not accurate?
1. Update business context in `/api/chat.js`
2. Add more specific information to the context
3. The bot uses only the information you provide

## 📞 Support

- **Gemini API Docs**: https://ai.google.dev/docs
- **Google AI Studio**: https://makersuite.google.com
- **API Status**: Check Google Cloud status page

---

**Your AI chatbot is now ready to provide 24/7 intelligent customer support!** 🤖✨


