import { useState } from 'react';
import './Services.css';
import ServiceDetail from './ServiceDetail';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId);
  };

  const handleCloseDetail = () => {
    setSelectedService(null);
  };

  const approaches = [
    {
      number: '01',
      title: 'Comprehensive Assessment',
      description: 'Identifying the root causes of pain and dysfunction through comprehensive patient interviews and detailed subjective assessments—actively listening for key clinical clues to inform diagnostic reasoning, while remaining vigilant for red flags or risk factors that may require further medical investigation.'
    },
    {
      number: '02',
      title: 'Objective Data Tracking',
      description: 'Gathering objective data during assessments to accurately track progress over time, ensuring measurable improvements and evidence-based treatment adjustments.'
    },
    {
      number: '03',
      title: 'Personalised Treatment',
      description: 'Providing personalised physiotherapy and rehabilitation, with targeted treatment strategies directed at specific impairments and dysfunctions identified during the objective assessment.'
    },
    {
      number: '04',
      title: 'Patient Education',
      description: 'Equipping patients with the knowledge to maintain long-term health and long-lasting results through education and self-management strategies.'
    },
    {
      number: '05',
      title: 'Accessible Healthcare',
      description: 'Delivering high-quality, accessible healthcare to all our clients, ensuring expert-led and evidence-based care for everyone in our community.'
    }
  ];

  const specializedServices = [
    {
      id: 'chest-physiotherapy',
      title: 'Chest Physiotherapy',
      category: 'Respiratory Care',
      description: 'Specialised respiratory care aimed at improving lung function and airway clearance for patients of all ages, from infants to elderly.',
      briefDescription: 'Comprehensive respiratory care improving lung function and airway clearance. Expert treatment for COPD, asthma, pneumonia, and post-operative recovery with evidence-based techniques.',
      icon: '🫁'
    },
    {
      id: 'thoracic-cardiac-rehabilitation',
      title: 'Thoracic & Cardiac Rehabilitation',
      category: 'Post-Surgical Care',
      description: 'Medically supervised programme supporting recovery after cardiac or thoracic surgery with careful vital sign monitoring.',
      briefDescription: 'Structured rehabilitation programme for post-cardiac and thoracic surgery recovery. Safe return to exercise with vital sign monitoring and personalised recovery plans.',
      icon: '❤️'
    },
    {
      id: 'womens-pelvic-health',
      title: 'Women\'s & Pelvic Health',
      category: 'Specialized Care',
      description: 'Comprehensive women\'s health services supporting pregnancy, postnatal recovery, menopause, and pelvic health concerns.',
      briefDescription: 'Specialized care for women through all life stages. Expert support for pregnancy, postnatal recovery, pelvic floor issues, and menopause-related concerns.',
      icon: '🌸'
    },
    {
      id: 'orthopaedic-rehabilitation',
      title: 'Orthopaedic Rehabilitation',
      category: 'Pre & Post-Operative',
      description: 'Pre- and post-operative physiotherapy for orthopaedic surgery recovery, helping patients regain mobility, strength, and confidence.',
      briefDescription: 'Expert pre- and post-operative care for orthopaedic surgery. Comprehensive rehabilitation for joint replacements, fractures, ligament repairs, and spinal procedures.',
      icon: '🦴'
    },
    {
      id: 'sports-physiotherapy',
      title: 'Sports Physiotherapy',
      category: 'Sports & Performance',
      description: 'Specialized treatment for sports injuries with focus on injury prevention, recovery, and performance optimization for athletes of all levels.',
      briefDescription: 'Comprehensive sports injury treatment and prevention. From weekend warriors to professional athletes - expert care for ligament injuries, muscle strains, and performance optimization.',
      icon: '⚽'
    },
    {
      id: 'chronic-pain-management',
      title: 'Chronic Pain Management',
      category: 'Pain Management',
      description: 'Evidence-based approach to managing persistent pain, addressing both physical and emotional components through education, movement, and personalized care.',
      briefDescription: 'Holistic chronic pain management combining education, gentle exercise, and manual therapy. Expert care for persistent back pain, fibromyalgia, arthritis, and nerve-related pain.',
      icon: '🔄'
    },
    {
      id: 'neurological-rehabilitation',
      title: 'Neurological Rehabilitation',
      category: 'Neuro Recovery',
      description: 'Specialized physiotherapy for neurological conditions, retraining the nervous system to restore movement, balance, and independence.',
      briefDescription: 'Expert neurological rehabilitation for stroke, brain injury, spinal cord injury, MS, and Parkinson\'s. Focused on restoring function, balance, and quality of life.',
      icon: '🧠'
    },
    {
      id: 'musculoskeletal-conditions',
      title: 'Neck, Back & Musculoskeletal',
      category: 'NMS Conditions',
      description: 'Comprehensive treatment for neck, back, and musculoskeletal pain including headaches, joint pain, and postural dysfunction.',
      briefDescription: 'Expert treatment for neck pain, back pain, headaches, shoulder injuries, and musculoskeletal issues. Manual therapy, exercise, and education for lasting relief.',
      icon: '💪'
    },
    {
      id: 'other-services',
      title: 'Other Services',
      category: 'Community Care',
      description: 'Extended care beyond the clinic to make physiotherapy more accessible and community-focused.',
      briefDescription: 'Home visits, corporate wellness, sports events, and tele-physiotherapy. Making quality care accessible in your home, workplace, and community.',
      icon: '🏠'
    },
    {
      id: 'performance-conditioning',
      title: 'Performance & Conditioning',
      category: 'Sports Performance',
      description: 'Beyond injury management - helping athletes improve performance, prevent injuries, and achieve their goals.',
      briefDescription: 'Sports conditioning, pre-season testing, and Pilates. Comprehensive performance enhancement for athletes of all levels.',
      icon: '🏃'
    },
    {
      id: 'practice-products',
      title: 'Practice Products',
      category: 'Support Products',
      description: 'Range of products and tools to support your physiotherapy treatment, recovery, and home exercise programmes.',
      briefDescription: 'Massage gels, heat packs, resistance bands, kinesiology tape, and TENS/EMS machines. Supporting your recovery at home.',
      icon: '🛍️'
    },
    {
      id: 'physiotherapy-modalities',
      title: 'Physiotherapy Modalities',
      category: 'Treatment Techniques',
      description: 'Evidence-based physiotherapy modalities to support recovery, manage pain, and optimise function.',
      briefDescription: 'Manual therapy, dry needling, shockwave therapy, Pilates, and more. Comprehensive treatment techniques tailored to your needs.',
      icon: '⚕️'
    }
  ];

  return (
    <section className="services section" id="services">
      <div className="container">
        {/* Header Section */}
        <div className="services__header">
          <div className="header__content">
            <h2 className="section__title">Our Approach</h2>
          </div>
        </div>


        {/* Approach Steps */}
        <div className="approaches__container">
          <div className="approaches__list">
            {approaches.map((approach, index) => (
              <div className="approach__item" key={index}>
                <div className="approach__number">
                  <span className="number">{approach.number}</span>
                </div>
                <div className="approach__content">
                  <h3 className="approach__title">{approach.title}</h3>
                  <p className="approach__description">{approach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Services */}
        <div className="specialized__section">
          <div className="specialized__header">
            <h3 className="specialized__title">Our Services</h3>
            <p className="specialized__subtitle">
              Expert care in specialized areas of physiotherapy
            </p>
          </div>
          
          <div className="services__grid">
            {specializedServices.map((service, index) => (
              <div className="service__item" key={index}>
                <div className="service__content">
                  <div className="service__header">
                    <span className="service__category">{service.category}</span>
                    <div className="service__icon">{service.icon}</div>
                  </div>
                  
                  <h4 
                    className="service__title clickable-title" 
                    onClick={() => handleServiceClick(service.id)}
                  >
                    {service.title}
                  </h4>
                  
                  <p className="service__description">{service.briefDescription}</p>
                  
                  <button 
                    className="service__button"
                    onClick={() => handleServiceClick(service.id)}
                  >
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetail 
          serviceId={selectedService} 
          onClose={handleCloseDetail}
        />
      )}
    </section>
  );
};

export default Services;