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

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message. Please try again.');
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
      setError(err.message || 'Failed to send message. Please try again later.');
      
      // Clear error after 7 seconds
      setTimeout(() => {
        setError('');
      }, 7000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section__title">Get In Touch</h2>
        <p className="section__subtitle">Ready to start your recovery journey?</p>

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
                <p>info@chernephysio.co.za</p>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h4>Location</h4>
                <p>246 Vorster Ave<br />Glenvista, Johannesburg South<br />1448, South Africa</p>
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
