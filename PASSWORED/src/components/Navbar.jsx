import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./navbar.module.css";
import PasswordLogo from "../assets/images/PasswordLogo";
import ButtonCallNavbar from "./ButtonCallNavbar";
import menu from "../assets/Menu.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.reload(); 
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbar}>  
    <div className={styles.container}>
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
