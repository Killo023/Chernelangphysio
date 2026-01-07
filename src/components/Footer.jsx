import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" itemScope itemType="https://schema.org/Physiotherapy">
      <div className="container">
        <p className="footer__copy">
          &copy; 2025 Cherné Langeveldt Physiotherapy - Physiotherapy Services in Glenanda, Mondeor, Mulbarton, Winchester Hill, Columbine, Glenvista & Johannesburg South. All rights reserved.
        </p>
        <p className="footer__tagline">Care Beyond the Surface | Expert Physiotherapist Near Me</p>
        <div style={{ fontSize: '0.85rem', marginTop: '0.5rem', opacity: 0.8 }}>
          <p>Physiotherapy Glenanda | Physiotherapy Mondeor | Physiotherapy Mulbarton | Physiotherapy Winchester Hill | Physiotherapy Columbine | Physiotherapist Glenvista | Johannesburg South Physiotherapy | Jozi South Physiotherapy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
