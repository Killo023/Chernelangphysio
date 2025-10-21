import { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sydney Mack',
      location: 'Local Guide',
      rating: 5,
      text: 'I picked up a strained calf muscle in March and visited a physiotherapist near me, but after 4 visits and no progress I was referred by a relative to try Cherne. In April i had my first visit and by my second visit I could already feel progress. Within the 4th visit I could do my first 50km run. I want to commend her for a sterling job done.',
      condition: 'Calf Muscle Strain - Comrades Marathon Recovery'
    },
    {
      name: 'Thuli Kubheka',
      location: 'Johannesburg',
      rating: 5,
      text: 'Chernè is such a humble but very professional person. She treated me with love and special care after my knee operation. I\'m strong now walking without crutches because of her. Keep up the good work my girl.',
      condition: 'Post-Knee Operation Rehabilitation'
    },
    {
      name: 'Sharon Ligreen',
      location: 'Johannesburg',
      rating: 5,
      text: 'I highly recommend Cherne. She has helped me with my right hip post-surgery recovery. Her exercise programs were effective and I am now walking well within a short period of time! It is so important to find the right physiotherapy support when one needs it the most.',
      condition: 'Hip Post-Surgery Recovery'
    },
    {
      name: 'Quinton Hartley',
      location: 'Johannesburg',
      rating: 5,
      text: 'I thank Mrs.Cherne Langeveldt, Physiotherapist for intervening when I injured my right knee. She assisted me, gave me the correct exercises to complete. Today my right knee is operating optimally. Mrs Langevelt provides quality, friendly and efficient service.',
      condition: 'Knee Injury Rehabilitation'
    },
    {
      name: 'Dorene Van Tonder',
      location: 'Johannesburg',
      rating: 5,
      text: 'Cherne is amazing. She takes her time to find out more about your situation and your history before treating you. Her care and follow-up means the world. Cherne treated me 3 times for frozen shoulders. It has been about 5 months and I have no pain.',
      condition: 'Frozen Shoulder Treatment'
    },
    {
      name: 'Kyra',
      location: 'Johannesburg',
      rating: 5,
      text: 'Cherne is a very knowledgeable physio who takes time in explaining her treatment goals and techniques with you. Overall I was very happy with my treatment and will definitely recommend visiting her practice to anyone looking for a physio!',
      condition: 'General Physiotherapy Treatment'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <h2 className="section__title">Patient Success Stories</h2>
        <p className="section__subtitle">
          Hear from those who've experienced care beyond the surface
        </p>

        <div className="testimonials__container">
          <button className="testimonial__arrow testimonial__arrow--left" onClick={prevSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="testimonials__wrapper">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial__card ${index === activeIndex ? 'active' : ''}`}
              >
                <div className="testimonial__stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="testimonial__text">"{testimonial.text}"</p>
                <div className="testimonial__author">
                  <div className="testimonial__avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="testimonial__info">
                    <h4>{testimonial.name}</h4>
                    <p className="testimonial__location">{testimonial.location}</p>
                    <p className="testimonial__condition">{testimonial.condition}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="testimonial__arrow testimonial__arrow--right" onClick={nextSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="testimonial__dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial__dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

