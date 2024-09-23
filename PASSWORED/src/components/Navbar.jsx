
import React, { useEffect, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import PasswordLogo from "../assets/images/PasswordLogo";
import CallButton from "./CallButton";
import menu from "../assets/Menu.png";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-scroll";
import Menu from "../assets/images/Menu";

const Navbar = ({text}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const theme = useTheme();
  const navigate = useNavigate(); // Hook para la navegación

  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const fontSize = isXl ? 26 : isXs ? 16 : 20;
  const matches = useMediaQuery("(max-width:600px)");

  const handleLogoClick = () => {
    window.location.href = "/"; 
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isHomePage = location.pathname === "/";
  const linkStyles = {
  padding: "1rem",
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
  textDecoration: "none", // Eliminar subrayado
};
  return (
    <Box
      sx={{
        width: "100%",
       }}
    >
      
      <Box
         sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'fixed',
          zIndex: 1000,
          width: '100%',
          paddingTop: '0%',
          backgroundColor: scrollPosition > 0 ? 'white' : 'transparent', 
          top: 0,
          transition: 'background-color 0.3s ease-in-out', 
       height:{ xs: '5vh', md: 'auto' },
        }}
      
      > 
        <Box
          sx={{
             width: "100%",

            display: "flex",
            alignItems: "center",
            marginTop: {
              xs: "-10%",
              sm: "-2%",
            },
            marginLeft: {
              xs: "-30%",
              sm: "-5%",
            },
            transform: {
              xs: "scale(0.4)", 
              sm: "scale(0.7)", 
            },
            cursor: "pointer",
            paddingTop: {
              xs: "20%", 
              sm: "3%", 
            }

          }}
          onClick={handleLogoClick}
        >
          <PasswordLogo
            sx={{
              width: "100%",
              height: "auto",
            }}
          />
        </Box>
        <Box
           
          onClick={toggleMenu}
          sx={{
              display: { xs: 'block', md: 'none' },
              fontSize: '24px',
              cursor: 'pointer',
              color:  'white'  ,

            
              right: '20%',
             top: '0rem',
            paddingRight: '3%',
          }}
        >
           <Menu/>
            
        </Box>
        <Box  
        sx={{
          display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '3.47vw',
        width: { xs: "100%", md: "75%",xl: "60%" },
        paddingRight: { xs: '0%', md:  '6%'  } ,
        flexDirection: { xs: 'column', md: 'row' },
        position: { xs: 'fixed', md: 'relative' },
        top: { xs: '35px', md: 'initial' },
        
        transition: 'transform 0.3s ease-in-out',
        zIndex: "1000",
         transform: isOpen ? 'translateX(0)' : { xs: 'translateX(100%)', md: 'none' },

        right: { xs: 0, md: 'initial' },
         backgroundColor:{ xs:"#333" , md: 'transparent' }  ,
        height: { xs:  "calc(100vh - 35px)", md: 'initial' } ,
       }}
        
        >
          
           {isHomePage ? (
            <>
              <Link to="inicio" smooth={true} duration={500}>
                <Typography sx={{ ...linkStyles, fontSize, color: matches ? "#ffffff" : (scrollPosition > 0 ? "#000000" : text) }}>
                  Inicio
                </Typography>
              </Link>
              <Link to="unete" smooth={true} duration={500}>
                <Typography sx={{ ...linkStyles, fontSize, color: matches ? "#ffffff" : (scrollPosition > 0 ? "#000000" : text) }}>
                  Únete a nosotros
                </Typography>
              </Link>
              <Link to="contacto"  smooth={true}
            duration={500}
            style={{
              marginLeft: window.innerWidth <= 767 ? '-10%' : '0',  
              paddingTop: window.innerWidth <= 767 ? '5%' : '0',  
            }}>
                <CallButton className={styles.buttonProps} text="Contáctanos" />
              </Link>
            </>
          ) : (
            <>
              <RouterLink to="/" onClick={handleLogoClick} style={{ textDecoration: 'none' }}>
                <Typography sx={{ ...linkStyles, fontSize, color: matches ? "#ffffff" : (scrollPosition > 0 ? "#000000" : text) }}>
                  Inicio
                </Typography>
              </RouterLink>
              <RouterLink to="/" onClick={handleLogoClick} style={{ textDecoration: 'none' }}>
                <Typography sx={{...linkStyles, fontSize, color: matches ? "#ffffff" : (scrollPosition > 0 ? "#000000" : text) }}>
                  Únete a nosotros
                </Typography>
              </RouterLink>
              <RouterLink to="/" onClick={handleLogoClick} style={{ textDecoration: 'none' ,
                  marginLeft: window.innerWidth <= 767 ? '-10%' : '0',  
                  paddingTop: window.innerWidth <= 767 ? '5%' : '0'   
              }}>
                <CallButton className={styles.buttonProps} text="Contactanos" />
              </RouterLink>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;



