import { useState, useRef, useEffect } from 'react';
import './FAQBot.css';

const FAQBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [chatMessages, setChatMessages] = useState([
    {
      type: 'bot',
      text: "Hi! 👋 I'm here to help answer your questions about our physiotherapy services. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // FAQ Database
  const faqs = [
    {
      id: 1,
      category: 'services',
      question: 'What services do you offer?',
      answer: 'We offer comprehensive physiotherapy services including: Chest Physiotherapy, Thoracic & Cardiac Rehabilitation, Women\'s & Pelvic Health, Orthopaedic Rehabilitation, Sports Physiotherapy, Chronic Pain Management, Neurological Rehabilitation, Neck/Back & Musculoskeletal Conditions, and more. Check our Services section for detailed information.'
    },
    {
      id: 2,
      category: 'appointments',
      question: 'How do I book an appointment?',
      answer: 'You can book an appointment by filling out the contact form on our website, calling us at 083 235 6980, or emailing info@chernelangphysio.co.za. We\'ll get back to you as soon as possible to schedule your session.'
    },
    {
      id: 3,
      category: 'location',
      question: 'Where are you located?',
      answer: 'We are located at 246 Vorster Ave, Glenvista, Johannesburg South, 1448, South Africa. We also offer home visits for patients who cannot attend in person.'
    },
    {
      id: 4,
      category: 'insurance',
      question: 'Do you accept medical aid?',
      answer: 'Yes, we accept most major medical aid schemes. Please contact us directly with your medical aid details and we can confirm coverage and assist with claims.'
    },
    {
      id: 5,
      category: 'services',
      question: 'Do you offer home visits?',
      answer: 'Yes, we offer home visits for patients recovering from surgery, illness, or with limited mobility. Home-based physiotherapy is available in selected areas. Contact us to discuss your needs.'
    },
    {
      id: 6,
      category: 'appointments',
      question: 'What should I bring to my first appointment?',
      answer: 'Please bring your ID, medical aid card (if applicable), referral letter from your doctor (if you have one), any relevant X-rays or medical reports, comfortable clothing, and a list of any medications you\'re currently taking.'
    },
    {
      id: 7,
      category: 'services',
      question: 'Do you treat sports injuries?',
      answer: 'Yes! We specialize in sports physiotherapy for athletes of all levels. We treat ligament sprains, muscle strains, overuse injuries, and provide rehabilitation programs to get you back to sport safely and stronger.'
    },
    {
      id: 8,
      category: 'services',
      question: 'Do you help with chronic pain?',
      answer: 'Absolutely. Our chronic pain management services use evidence-based techniques including gentle exercise, manual therapy, pain education, movement retraining, and activity pacing to help you manage and reduce chronic pain.'
    },
    {
      id: 9,
      category: 'services',
      question: 'Do you offer women\'s health services?',
      answer: 'Yes, we provide specialized Women\'s & Pelvic Health services including pregnancy-related pain relief, postnatal recovery, pelvic floor training, post-gynaecological surgery recovery, and support through all life stages.'
    },
    {
      id: 10,
      category: 'appointments',
      question: 'How long does a session last?',
      answer: 'Initial consultations typically last 60-75 minutes, while follow-up sessions are usually 45-60 minutes. The duration may vary based on your specific treatment needs.'
    },
    {
      id: 11,
      category: 'services',
      question: 'Do you treat post-surgical patients?',
      answer: 'Yes, we provide comprehensive pre and post-operative rehabilitation for orthopaedic, cardiac, thoracic, and other surgeries. We help with prehab preparation and post-op recovery to get you back to full function.'
    },
    {
      id: 12,
      category: 'services',
      question: 'Can you help with workplace ergonomics?',
      answer: 'Yes, we offer corporate wellness services including ergonomic assessments, workplace evaluations, posture screenings, and injury prevention programs. We can visit your workplace or provide consultations.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'services', name: 'Services' },
    { id: 'appointments', name: 'Appointments' },
    { id: 'location', name: 'Location' },
    { id: 'insurance', name: 'Insurance' }
  ];

  // Filter FAQs based on search and category
  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle FAQ selection
  const handleFAQClick = (faq) => {
    const newMessages = [
      ...chatMessages,
      {
        type: 'user',
        text: faq.question,
        timestamp: new Date()
      },
      {
        type: 'bot',
        text: faq.answer,
        timestamp: new Date()
      }
    ];
    setChatMessages(newMessages);
    scrollToBottom();
  };

  // Handle user input
  const handleSendMessage = (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;

    // Add user message
    const newMessages = [
      ...chatMessages,
      {
        type: 'user',
        text: query,
        timestamp: new Date()
      }
    ];
    setChatMessages(newMessages);
    setSearchQuery('');

    // Find matching FAQ
    const matchingFAQ = faqs.find(faq =>
      faq.question.toLowerCase().includes(query.toLowerCase()) ||
      faq.answer.toLowerCase().includes(query.toLowerCase())
    );

    // Bot response
    setTimeout(() => {
      let botResponse;
      if (matchingFAQ) {
        botResponse = matchingFAQ.answer;
      } else {
        const keywords = query.toLowerCase();
        if (keywords.includes('book') || keywords.includes('appointment')) {
          botResponse = faqs.find(f => f.category === 'appointments')?.answer || 
                       'You can book an appointment by using our contact form, calling 083 235 6980, or emailing info@chernelangphysio.co.za';
        } else if (keywords.includes('location') || keywords.includes('address') || keywords.includes('where')) {
          botResponse = faqs.find(f => f.category === 'location')?.answer;
        } else if (keywords.includes('service') || keywords.includes('treatment') || keywords.includes('what')) {
          botResponse = faqs.find(f => f.category === 'services')?.answer;
        } else {
          botResponse = "I'm here to help! Here are some questions I can answer. Feel free to ask about our services, appointments, location, or anything else related to physiotherapy.";
        }
      }

      setChatMessages([
        ...newMessages,
        {
          type: 'bot',
          text: botResponse,
          timestamp: new Date()
        }
      ]);
      scrollToBottom();
    }, 500);
  };

  const scrollToBottom = () => {
    setTimeout(() => {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [isOpen, chatMessages]);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className={`faq-bot-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open FAQ chatbot"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
        {!isOpen && <span className="notification-badge">?</span>}
      </button>

      {/* Chat Window */}
      <div className={`faq-bot-window ${isOpen ? 'open' : ''}`}>
        <div className="faq-bot-header">
          <div className="bot-avatar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className="bot-info">
            <h3>FAQ Assistant</h3>
            <p>24/7 Help Available</p>
          </div>
          <button
            className="close-button"
            onClick={() => setIsOpen(false)}
            aria-label="Close chatbot"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="faq-bot-content">
          {/* Search and Category Filter */}
          <div className="faq-filters">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search or ask a question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                ref={inputRef}
              />
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
            <div className="category-tabs">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          {filteredFAQs.length > 0 ? (
            <div className="faq-list">
              {filteredFAQs.map(faq => (
                <button
                  key={faq.id}
                  className="faq-item"
                  onClick={() => handleFAQClick(faq)}
                >
                  <div className="faq-question">
                    <span className="faq-icon">?</span>
                    {faq.question}
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>No FAQs found. Try a different search or category.</p>
            </div>
          )}

          {/* Chat Messages */}
          {chatMessages.length > 1 && (
            <div className="chat-messages">
              {chatMessages.map((message, index) => (
                <div key={index} className={`chat-message ${message.type}`}>
                  <div className="message-content">
                    {message.text}
                  </div>
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>
          )}
        </div>

        {/* Input Area */}
        <form className="faq-bot-input" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Type your question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            ref={inputRef}
          />
          <button type="submit" aria-label="Send message">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
};

export default FAQBot;

