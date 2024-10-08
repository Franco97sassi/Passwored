// src/hooks/useResponsive.js
import { useMediaQuery } from "@mui/material";

const useResponsive = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:900px)"); // Puedes agregar más resoluciones según sea necesario
  const isDesktop = useMediaQuery("(min-width:901px)");

  return { isMobile, isTablet, isDesktop };
};

export default useResponsive;
