import { useState } from 'react';
import './Header.css';

const Header = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 64; // 4rem
      const targetPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    closeMenu();
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <div className="nav__logo">
          <img src="/Media/Logo.jpeg" alt="Cherné Langeveldt Physiotherapy Logo" className="nav__logo-img" />
          <div className="nav__logo-text">
            <span className="nav__logo-name">Cherné Langeveldt Physiotherapy</span>
            <span className="nav__logo-tagline">Care Beyond the Surface</span>
          </div>
        </div>

        <div className={`nav__menu ${menuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                className={`nav__link ${activeSection === 'home' ? 'active-link' : ''}`}
                onClick={(e) => scrollToSection(e, 'home')}
              >
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                className={`nav__link ${activeSection === 'services' ? 'active-link' : ''}`}
                onClick={(e) => scrollToSection(e, 'services')}
              >
                Our Approach
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link ${activeSection === 'about' ? 'active-link' : ''}`}
                onClick={(e) => scrollToSection(e, 'about')}
              >
                About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${activeSection === 'contact' ? 'active-link' : ''}`}
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={closeMenu}>
            <i className="fas fa-times"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
