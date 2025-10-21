import { useState, useEffect } from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({ serviceId, onClose }) => {
  const [service, setService] = useState(null);

  useEffect(() => {
    // Define service details
    const services = {
      'chest-physiotherapy': {
        id: 'chest-physiotherapy',
        title: 'Chest Physiotherapy',
        category: 'Respiratory Care',
        icon: '🫁',
        description: 'Chest physiotherapy is a specialised area of physiotherapy aimed at improving respiratory function and assisting with the clearance of airway secretions. We offer chest physiotherapy to patients of all ages, from infants to the elderly, in both in-hospital and outpatient settings.',
        techniques: [
          'Manual chest percussion and vibration',
          'Postural drainage positioning',
          'Breathing exercises (deep breathing, segmental breathing)',
          'Active cycle of breathing techniques (ACBT)',
          'Gentle suctioning for infants and toddlers',
          'Nebulisation therapy for airway dilation'
        ],
        conditions: [
          'Bronchitis',
          'Pneumonia',
          'Bronchiolitis',
          'Asthma',
          'Chronic Obstructive Pulmonary Disease (COPD)',
          'Emphysema',
          'Cystic Fibrosis',
          'Post-operative pulmonary complications',
          'Other conditions resulting in secretion retention or reduced lung function'
        ],
        benefits: [
          'Improved breathing and lung function',
          'Reduced risk of respiratory infections',
          'Enhanced quality of life for chronic conditions',
          'Faster recovery from acute respiratory illnesses',
          'Better management of chronic respiratory diseases'
        ],
        clinicImages: [
          '/Media/c15-1.jpg',
          '/Media/c16-1.jpg'
        ]
      },
      'thoracic-cardiac-rehabilitation': {
        id: 'thoracic-cardiac-rehabilitation',
        title: 'Thoracic & Cardiac Rehabilitation',
        category: 'Post-Surgical Care',
        icon: '❤️',
        description: 'Thoracic and cardiac rehabilitation is a structured, medically supervised programme designed to support recovery after cardiac or chest (thoracic) surgery. We provide tailored rehabilitation for patients following procedures such as coronary artery bypass graft (CABG), valve replacement or repair, lung resections, thoracotomies, and minimally invasive cardiac or thoracic interventions.',
        procedures: [
          'Coronary artery bypass graft (CABG)',
          'Valve replacement or repair',
          'Lung resections (lobectomy or pneumonectomy)',
          'Thoracotomies',
          'Minimally invasive cardiac or thoracic interventions',
          'Pacemaker or defibrillator implantation'
        ],
        techniques: [
          'Vital signs monitoring (heart rate, blood pressure, oxygen saturation)',
          'Graded cardiovascular training',
          'Breathing retraining',
          'Individualised exercise prescription',
          'Chest physiotherapy for lung expansion',
          'Manual therapy for scar tissue and joint mobility',
          'Functional rehabilitation for upper body'
        ],
        goals: [
          'Rebuild endurance progressively',
          'Restore functional movement',
          'Return to pre-surgery activities',
          'Improve heart and lung efficiency',
          'Restore shoulder and thoracic mobility',
          'Return to active, independent lifestyle'
        ],
        benefits: [
          'Safe return to exercise and daily activities',
          'Improved cardiovascular fitness',
          'Enhanced recovery from surgery',
          'Reduced risk of complications',
          'Increased confidence in physical abilities'
        ],
        clinicImages: [
          '/Media/c14-1.jpg',
          '/Media/c22-1.jpg'
        ]
      },
      'womens-pelvic-health': {
        id: 'womens-pelvic-health',
        title: 'Women\'s & Pelvic Health',
        category: 'Specialized Care',
        icon: '🌸',
        description: 'We recognise that women\'s bodies go through unique physical changes across different life stages — from pregnancy and childbirth to menopause and beyond. These changes can influence the pelvic region, core, and surrounding muscles, often resulting in pain, weakness, or loss of confidence in movement.',
        services: [
          'Pregnancy-related pain relief',
          'Postnatal recovery',
          'Post-gynaecological surgery recovery',
          'Pelvic floor and bladder control',
          'Chronic pelvic or lower back discomfort',
          'Core stability and posture retraining'
        ],
        techniques: [
          'Pelvic floor muscle training',
          'Core stability exercises',
          'Manual therapy for scar tissue',
          'Postural assessment and correction',
          'Breathing and relaxation techniques',
          'Functional movement retraining'
        ],
        conditions: [
          'Pregnancy-related pain (lower back, pelvic girdle pain, sciatica)',
          'Diastasis recti (abdominal separation)',
          'C-section or perineal scar management',
          'Bladder leakage and urgency',
          'Pelvic organ prolapse',
          'Chronic pelvic pain',
          'Menopause-related concerns'
        ],
        benefits: [
          'Improved pelvic floor function',
          'Reduced pain and discomfort',
          'Enhanced confidence in movement',
          'Better bladder and bowel control',
          'Support through all life stages',
          'Restored core strength and stability'
        ],
        clinicImages: [
          '/Media/c10-1.jpg',
          '/Media/c9-1.jpg'
        ]
      },
      'orthopaedic-rehabilitation': {
        id: 'orthopaedic-rehabilitation',
        title: 'Orthopaedic Rehabilitation',
        category: 'Pre & Post-Operative',
        icon: '🦴',
        description: 'We work closely with patients recovering from orthopaedic surgery or injury to help them regain mobility, strength, and confidence in their movement. Whether you\'re preparing for surgery or rebuilding function afterwards, our goal is to ensure your recovery is smooth, safe, and tailored to your individual needs. Orthopaedic physiotherapy focuses on the muscles, joints, bones, tendons, and ligaments — helping restore movement and reduce pain after injury, surgery, or prolonged immobilisation.',
        upperLimbConditions: [
          'Shoulder replacements, rotator cuff repair, and shoulder impingement',
          'Fractures of the clavicle (collarbone), humerus, radius, or ulna',
          'Elbow fractures, dislocations, or tendon repairs',
          'Wrist and hand fractures or post-operative rehabilitation following fixation or tendon repair'
        ],
        lowerLimbConditions: [
          'Hip and knee replacements',
          'Ligament reconstructions (e.g. ACL, PCL, MCL)',
          'Meniscus repairs and arthroscopic procedures',
          'Fractures of the femur, tibia, fibula, patella, ankle, or foot bones',
          'Achilles tendon repair or rupture management'
        ],
        spinalConditions: [
          'Spinal fusions, discectomies, or decompression surgeries',
          'Sacroiliac joint dysfunction or pelvic fractures',
          'Chronic postural or degenerative back and neck pain'
        ],
        prehabFocus: [
          'Strengthening and conditioning the muscles surrounding the surgical area',
          'Improving joint mobility and circulation to enhance healing',
          'Education on what to expect post-surgery and how to safely manage early movement',
          'Reducing post-operative complications such as stiffness or swelling'
        ],
        postOpTreatment: [
          'Pain and swelling management through hands-on therapy, exercise, and modalities',
          'Gradual mobility restoration, focusing on safe, guided movement',
          'Strength and stability training to rebuild the muscles around the affected joint or limb',
          'Scar tissue management to promote optimal healing and reduce stiffness',
          'Gait retraining and functional re-education for walking, balance, and return to normal activity'
        ],
        benefits: [
          'Accelerate recovery and independence',
          'Reduce pain and swelling naturally',
          'Restore joint mobility and muscle strength',
          'Improve confidence in daily movement and sport',
          'Minimise risk of re-injury',
          'Prevent long-term complications'
        ],
        clinicImages: [
          '/Media/c24.jpeg'
        ]
      },
      'sports-physiotherapy': {
        id: 'sports-physiotherapy',
        title: 'Sports Physiotherapy',
        category: 'Sports & Performance',
        icon: '⚽',
        description: 'We understand the physical and mental demands that come with sport — whether you\'re a weekend runner, school athlete, or professional player. A sports injury doesn\'t just affect your performance; it can disrupt your training routine, confidence, and daily life. Our sports physiotherapy service focuses on injury prevention, treatment, and performance optimisation, helping athletes of all levels recover safely and return to sport stronger than before.',
        lowerLimbInjuries: [
          'Ligament sprains and tears: ACL, MCL, LCL, ankle sprains',
          'Muscle strains and tears: hamstrings, quadriceps, adductors, calves',
          'Overuse injuries: patellofemoral pain, iliotibial band syndrome, Achilles tendinopathy, shin splints',
          'Fractures or stress fractures from repetitive load or trauma'
        ],
        upperLimbInjuries: [
          'Shoulder injuries: rotator cuff strains, impingement, dislocations',
          'Elbow pain: tennis elbow (lateral epicondylitis), golfer\'s elbow (medial epicondylitis)',
          'Wrist and hand injuries: tendon strains, ligament sprains, sport-related fractures'
        ],
        spinalInjuries: [
          'Lower back pain related to training load or poor movement mechanics',
          'Neck strain or whiplash from contact sports or sudden impact',
          'Core weakness or instability contributing to recurring injuries'
        ],
        techniques: [
          'Comprehensive biomechanical assessment to identify contributing factors',
          'Manual therapy and soft tissue techniques to restore movement and reduce pain',
          'Individualised strength and conditioning tailored to your sport',
          'Functional retraining for running, jumping, or directional change mechanics',
          'Progressive return-to-play programmes that prioritise safety and performance',
          'Sport taping and strapping for joint protection and reassurance during activity'
        ],
        benefits: [
          'Safe return to sport and competition',
          'Reduced risk of re-injury',
          'Improved movement mechanics and performance',
          'Enhanced strength and conditioning',
          'Better understanding of injury prevention',
          'Restored confidence in athletic ability'
        ],
        clinicImages: [
          '/Media/c7-1.jpg',
          '/Media/c13-1.jpg'
        ]
      },
      'chronic-pain-management': {
        id: 'chronic-pain-management',
        title: 'Chronic Pain Management',
        category: 'Pain Management',
        icon: '🔄',
        description: 'We understand that chronic pain is more than just a lingering ache — it can affect every part of your life, from work and movement to sleep, mood, and confidence. Our approach to chronic pain management focuses on helping you understand your pain, reduce its impact, and rebuild your ability to move and live well. We use evidence-based techniques to address both the physical and emotional components of pain — guiding you toward recovery through education, movement, and personalised care.',
        whatIsPain: 'Chronic pain refers to pain that persists for longer than three months, or beyond the normal healing time of an injury. It may be constant or intermittent, and can occur with or without an identifiable cause.',
        conditions: [
          'Chronic neck or lower back pain',
          'Headaches or tension-related pain',
          'Fibromyalgia',
          'Arthritis and joint pain',
          'Nerve-related pain (such as sciatica)',
          'Post-surgical or post-injury pain that hasn\'t fully resolved',
          'Complex Regional Pain Syndrome (CRPS) or other long-term pain syndromes'
        ],
        techniques: [
          'Comprehensive assessment to identify movement patterns, muscular imbalances, and contributing lifestyle factors',
          'Gentle, graded exercise to restore strength, flexibility, and endurance',
          'Manual therapy to reduce stiffness, ease muscle tension, and improve circulation',
          'Pain education, helping you understand how the brain and body process pain',
          'Posture and movement retraining, teaching your body to move efficiently without triggering symptoms',
          'Relaxation and breathing techniques to calm the nervous system and improve control',
          'Activity pacing and goal setting, helping you gradually rebuild tolerance to daily activities'
        ],
        contributingFactors: [
          'Stress and emotional load',
          'Sleep quality and fatigue',
          'Diet and inflammation',
          'Physical inactivity or overactivity',
          'Fear of movement (kinesiophobia)'
        ],
        benefits: [
          'Reduction in pain intensity and frequency',
          'Improved movement confidence',
          'Enhanced quality of life',
          'Better sleep and energy levels',
          'Greater understanding and control of pain',
          'Reduced reliance on pain medication',
          'Restored ability to participate in daily activities'
        ],
        clinicImages: [
          '/Media/c19-1.jpg'
        ]
      },
      'neurological-rehabilitation': {
        id: 'neurological-rehabilitation',
        title: 'Neurological Rehabilitation',
        category: 'Neuro Recovery',
        icon: '🧠',
        description: 'We provide specialised physiotherapy for individuals recovering from neurological conditions that affect movement, balance, and independence. Neurological rehabilitation focuses on retraining the nervous system through targeted exercise, movement re-education, and functional retraining. Our aim is to help you regain control, confidence, and quality of life — whether you\'re in the early stages of recovery or managing a long-term condition.',
        conditions: [
          'Stroke (Cerebrovascular Accident – CVA)',
          'Traumatic brain injury',
          'Spinal cord injury',
          'Multiple Sclerosis (MS)',
          'Parkinson\'s Disease',
          'Guillain-Barré Syndrome',
          'Peripheral neuropathy or nerve injuries',
          'Balance and coordination disorders',
          'Functional neurological disorders (FND)',
          'Recovery from neurosurgical procedures'
        ],
        techniques: [
          'Task-specific retraining: Repetitive, guided movements that promote neuroplasticity',
          'Gait re-education: Improving walking pattern, balance, and symmetry',
          'Balance and coordination training: Reducing the risk of falls and improving confidence',
          'Strengthening and stretching exercises: Managing spasticity, weakness, or muscle tightness',
          'Postural correction and core stability: Restoring alignment and efficient movement',
          'Functional independence training: Regaining skills for daily activities',
          'Education for patients and caregivers: Safe handling techniques and home exercise strategies'
        ],
        approachFocus: [
          'Encouraging active participation — you are central to your recovery process',
          'Setting realistic and achievable goals that build confidence and motivation',
          'Using hands-on facilitation and evidence-based movement techniques',
          'Providing ongoing education and support for both patients and their families',
          'Emphasizing patience, consistency, and empowerment throughout the recovery journey'
        ],
        benefits: [
          'Enhanced neuroplasticity — the brain\'s ability to reorganise and relearn movement',
          'Prevention of secondary complications such as contractures, pain, or muscle wasting',
          'Promotion of independence and confidence in daily life',
          'Improved balance and reduced fall risk',
          'Better quality of life for both patients and caregivers',
          'Restored functional movement and mobility'
        ]
      },
      'musculoskeletal-conditions': {
        id: 'musculoskeletal-conditions',
        title: 'Neck, Back & Musculoskeletal Conditions',
        category: 'NMS Conditions',
        icon: '💪',
        description: 'We treat a wide range of neuromusculoskeletal (NMS) conditions — problems that involve the muscles, joints, nerves, and soft tissues of the body. These are among the most common reasons people seek physiotherapy, and with early, evidence-based treatment, recovery can be quicker and more complete. Whether your pain started suddenly, developed gradually, or keeps recurring, our goal is to identify the underlying cause, relieve your symptoms, and restore normal, pain-free movement.',
        neckShoulderConditions: [
          'Postural or stress-related neck pain',
          'Cervical facet joint irritation and nerve root pain (cervical radiculopathy)',
          'Shoulder impingement syndrome',
          'Rotator cuff injuries or tendinopathies',
          'Frozen shoulder (adhesive capsulitis)',
          'Shoulder instability or joint dislocation recovery',
          'Scapular dyskinesis and muscle imbalance around the neck and shoulder'
        ],
        backConditions: [
          'Acute and chronic lower back pain',
          'Disc-related pain or nerve irritation (sciatica)',
          'Facet joint dysfunction',
          'Sacroiliac joint pain or instability',
          'Thoracic (mid-back) pain and stiffness',
          'Rib or costovertebral joint dysfunction'
        ],
        headacheJawConditions: [
          'Tension-type and cervicogenic headaches',
          'Jaw (TMJ) dysfunction, including clicking, locking, or pain with chewing',
          'Neck-related headaches caused by cervical muscle or joint dysfunction'
        ],
        otherConditions: [
          'Whiplash-associated disorders',
          'Joint sprains and soft tissue injuries',
          'Chest wall and rib pain (non-cardiac in origin)',
          'Overuse and repetitive strain injuries',
          'Postural dysfunction and workplace-related pain',
          'Chronic muscle tension and stiffness from inactivity or stress'
        ],
        techniques: [
          'Manual therapy and joint mobilisation to restore movement',
          'Soft tissue and myofascial release to ease muscle tension',
          'Dry needling and taping for pain modulation and support',
          'Targeted rehabilitation exercises to strengthen and stabilise',
          'Postural retraining and ergonomic advice to prevent recurrence',
          'Education and movement re-education to restore confidence in movement'
        ],
        benefits: [
          'Reduced pain and discomfort',
          'Improved mobility and flexibility',
          'Enhanced posture and body mechanics',
          'Prevention of recurrence',
          'Better understanding of your condition',
          'Restored ability to work and perform daily activities',
          'Long-term pain relief and improved quality of life'
        ],
        clinicImages: [
          '/Media/c20-1.jpg',
          '/Media/c21-1.jpg'
        ]
      },
      'other-services': {
        id: 'other-services',
        title: 'Other Services',
        category: 'Community Care',
        icon: '🏠',
        description: 'We also extend our care beyond the clinic to make physiotherapy more accessible and community-focused.',
        services: [
          'Home Visits',
          'Corporate Wellness',
          'Sports Events and Activations',
          'Tele-Physiotherapy'
        ],
        homeVisits: [
          'For patients recovering from surgery, illness, or with limited mobility',
          'Home-based physiotherapy in selected areas',
          'Continuity of care in the comfort and safety of your own home',
          'Treatment plans tailored to your environment and goals'
        ],
        corporateWellness: [
          'Employee health and productivity promotion',
          'On-site injury prevention programs',
          'Ergonomic assessments and workplace evaluations',
          'Posture and movement screenings',
          'Wellness talks and education sessions',
          'Reducing absenteeism and improving workplace performance'
        ],
        sportsEvents: [
          'Community and professional sporting event coverage',
          'On-the-day injury management',
          'Taping and strapping services',
          'Recovery guidance for athletes',
          'Education for athletes and spectators'
        ],
        telePhysiotherapy: [
          'Online consultations for patients who cannot attend in person',
          'Assessment and exercise prescription',
          'Education and progress monitoring',
          'Convenient access to physiotherapy care'
        ],
        note: 'Please note that some conditions require hands-on treatment — in these cases, patients will be advised to attend the practice or visit their nearest physiotherapist for in-person care.',
        benefits: [
          'Increased accessibility to physiotherapy care',
          'Convenient treatment in familiar environments',
          'Community-focused healthcare approach',
          'Flexible service delivery options',
          'Comprehensive workplace wellness programs'
        ],
        clinicImages: [
          '/Media/c25.jpeg'
        ]
      },
      'performance-conditioning': {
        id: 'performance-conditioning',
        title: 'Performance & Conditioning',
        category: 'Sports Performance',
        icon: '🏃',
        description: 'We go beyond injury management to help athletes and active individuals improve performance, prevent injuries, and achieve their goals. Our performance services are designed for individuals, teams, and groups, with a focus on strength, conditioning, movement efficiency, and functional fitness.',
        services: [
          'Sports Conditioning',
          'Pre-Season Baseline Testing',
          'Pilates'
        ],
        sportsConditioning: [
          'Programmes tailored to your sport, position, and individual goals',
          'Improving strength, speed, agility, endurance, and mobility',
          'Enhanced performance while reducing injury risk',
          'Suitable for athletes of all levels',
          'From school teams to semi-professional and recreational players'
        ],
        preSeasonTesting: [
          'Pre-season assessments for teams and individual athletes',
          'Baseline of strength, flexibility, endurance, balance, and movement mechanics',
          'Identification of muscle imbalances or movement limitations',
          'Informing personalised conditioning and training programmes',
          'Reducing injury risk through targeted interventions'
        ],
        pilatesServices: [
          'Group Pilates sessions at events or team training',
          'One-on-one mat Pilates at the practice',
          'Core strength, flexibility, and postural control development',
          'Body awareness and movement quality improvement',
          'Injury prevention and athletic performance enhancement'
        ],
        pilatesBenefits: [
          'Builds core strength and stability',
          'Improves flexibility and postural control',
          'Enhances body awareness',
          'Essential for injury prevention',
          'Optimizes athletic performance',
          'Supports overall movement quality and injury resilience'
        ],
        whyChoose: [
          'Programmes tailored to your sport, level, and goals',
          'Focus on injury prevention, strength, and functional performance',
          'Integrates conditioning, testing, and Pilates for a well-rounded approach',
          'Suitable for individuals, teams, and group events'
        ],
        benefits: [
          'Improved athletic performance',
          'Reduced injury risk',
          'Enhanced strength and conditioning',
          'Better movement efficiency',
          'Comprehensive fitness assessment',
          'Personalized training programs'
        ],
        clinicImages: [
          '/Media/c17-1.jpg',
          '/Media/c18-1.jpg'
        ]
      },
      'practice-products': {
        id: 'practice-products',
        title: 'Practice Products',
        category: 'Support Products',
        icon: '🛍️',
        description: 'We offer a range of products and tools to support your physiotherapy treatment, recovery, and home exercise programmes. These items are carefully selected to complement your care and help you continue your rehabilitation at home.',
        products: [
          'Massage Gels and Ointments',
          'Heat Packs',
          'Epsom Salts',
          'Kinesiology Tape',
          'Other Taping and Strapping Materials',
          'Resistance Bands',
          'TENS and EMS Machines'
        ],
        productDetails: [
          {
            name: 'Massage Gels and Ointments',
            description: 'For relief of muscle tension and soreness'
          },
          {
            name: 'Heat Packs',
            description: 'To soothe stiff muscles, improve blood flow, and aid recovery'
          },
          {
            name: 'Epsom Salts',
            description: 'For relaxing baths to ease muscle aches and promote overall wellbeing'
          },
          {
            name: 'Kinesiology Tape',
            description: 'Flexible tape used to support muscles and joints, improve circulation, and assist movement'
          },
          {
            name: 'Other Taping and Strapping Materials',
            description: 'For joint protection, injury prevention, and post-injury support'
          },
          {
            name: 'Resistance Bands',
            description: 'Versatile tools for strength, flexibility, and rehabilitation exercises at home or in the clinic'
          },
          {
            name: 'TENS and EMS Machines',
            description: 'Available for pre-order — these devices can be used at home to reduce pain, stimulate muscles, and aid recovery, under guidance from your physiotherapist'
          }
        ],
        benefits: [
          'Support your treatment and recovery at home',
          'Continue rehabilitation between clinic visits',
          'Professional advice on safe and effective use',
          'Complement your physiotherapy care',
          'Convenient access to quality products',
          'Expert guidance on product selection and usage'
        ],
        clinicImages: [
          '/Media/c6-1.jpg'
        ]
      },
      'physiotherapy-modalities': {
        id: 'physiotherapy-modalities',
        title: 'Physiotherapy Modalities',
        category: 'Treatment Techniques',
        icon: '⚕️',
        description: 'We use a range of evidence-based physiotherapy modalities to support recovery, manage pain, and optimise function. Each modality is tailored to your condition, goals, and stage of rehabilitation.',
        modalities: [
          'Manual Therapy',
          'Orthopaedic Manipulative Therapy (Joint Manipulation)',
          'Therapeutic Exercise',
          'Clinical Pilates',
          'Dry Needling',
          'Shockwave Therapy',
          'TENS (Transcutaneous Electrical Nerve Stimulation)',
          'EMS (Electrical Muscle Stimulation)',
          'Taping and Strapping',
          'Postural and Ergonomic Advice'
        ],
        modalityDetails: [
          {
            name: 'Manual Therapy',
            description: 'Hands-on techniques including soft tissue release and stretching to relieve muscle tension, improve flexibility, and restore movement.'
          },
          {
            name: 'Orthopaedic Manipulative Therapy (Joint Manipulation)',
            description: 'Skilled, controlled joint movements performed by our physiotherapists to restore normal joint function, reduce stiffness, and improve mobility.'
          },
          {
            name: 'Therapeutic Exercise',
            description: 'Individually designed programmes to strengthen muscles, improve flexibility, restore function, and prevent future injuries.'
          },
          {
            name: 'Clinical Pilates',
            description: 'Mat-based sessions, either one-on-one or in groups, focused on core stability, posture correction, controlled movement, and functional strength.'
          },
          {
            name: 'Dry Needling',
            description: 'Fine needles are used to release tight muscles and trigger points, reduce pain, and improve mobility.'
          },
          {
            name: 'Shockwave Therapy',
            description: 'High-energy sound waves stimulate tissue repair, promote healing in tendinopathies, and reduce chronic soft tissue pain.'
          },
          {
            name: 'TENS (Transcutaneous Electrical Nerve Stimulation)',
            description: 'Gentle electrical stimulation applied to reduce pain and improve comfort during recovery.'
          },
          {
            name: 'EMS (Electrical Muscle Stimulation)',
            description: 'Electrical impulses used to activate muscles, improve strength, and aid muscle recovery after injury or surgery.'
          },
          {
            name: 'Taping and Strapping',
            description: 'Supportive tape applied to stabilise joints, reduce strain, improve proprioception, and protect muscles during activity.'
          },
          {
            name: 'Postural and Ergonomic Advice',
            description: 'Practical guidance on body mechanics, workstation setup, and daily movement habits to reduce strain and prevent injury.'
          }
        ],
        approach: 'These modalities are often combined within a personalised treatment plan, allowing us to address pain, weakness, movement restrictions, and functional goals in a comprehensive and effective way.',
        benefits: [
          'Evidence-based treatment approaches',
          'Personalized modality selection',
          'Comprehensive treatment planning',
          'Pain management and relief',
          'Improved function and mobility',
          'Injury prevention strategies',
          'Optimal recovery outcomes'
        ],
        clinicImages: [
          '/Media/c12-1.jpg'
        ]
      }
    };

    setService(services[serviceId]);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="service-detail-overlay">
        <div className="service-detail-loading">Loading...</div>
      </div>
    );
  }

  return (
    <div className="service-detail-overlay">
      <div className="service-detail-modal">
        <div className="service-detail-header">
          <div className="service-detail-title-section">
            <span className="service-category">{service.category}</span>
            <h2 className="service-detail-title">
              {service.title}
              <span className="service-icon">{service.icon}</span>
            </h2>
          </div>
          <button className="close-button" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="service-detail-content">
          <div className="service-description">
            <p>{service.description}</p>
          </div>

          {service.techniques && (
            <div className="service-section">
              <h3>Treatment Techniques</h3>
              <ul className="service-list">
                {service.techniques.map((technique, index) => (
                  <li key={index}>{technique}</li>
                ))}
              </ul>
            </div>
          )}

          {service.procedures && (
            <div className="service-section">
              <h3>Procedures We Support</h3>
              <ul className="service-list">
                {service.procedures.map((procedure, index) => (
                  <li key={index}>{procedure}</li>
                ))}
              </ul>
            </div>
          )}

          {service.services && (
            <div className="service-section">
              <h3>Services We Provide</h3>
              <ul className="service-list">
                {service.services.map((serviceItem, index) => (
                  <li key={index}>{serviceItem}</li>
                ))}
              </ul>
            </div>
          )}

          {service.conditions && (
            <div className="service-section">
              <h3>Conditions We Treat</h3>
              <div className="conditions-grid">
                {service.conditions.map((condition, index) => (
                  <span key={index} className="condition-tag">{condition}</span>
                ))}
              </div>
            </div>
          )}

          {service.goals && (
            <div className="service-section">
              <h3>Our Goals for You</h3>
              <ul className="service-list">
                {service.goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </div>
          )}

          {service.upperLimbConditions && (
            <div className="service-section">
              <h3>Upper Limb Conditions</h3>
              <ul className="service-list">
                {service.upperLimbConditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
            </div>
          )}

          {service.lowerLimbConditions && (
            <div className="service-section">
              <h3>Lower Limb Conditions</h3>
              <ul className="service-list">
                {service.lowerLimbConditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
            </div>
          )}

          {service.lowerLimbInjuries && (
            <div className="service-section">
              <h3>Lower Limb Injuries</h3>
              <ul className="service-list">
                {service.lowerLimbInjuries.map((injury, index) => (
                  <li key={index}>{injury}</li>
                ))}
              </ul>
            </div>
          )}

          {service.upperLimbInjuries && (
            <div className="service-section">
              <h3>Upper Limb Injuries</h3>
              <ul className="service-list">
                {service.upperLimbInjuries.map((injury, index) => (
                  <li key={index}>{injury}</li>
                ))}
              </ul>
            </div>
          )}

          {service.spinalConditions && (
            <div className="service-section">
              <h3>Spinal & Pelvic Conditions</h3>
              <ul className="service-list">
                {service.spinalConditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
            </div>
          )}

          {service.spinalInjuries && (
            <div className="service-section">
              <h3>Spinal & Core Injuries</h3>
              <ul className="service-list">
                {service.spinalInjuries.map((injury, index) => (
                  <li key={index}>{injury}</li>
                ))}
              </ul>
            </div>
          )}

          {service.prehabFocus && (
            <div className="service-section">
              <h3>Pre-Operative ("Prehab") Physiotherapy</h3>
              <p className="section-intro">Preparing for surgery with targeted physiotherapy can make a significant difference in your post-operative recovery.</p>
              <ul className="service-list">
                {service.prehabFocus.map((focus, index) => (
                  <li key={index}>{focus}</li>
                ))}
              </ul>
            </div>
          )}

          {service.postOpTreatment && (
            <div className="service-section">
              <h3>Post-Operative Rehabilitation</h3>
              <p className="section-intro">After surgery, the goal is to restore your normal function step by step.</p>
              <ul className="service-list">
                {service.postOpTreatment.map((treatment, index) => (
                  <li key={index}>{treatment}</li>
                ))}
              </ul>
            </div>
          )}

          {service.whatIsPain && (
            <div className="service-section">
              <h3>What Is Chronic Pain?</h3>
              <p className="section-intro">{service.whatIsPain}</p>
            </div>
          )}

          {service.contributingFactors && (
            <div className="service-section">
              <h3>Contributing Factors</h3>
              <p className="section-intro">Chronic pain is often influenced by multiple factors:</p>
              <ul className="service-list">
                {service.contributingFactors.map((factor, index) => (
                  <li key={index}>{factor}</li>
                ))}
              </ul>
            </div>
          )}

          {service.approachFocus && (
            <div className="service-section">
              <h3>Our Approach</h3>
              <ul className="service-list">
                {service.approachFocus.map((focus, index) => (
                  <li key={index}>{focus}</li>
                ))}
              </ul>
            </div>
          )}

          {service.neckShoulderConditions && (
            <div className="service-section">
              <h3>Neck & Shoulder Pain</h3>
              <p className="section-intro">Neck and upper back tension are often linked to posture, repetitive activities, or stress.</p>
              <ul className="service-list">
                {service.neckShoulderConditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
            </div>
          )}

          {service.backConditions && (
            <div className="service-section">
              <h3>Back & Thoracic Pain</h3>
              <p className="section-intro">Low and mid-back pain can stem from muscle imbalance, joint restriction, or poor movement control.</p>
              <ul className="service-list">
                {service.backConditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
            </div>
          )}

          {service.headacheJawConditions && (
            <div className="service-section">
              <h3>Headaches & Jaw Pain</h3>
              <p className="section-intro">Headaches and jaw pain are often referred from the neck, upper back, or facial muscles.</p>
              <ul className="service-list">
                {service.headacheJawConditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
            </div>
          )}

          {service.otherConditions && (
            <div className="service-section">
              <h3>Other Musculoskeletal Issues</h3>
              <ul className="service-list">
                {service.otherConditions.map((condition, index) => (
                  <li key={index}>{condition}</li>
                ))}
              </ul>
            </div>
          )}

          {service.homeVisits && (
            <div className="service-section">
              <h3>Home Visits</h3>
              <ul className="service-list">
                {service.homeVisits.map((visit, index) => (
                  <li key={index}>{visit}</li>
                ))}
              </ul>
            </div>
          )}

          {service.corporateWellness && (
            <div className="service-section">
              <h3>Corporate Wellness</h3>
              <ul className="service-list">
                {service.corporateWellness.map((wellness, index) => (
                  <li key={index}>{wellness}</li>
                ))}
              </ul>
            </div>
          )}

          {service.sportsEvents && (
            <div className="service-section">
              <h3>Sports Events and Activations</h3>
              <ul className="service-list">
                {service.sportsEvents.map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </ul>
            </div>
          )}

          {service.telePhysiotherapy && (
            <div className="service-section">
              <h3>Tele-Physiotherapy</h3>
              <ul className="service-list">
                {service.telePhysiotherapy.map((tele, index) => (
                  <li key={index}>{tele}</li>
                ))}
              </ul>
            </div>
          )}

          {service.note && (
            <div className="service-section">
              <p className="service-note">{service.note}</p>
            </div>
          )}

          {service.sportsConditioning && (
            <div className="service-section">
              <h3>Sports Conditioning</h3>
              <ul className="service-list">
                {service.sportsConditioning.map((conditioning, index) => (
                  <li key={index}>{conditioning}</li>
                ))}
              </ul>
            </div>
          )}

          {service.preSeasonTesting && (
            <div className="service-section">
              <h3>Pre-Season Baseline Testing</h3>
              <ul className="service-list">
                {service.preSeasonTesting.map((testing, index) => (
                  <li key={index}>{testing}</li>
                ))}
              </ul>
            </div>
          )}

          {service.pilatesServices && (
            <div className="service-section">
              <h3>Pilates Services</h3>
              <ul className="service-list">
                {service.pilatesServices.map((pilates, index) => (
                  <li key={index}>{pilates}</li>
                ))}
              </ul>
            </div>
          )}

          {service.pilatesBenefits && (
            <div className="service-section">
              <h3>Pilates Benefits</h3>
              <ul className="service-list">
                {service.pilatesBenefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          {service.whyChoose && (
            <div className="service-section">
              <h3>Why Choose Our Performance Services</h3>
              <ul className="service-list">
                {service.whyChoose.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
            </div>
          )}

          {service.productDetails && (
            <div className="service-section">
              <h3>Available Products</h3>
              <div className="products-grid">
                {service.productDetails.map((product, index) => (
                  <div key={index} className="product-item">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.modalities && (
            <div className="service-section">
              <h3>Treatment Modalities</h3>
              <ul className="service-list">
                {service.modalities.map((modality, index) => (
                  <li key={index}>{modality}</li>
                ))}
              </ul>
            </div>
          )}

          {service.modalityDetails && (
            <div className="service-section">
              <h3>Modality Details</h3>
              <div className="modalities-grid">
                {service.modalityDetails.map((modality, index) => (
                  <div key={index} className="modality-item">
                    <h4>{modality.name}</h4>
                    <p>{modality.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.approach && (
            <div className="service-section">
              <p className="service-approach">{service.approach}</p>
            </div>
          )}

          {service.benefits && (
            <div className="service-section">
              <h3>Key Benefits</h3>
              <ul className="benefits-list">
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          )}

          {service.clinicImages && (
            <div className="service-section">
              <h3>Our Clinic Environment</h3>
              <p className="section-intro">A welcoming, professional space designed for your comfort and recovery</p>
              <div className="clinic-images-grid">
                {service.clinicImages.map((image, index) => (
                  <div key={index} className="clinic-image-item">
                    <img src={image} alt={`Clinic environment ${index + 1}`} className="clinic-image" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="service-cta">
            <button className="book-appointment-btn" onClick={() => {
              onClose();
              // Scroll to contact section
              setTimeout(() => {
                const contactElement = document.getElementById('contact');
                if (contactElement) {
                  const headerHeight = 96;
                  const targetPosition = contactElement.offsetTop - headerHeight;
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                  });
                }
              }, 100);
            }}>
              Book an Appointment
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
