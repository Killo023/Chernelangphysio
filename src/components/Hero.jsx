import './Hero.css';

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const headerHeight = 96; // Updated for new header height
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero section" id="home">
      <div className="hero__container container">
        <div className="hero__content">
          <div className="hero__main">
            <h1 className="hero__title">Cherné Langeveldt Physiotherapy</h1>
            <p className="hero__subtitle">Care Beyond the Surface</p>
            <a href="#contact" className="button button-primary" onClick={scrollToContact}>
              Book an Appointment
            </a>
          </div>
          
          <div className="hero__story">
            <div className="story__header">
              <h3 className="story__title">Find us on Social Media as</h3>
              <h4 className="story__brand">Jozi South Physiotherapy</h4>
            </div>
            
            <div className="story__content">
              <p className="story__text">
                It is more than just a geographic marker; it's our little love letter to the south of Johannesburg—the place our founder has called home her entire life. A place that shaped her, educated her, and instilled in her a profound sense of community.
              </p>
              
              <p className="story__text">
                For us, physiotherapy is not just a profession, but a way of giving back to the community that raised us. The streets, the people, and the spirit of the south are woven into the fabric of this practice. We are committed to delivering <strong>'care beyond the surface'</strong>, by providing our clients with cutting-edge physiotherapy services that are expert-led, evidence-based and tailored to each individual's needs.
              </p>
            </div>
          </div>
        </div>
        
        <div className="hero__image">
          <img src="/Media/c17-1.jpg" alt="Cherné Langeveldt Physiotherapy" className="hero__logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;