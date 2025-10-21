import './WomensHealth.css';

const WomensHealth = () => {
  return (
    <section className="womens-health section" id="womens-health">
      <div className="container">
        <h2 className="section__title">Women's and Pelvic Health Physiotherapy</h2>
        <p className="section__subtitle">
          Supporting women through every phase of life with specialized, evidence-based care
        </p>

        <div className="womens-health__content">
          <div className="womens-health__intro">
            <p className="womens-health__description">
              At Jozi South Physios, we recognise that women's bodies go through unique physical changes across different life stages — from pregnancy and childbirth to menopause and beyond. These changes can influence the pelvic region, core, and surrounding muscles, often resulting in pain, weakness, or loss of confidence in movement.
            </p>
            <p className="womens-health__description">
              Our women's health physiotherapy service is designed to support women through every phase of life — helping you recover, move comfortably, and feel strong again through safe, evidence-based rehabilitation.
            </p>
          </div>

          <div className="womens-health__services">
            <h3 className="womens-health__services-title">How We Can Help</h3>
            <p className="womens-health__services-intro">
              We provide tailored care for a wide range of women's health conditions, including:
            </p>

            <div className="services-grid">
              <div className="service-card">
                <h4 className="service-card__title">Pregnancy-related Pain</h4>
                <p className="service-card__description">
                  Relief for lower back pain, pelvic girdle pain, sciatica, and wrist or hand symptoms such as carpal tunnel syndrome that often develop during pregnancy.
                </p>
              </div>

              <div className="service-card">
                <h4 className="service-card__title">Postnatal Recovery</h4>
                <p className="service-card__description">
                  Safe rehabilitation after birth, with focus on abdominal and pelvic floor muscle reactivation, management of diastasis recti (abdominal separation), C-section or perineal scar management, and a gradual, guided return to exercise.
                </p>
              </div>

              <div className="service-card">
                <h4 className="service-card__title">Post-gynaecological Surgery Recovery</h4>
                <p className="service-card__description">
                  Rehabilitation following procedures such as hysterectomy or pelvic organ repair, addressing scar mobility, abdominal and pelvic muscle strength, posture, and return to functional activity.
                </p>
              </div>

              <div className="service-card">
                <h4 className="service-card__title">Pelvic Floor and Bladder Control</h4>
                <p className="service-card__description">
                  Many women experience bladder leakage, urgency, or pelvic heaviness — particularly after childbirth or around menopause. Physiotherapy can help improve incontinence, pelvic muscle coordination, and core stability, restoring confidence in everyday activities.
                </p>
              </div>

              <div className="service-card">
                <h4 className="service-card__title">Chronic Pelvic or Lower Back Discomfort</h4>
                <p className="service-card__description">
                  Addressing stiffness, muscle imbalance, or compensatory movement patterns that contribute to ongoing discomfort.
                </p>
              </div>

              <div className="service-card">
                <h4 className="service-card__title">Core Stability and Posture Retraining</h4>
                <p className="service-card__description">
                  Ensuring the deep stabilising muscles of the abdomen and pelvis are working efficiently to support your spine, hips, and daily movement.
                </p>
              </div>
            </div>
          </div>

          <div className="womens-health__importance">
            <h3 className="womens-health__importance-title">Why Pelvic Health Matters for Whole-Body Wellness</h3>
            <p className="womens-health__importance-text">
              The pelvic floor and deep core muscles form a key part of your body's foundation. When these muscles are weak, tight, or not working in coordination, they can contribute to issues such as:
            </p>
            <ul className="womens-health__issues-list">
              <li>Recurrent low back, hip, or pelvic pain</li>
              <li>Poor postural alignment and reduced stability</li>
              <li>Bladder or bowel control difficulties</li>
              <li>Difficulty returning to exercise or daily tasks comfortably</li>
            </ul>
            <p className="womens-health__importance-text">
              Because of this close connection, pelvic health is often integrated into our treatment of other musculoskeletal conditions — ensuring that your recovery addresses the root cause, not just the symptoms.
            </p>
          </div>

          <div className="womens-health__approach">
            <h3 className="womens-health__approach-title">Our Holistic Approach</h3>
            <p className="womens-health__approach-intro">
              At Jozi South Physios, we believe that women's health is more than just physical recovery — it's about supporting the whole person. Alongside hands-on treatment and exercise rehabilitation, we provide education and guidance on lifestyle factors that influence pelvic and hormonal health, such as:
            </p>

            <div className="approach-grid">
              <div className="approach-item">
                <h4 className="approach-item__title">Nutrition and Hydration</h4>
                <p className="approach-item__description">
                  How certain foods, caffeine, or hydration habits can affect bladder function and inflammation.
                </p>
              </div>

              <div className="approach-item">
                <h4 className="approach-item__title">Bowel Health and Habits</h4>
                <p className="approach-item__description">
                  Understanding the importance of regularity, positioning, and pelvic relaxation for healthy bowel movement.
                </p>
              </div>

              <div className="approach-item">
                <h4 className="approach-item__title">Stress and Breathing Patterns</h4>
                <p className="approach-item__description">
                  Managing tension through breathwork and relaxation strategies that support pelvic floor function.
                </p>
              </div>

              <div className="approach-item">
                <h4 className="approach-item__title">Sleep and Recovery</h4>
                <p className="approach-item__description">
                  Recognising how rest, posture, and daily movement patterns influence healing and strength.
                </p>
              </div>
            </div>

            <div className="womens-health__conclusion">
              <p className="womens-health__conclusion-text">
                Our goal is to help you understand your body, regain confidence, and move through life with comfort and control — at every stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WomensHealth;
