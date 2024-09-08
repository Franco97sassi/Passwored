import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./navbar.module.css";
import PasswordLogo from "../assets/images/PasswordLogo";
import ButtonCallNavbar from "./ButtonCallNavbar";
import menu from "../assets/Menu.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleLogoClick = () => {
    window.location.reload(); 
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
      <div className={styles.hamburger} onClick={toggleMenu}>
         <img src={menu} alt="" />
      </div>
      <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
        <Link to="inicio" smooth={true} duration={500}>
          <p>Inicio</p>
        </Link>
        <Link to="unete" smooth={true} duration={500}>
          <p>Únete a nosotros</p>
        </Link>
        <Link to="contacto" smooth={true} duration={500} className={styles.buttonCall}>
          <ButtonCallNavbar />
        </Link>
      </div>
    </div></div>
  );
};

export default Navbar;
