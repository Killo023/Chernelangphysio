// Vercel Serverless Function for Gemini AI Chat
import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ 
        error: 'AI service not configured. Please set GEMINI_API_KEY in environment variables.' 
      });
    }

    // Initialize Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Business context - comprehensive information about the practice
    const businessContext = `
You are a helpful AI assistant for Cherné Langeveldt Physiotherapy practice. Answer questions based ONLY on the following business information:

BUSINESS INFORMATION:

Practice Name: Cherné Langeveldt Physiotherapy
Tagline: "Care Beyond the Surface"
Also known as: Jozi South Physiotherapy (on social media)

CONTACT INFORMATION:
- Phone: 083 235 6980
- Email: info@chernelangphysio.co.za
- Address: 246 Vorster Ave, Glenvista, Johannesburg South, 1448, South Africa
- WhatsApp: +27832356980

APPOINTMENT BOOKING:
- Book via contact form on website
- Call 083 235 6980
- Email info@chernelangphysio.co.za
- WhatsApp: +27832356980
- Session duration: Initial consultations 60-75 minutes, Follow-up sessions 45-60 minutes

LOCATION & SERVICES:
- Located in Johannesburg South (Glenvista)
- Also offers home visits for patients with limited mobility
- Home visits available in selected areas

SERVICES OFFERED:

1. Chest Physiotherapy
   - For respiratory conditions (bronchitis, pneumonia, asthma, COPD, cystic fibrosis)
   - All ages from infants to elderly
   - In-hospital and outpatient settings

2. Thoracic & Cardiac Rehabilitation
   - Post-surgical rehabilitation (CABG, valve replacement, lung resections, thoracotomies)
   - Vital signs monitoring
   - Graded cardiovascular training
   - Breathing retraining

3. Women's & Pelvic Health
   - Pregnancy-related pain relief
   - Postnatal recovery
   - Pelvic floor training
   - Post-gynaecological surgery recovery
   - Diastasis recti, C-section scar management
   - Bladder control, pelvic organ prolapse

4. Orthopaedic Rehabilitation
   - Pre and post-operative rehabilitation
   - Upper limb: shoulder replacements, fractures, elbow, wrist, hand injuries
   - Lower limb: hip/knee replacements, ACL/MCL reconstructions, fractures, Achilles tendon
   - Spinal: fusions, discectomies, chronic back/neck pain

5. Sports Physiotherapy
   - Lower limb injuries (ACL, hamstring, ankle sprains, IT band, shin splints)
   - Upper limb injuries (rotator cuff, tennis elbow, wrist/hand)
   - Spinal injuries (lower back, neck, core instability)
   - Return-to-play programs

6. Chronic Pain Management
   - Neck/back pain, headaches, fibromyalgia, arthritis
   - Pain education, graded exercise, manual therapy
   - Activity pacing and goal setting

7. Neurological Rehabilitation
   - Stroke, brain injury, spinal cord injury, MS, Parkinson's
   - Gait re-education, balance training
   - Task-specific retraining

8. Neck, Back & Musculoskeletal Conditions
   - Postural pain, cervical radiculopathy
   - Shoulder impingement, frozen shoulder
   - Sciatica, disc-related pain
   - TMJ dysfunction, whiplash

9. Other Services
   - Home Visits (for recovery, limited mobility)
   - Corporate Wellness (ergonomic assessments, workplace evaluations)
   - Sports Events coverage
   - Tele-Physiotherapy (online consultations)

10. Performance & Conditioning
    - Sports conditioning programs
    - Pre-season baseline testing
    - Group and individual Pilates

11. Practice Products
    - Massage gels, heat packs, Epsom salts
    - Kinesiology tape, resistance bands
    - TENS and EMS machines (pre-order)

TREATMENT TECHNIQUES:
- Manual therapy and joint mobilisation
- Soft tissue release
- Dry needling
- Shockwave therapy
- TENS/EMS
- Therapeutic exercise
- Clinical Pilates
- Taping and strapping
- Postural and ergonomic advice

INSURANCE:
- Accepts most major medical aid schemes
- Contact practice with medical aid details to confirm coverage

IMPORTANT GUIDELINES:
- Be friendly, professional, and helpful
- Always use the exact contact information provided above
- If asked about operating hours, mention they should contact the practice directly (083 235 6980 or info@chernelangphysio.co.za)
- If asked about pricing, direct them to contact the practice for specific rates
- For bookings, always mention all available methods (contact form, phone, email, WhatsApp)
- Be concise but informative
- If you don't have specific information, direct them to contact the practice
- Always use South African context (Johannesburg, medical aid schemes, etc.)
`;

    // Build conversation history with context
    const systemInstruction = businessContext;
    
    // Create conversation prompt
    let conversationPrompt = systemInstruction + '\n\nConversation History:\n';
    
    // Add conversation history (last 10 messages to avoid token limits)
    const recentHistory = conversationHistory.slice(-10);
    recentHistory.forEach(msg => {
      conversationPrompt += `${msg.type === 'user' ? 'User' : 'Assistant'}: ${msg.text}\n`;
    });
    
    conversationPrompt += `\nUser: ${message}\nAssistant:`;

    // Generate response
    const result = await model.generateContent(conversationPrompt);
    const response = await result.response;
    const text = response.text();

    return res.status(200).json({ 
      success: true, 
      message: text.trim()
    });

  } catch (error) {
    console.error('Gemini API error:', error);
    
    // Handle specific Gemini errors
    if (error.message?.includes('API_KEY')) {
      return res.status(500).json({ 
        error: 'Invalid API key. Please check GEMINI_API_KEY in environment variables.' 
      });
    }
    
    return res.status(500).json({ 
      error: 'Failed to generate response. Please try again.',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

