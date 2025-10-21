import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container">
        <div className="about__image">
          <img src="/Media/Founder.jpeg" alt="Cherné Petersen" className="about__img" />
        </div>
        <div className="about__content">
          <h2 className="section__title">Meet Cherné Petersen</h2>
          <span className="about__subtitle">Founder & Physiotherapist</span>
          
          <div className="about__section">
            <h3>Education & Professional Journey</h3>
            <ul className="about__list">
              <li>Graduated from the University of the Witwatersrand with an honours degree in Physiotherapy</li>
              <li>Qualified in 2019 with a postgraduate diploma in Orthopaedic Manipulative Therapy (now Advanced Neuromusculoskeletal Physiotherapy)</li>
              <li>Close to a decade of experience across public and private healthcare, including: hospitals, outpatient clinics, geriatric care centres and sports physiotherapy</li>
            </ul>
          </div>

          <div className="about__section">
            <h3>Beyond the Clinic</h3>
            <ul className="about__list">
              <li>Passionate about mentoring young people and inspiring women from all backgrounds and walks of life</li>
              <li>Dedicated to giving back to the physiotherapy profession through mentorship, teaching and hands-on guidance</li>
              <li>Enjoys weight training, running, golf, a good read and family adventures</li>
              <li>Advocate for healthy living and mental wellness</li>
            </ul>
          </div>

          <div className="about__stats">
            <div className="stat__item">
              <i className="fas fa-award"></i>
              <div>
                <h4>Advanced Qualification</h4>
                <p>Postgraduate in OMT</p>
              </div>
            </div>
            <div className="stat__item">
              <i className="fas fa-user-doctor"></i>
              <div>
                <h4>Nearly a Decade</h4>
                <p>Of Clinical Experience</p>
              </div>
            </div>
            <div className="stat__item">
              <i className="fas fa-heart"></i>
              <div>
                <h4>Community Focused</h4>
                <p>Giving Back to Jozi South</p>
              </div>
            </div>
            <div className="stat__item">
              <i className="fas fa-chalkboard-teacher"></i>
              <div>
                <h4>Mentor & Educator</h4>
                <p>Inspiring Future Therapists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
