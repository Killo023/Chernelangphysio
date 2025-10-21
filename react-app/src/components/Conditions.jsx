import './Conditions.css';

const Conditions = () => {
  const conditions = [
    {
      category: 'Musculoskeletal',
      icon: 'fa-bone',
      items: [
        'Lower Back Pain',
        'Neck Pain & Headaches',
        'Shoulder & Rotator Cuff Injuries',
        'Knee Pain & ACL Rehabilitation',
        'Ankle Sprains & Instability',
        'Tennis & Golfer\'s Elbow'
      ]
    },
    {
      category: 'Sports Injuries',
      icon: 'fa-person-running',
      items: [
        'Running Injuries',
        'Muscle Strains & Tears',
        'Ligament Sprains',
        'Tendinopathies',
        'Stress Fractures',
        'Return to Sport Programs'
      ]
    },
    {
      category: 'Post-Operative',
      icon: 'fa-user-nurse',
      items: [
        'Joint Replacement Rehab',
        'ACL Reconstruction',
        'Rotator Cuff Repair',
        'Spinal Surgery Recovery',
        'Fracture Rehabilitation',
        'Post-Surgical Mobility'
      ]
    },
    {
      category: 'Chronic Conditions',
      icon: 'fa-heart-circle-check',
      items: [
        'Arthritis Management',
        'Fibromyalgia',
        'Chronic Pain Syndromes',
        'Postural Dysfunction',
        'Work-Related Injuries',
        'Repetitive Strain Injuries'
      ]
    }
  ];

  return (
    <section className="conditions section" id="conditions">
      <div className="container">
        <h2 className="section__title">Conditions We Treat</h2>
        <p className="section__subtitle">
          Comprehensive care for a wide range of musculoskeletal conditions
        </p>

        <div className="conditions__grid">
          {conditions.map((condition, index) => (
            <div className="condition__card" key={index}>
              <div className="condition__header">
                <div className="condition__icon">
                  <i className={`fas ${condition.icon}`}></i>
                </div>
                <h3 className="condition__category">{condition.category}</h3>
              </div>
              <ul className="condition__list">
                {condition.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Conditions;

