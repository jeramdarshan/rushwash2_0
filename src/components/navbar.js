import React, { useState, useEffect } from 'react';

function Navbar() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [highlightedMenu, setHighlightedMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const homeMenu = document.querySelector('#home-page');
      const aboutMenu = document.querySelector('#about-page');
      const servicesMenu = document.querySelector('#services-page');

      if (window.innerWidth > 960 && scrollPos < 600) {
        setHighlightedMenu(homeMenu);
      } else if (window.innerWidth > 960 && scrollPos < 1400) {
        setHighlightedMenu(servicesMenu);
      } else if (window.innerWidth > 960 && scrollPos < 2345) {
        setHighlightedMenu(aboutMenu);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
  };

  const closeMobileMenu = () => {
    if (window.innerWidth <= 768 && mobileMenuActive) {
      setMobileMenuActive(false);
    }
  };

  const handleMenuClick = (event) => {
    if (event.target.id === 'home-page') {
      // Handle 'Home' menu item click
      // Add your logic here
    } else if (event.target.id === 'services-page') {
      // Handle 'Services' menu item click
      // Add your logic here
    } else if (event.target.id === 'about-page') {
      // Handle 'About' menu item click
      // Add your logic here
    }

    closeMobileMenu();
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="#home" id="navbar__logo">RUSHWASH</a>
        <div className={`navbar__toggle ${mobileMenuActive ? 'is-active' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`navbar__menu ${mobileMenuActive ? 'active' : ''}`} onClick={handleMenuClick}>
          <li className={`navbar__item ${highlightedMenu === 'home-page' ? 'highlight' : ''}`}>
            <a href="#home" className="navbar__links" id="home-page">Home</a>
          </li>
          <li className={`navbar__item ${highlightedMenu === 'services-page' ? 'highlight' : ''}`}>
            <a href="#services" className="navbar__links" id="services-page">Services</a>
          </li>
          <li className={`navbar__item ${highlightedMenu === 'about-page' ? 'highlight' : ''}`}>
            <a href="#about" className="navbar__links" id="about-page">About</a>
          </li>
          {/* <li className="navbar__btn">
            <a href="#sign-up" className="button" id="signup">Sign Up</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
