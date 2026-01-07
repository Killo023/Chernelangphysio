import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setError('');
    setIsLoading(true);

    try {
      // Call the Vercel serverless function
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if response is OK and if it's JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned an invalid response. Please try again later.');
      }

      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error('Failed to parse JSON response:', jsonError);
        throw new Error('Server error. Please try again later.');
      }

      if (!response.ok) {
        throw new Error(data.error || `Failed to send message (${response.status}). Please try again.`);
      }

      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

    } catch (err) {
      console.error('Error sending email:', err);
      let errorMessage = 'Failed to send message. Please try again later.';
      
      if (err instanceof TypeError && err.message.includes('fetch')) {
        errorMessage = 'Network error. Please check your connection and try again.';
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      
      // Clear error after 7 seconds
      setTimeout(() => {
        setError('');
      }, 7000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact" itemScope itemType="https://schema.org/Physiotherapy">
      <div className="container">
        <h2 className="section__title">Book Your Physiotherapy Appointment in Glenanda, Mondeor, Mulbarton & Surrounding Areas</h2>
        <p className="section__subtitle">Ready to start your recovery journey? Contact our physiotherapy practice serving Glenanda, Mondeor, Mulbarton, Winchester Hill, Columbine, Glenvista & Johannesburg South</p>
        
        {/* Hidden SEO Content - Visible to search engines */}
        <div style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }} aria-hidden="true">
          <h3>Physiotherapy Services Near Me</h3>
          <p>Looking for a physiotherapist near me? Cherné Langeveldt Physiotherapy offers expert physiotherapy services in Glenanda, Mondeor, Mulbarton, Winchester Hill, Columbine, Glenvista, and Johannesburg South. Our practice specializes in sports physiotherapy, orthopaedic rehabilitation, women's health, chronic pain management, and more. Book your appointment today at 083 235 6980 or visit us at 246 Vorster Ave, Glenvista. We serve patients throughout Glenanda, Mondeor, Mulbarton, Winchester Hill, Columbine, Glenvista, Johannesburg South, and surrounding areas.</p>
          <h3>Best Physiotherapist in Glenanda, Mondeor, Mulbarton</h3>
          <p>Find the best physiotherapist in Glenanda, Mondeor, Mulbarton, Winchester Hill, Columbine, and Glenvista. Our practice offers comprehensive physiotherapy services including chest physiotherapy, cardiac rehabilitation, neurological rehabilitation, and sports injury treatment. We accept medical aid and offer home visits for patients with limited mobility in Glenanda, Mondeor, Mulbarton, Winchester Hill, Columbine, and surrounding Johannesburg South areas.</p>
          <h3>Physiotherapy in Mondeor</h3>
          <p>Expert physiotherapy services in Mondeor. Specializing in sports injuries, back pain, post-surgical rehabilitation, and chronic pain management.</p>
          <h3>Physiotherapy in Mulbarton</h3>
          <p>Comprehensive physiotherapy care in Mulbarton. Offering orthopaedic rehabilitation, women's health services, and neurological rehabilitation.</p>
          <h3>Physiotherapy in Winchester Hill</h3>
          <p>Professional physiotherapy services in Winchester Hill. Expert treatment for musculoskeletal conditions, sports injuries, and chronic pain.</p>
          <h3>Physiotherapy in Columbine</h3>
          <p>Quality physiotherapy care in Columbine. Specialized services including chest physiotherapy, cardiac rehabilitation, and sports performance.</p>
        </div>

        <div className="contact__container">
          {/* Contact Form */}
          <div className="contact__form-wrapper">
            <form className={`contact__form ${showSuccess ? 'form-hidden' : ''}`} onSubmit={handleSubmit}>
              <div className="form__group">
                <label htmlFor="name" className="form__label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form__input"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form__group">
                <label htmlFor="email" className="form__label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form__input"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form__group">
                <label htmlFor="message" className="form__label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form__input form__textarea"
                  placeholder="Tell us about your concerns..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              {error && (
                <div className="form__error">
                  <i className="fas fa-exclamation-circle"></i>
                  <p>{error}</p>
                </div>
              )}

              <button 
                type="submit" 
                className="button button-primary"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span>Sending...</span>
                    <i className="fas fa-spinner fa-spin"></i>
                  </>
                ) : (
                  <>
                    Send Message
                    <i className="fas fa-paper-plane"></i>
                  </>
                )}
              </button>
            </form>

            <div className={`form__success ${showSuccess ? 'show' : ''}`}>
              <i className="fas fa-check-circle"></i>
              <p>Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact__info">
            <div className="contact__social-banner">
              <h3>Find Us on Social Media</h3>
              <p className="social__name">Jozi South Physiotherapy</p>
              <div className="social__links">
                <a href="#" className="social__link" aria-label="Facebook">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="social__link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social__link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="social__link" aria-label="WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h4>Phone</h4>
                <p>083 235 6980</p>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div>
                <h4>Email</h4>
                <p>info@chernelangphysio.co.za</p>
              </div>
            </div>

            <div className="contact__info-card" itemScope itemType="https://schema.org/PostalAddress">
              <div className="contact__info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4>Location</h4>
                <p itemProp="streetAddress">246 Vorster Ave</p>
                <p><span itemProp="addressLocality">Glenvista</span>, <span itemProp="addressRegion">Johannesburg South</span><br />
                <span itemProp="postalCode">1448</span>, <span itemProp="addressCountry">South Africa</span></p>
                <p><strong>Serving:</strong> Glenanda, Mondeor, Mulbarton, Winchester Hill, Columbine, Glenvista, Johannesburg South & Surrounding Areas</p>
              </div>
            </div>

            <div className="contact__map">
              <div className="map__placeholder">
                <i className="fas fa-map"></i>
                <p>Map Location</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
