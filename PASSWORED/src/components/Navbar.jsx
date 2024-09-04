import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./navbar.module.css";
import PasswordLogo from "../assets/images/PasswordLogo";
import ButtonCallNavbar from "./ButtonCallNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.reload(); // Recargar la página al hacer clic en el logo
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={handleLogoClick} style={{ cursor: "pointer" }}>
        <PasswordLogo className={styles.logoimg} />
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>
      <div className={`${styles.links} ${isOpen ? styles.open : ''}`}>
        <Link to="inicio" smooth={true} duration={500}>
          <p>Inicio</p>
        </Link>
        <Link to="unete" smooth={true} duration={500}>
          <p>Únete a nosotros</p>
        </Link>
        <Link to="contacto" smooth={true} duration={500}>
          <ButtonCallNavbar />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
