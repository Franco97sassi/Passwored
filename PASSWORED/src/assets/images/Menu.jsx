import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Obtener la ruta actual

  useEffect(() => {
    const handleScroll = () => {
      // Si la posición de scroll es mayor a 0, cambia el estado
      setIsScrolled(window.scrollY > 0);
    };

    // Escucha el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Si estamos en "/politics", el color siempre será negro
  const menuColor = location.pathname === '/politics' ? 'black' : isScrolled ? 'black' : 'white';

  return (
    <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.125 13.5H28.875M4.125 6.75H28.875M4.125 20.25H28.875"
        stroke={menuColor} // Usamos el color basado en la ruta o el scroll
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Menu;
