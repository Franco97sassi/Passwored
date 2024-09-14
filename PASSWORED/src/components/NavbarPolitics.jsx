import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./navbarpolitics.module.css";
import PasswordLogo from "../assets/images/PasswordLogo";
import ButtonCallNavbar from "./ButtonCallNavbar";
import menu from "../assets/Menu.png";
import { useNavigate } from "react-router-dom";

const NavbarPolitics = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };
  const handleNavClick = (sectionId) => {
    // Navigate to the home page
    navigate("/");

    // Delay the scroll to ensure the page has loaded
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }, 100); // Adjust delay if necessary
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.navbar}>  
 
    <div className={`${styles.container} ${scrollPosition > 0 ? styles.scrolled : ''}`}>
      <div className={styles.logo} onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <PasswordLogo className={styles.logoimg} />
      </div>
      <div className={`${styles.hamburger} ${scrollPosition > 0 ? styles.scrolled : ''}`} onClick={toggleMenu}>
        <img src={menu} alt="Menu" />
      </div>
      <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
      <p onClick={() => handleNavClick('inicio')}>Inicio</p>
          <p onClick={() => handleNavClick('unete')}>Únete a nosotros</p>
          <p onClick={() => handleNavClick('contacto')} className={styles.buttonCall}>
            <ButtonCallNavbar />
          </p>

      </div>
    </div></div>
  );
};

export default NavbarPolitics;
