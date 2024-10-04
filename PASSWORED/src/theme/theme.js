import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: '"Montserrat", sans-serif',

      fontSize: "46px",
      [createTheme().breakpoints.up("lg")]: {
        fontSize: "64px",
      },
      [createTheme().breakpoints.up("xl")]: {
        fontSize: "80px",
      },
    },
    h2: {
      fontFamily: '"Montserrat", sans-serif',

      fontSize: "24px",
      [createTheme().breakpoints.up("lg")]: {
        fontSize: "48px",
      },
      [createTheme().breakpoints.up("xl")]: {
        fontSize: "64px",
      },
    },
    h3: {
      fontFamily: '"Montserrat", sans-serif',

      fontSize: "24px",
      [createTheme().breakpoints.up("lg")]: {
        fontSize: "32px",
      },
      [createTheme().breakpoints.up("xl")]: {
        fontSize: "43px",
      },
    },
    h4: {
      fontFamily: '"Montserrat", sans-serif',

      fontWeight: 500,  
      fontSize: "16px",  
      
      [createTheme().breakpoints.up("lg")]: {
        fontSize: "24px",
      },
      [createTheme().breakpoints.up("xl")]: {
        fontSize: "32px",
      },
    },

    body: {
      fontFamily: '"Inter", sans-serif',

      fontWeight: 400, 
      fontSize: "16px",  

      
      [createTheme().breakpoints.up("lg")]: {
        fontSize: "19.3px",
      },
      [createTheme().breakpoints.up("xl")]: {
        fontSize: "24px",
      },
    },
    body2: {
      fontFamily: '"Inter", sans-serif',

      fontWeight: 700,  
      fontSize: "14px",  

       
      [createTheme().breakpoints.up("lg")]: {
        fontSize: "19px",
      },
      [createTheme().breakpoints.up("xl")]: {
        fontSize: "22px",
      },
    },
    li: {
      fontFamily: '"Montserrat", sans-serif',

      fontWeight: 500,  
      fontSize: "12px",  
       
      [createTheme().breakpoints.up("lg")]: {
        fontSize: "14px",
      },
      [createTheme().breakpoints.up("xl")]: {
        fontSize: "19px",
      },
    },
    button: {
      fontFamily: "Inter, sans-serif",

      fontSize: "16px",  
      
      [createTheme().breakpoints.up("lg")]: {
        fontSize: "20px",
      },
      [createTheme().breakpoints.up("xl")]: {
        fontSize: "24px",
      },
    },
  },
});
export default theme;
