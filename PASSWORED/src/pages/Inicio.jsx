import { Box, Typography, useMediaQuery } from "@mui/material";

import Navbar from "../components/Navbar";
import Estrella1 from "../assets/images/Estrella1";
import Estrella2 from "../assets/images/Estrella2";
import ButtonRegister from "../components/Button";
import fondoInicio from "../assets/fondoInicio.png";
import fondoInicioColor from "../assets/fondoInicioColor.png";
import Estrella3 from "../assets/images/Estrella3";
import fondoInicioPhone from "../assets/backImagePhone.png";
import fondoInicioColorPhone from "../assets/backPhone.png";
import styles from "./inicio.module.css";

const Inicio = () => {
  const text="#fff"

  const isMobile = useMediaQuery("(max-width:600px)");
  const mainText = isMobile ? (
    <>
      App que
      <br />
      genera hábitos de lectura,
      <br />
      comprensión
      <br />
      de textos
      <br />y mucho más.
    </>
  ) : (
    <>
      App que genera
      <br />
      hábitos de lectura,
      <br />
      comprensión de textos
      <br />y mucho más.
    </>
  );
 
  return (
    <>
      <Navbar sx={{ zIndex: 1 }}  text={text} />
      <Box
        sx={{
          overflowX: "hidden",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: { xs: "34%", sm: "40%" },
            boxSizing: "border-box",
          }}
        >
          {isMobile && (
            <Box
              sx={{
                alignSelf: "flex-end",
                pr: "10%",
                mr: "-20%",
                pt: "80%",
                width: "15%",
              }}
            >
              <Estrella2 style={{ width: "100%" }} />
            </Box>
          )}

          <Box
            sx={{
              alignSelf: "flex-start",
              pl: { xs: "11%", sm: "4%" },
              width: { xs: "15%", sm: "9%" },
              xs: {
                mt: "50%",
                ml: "10%",
                width: "15%",
              },
            }}
          >
            <Estrella1 style={{ width: "100%", height: "auto" }} />
          </Box>

          <Box sx={{ pl: "17.5%", width: isMobile ? "150%" : "131.7%" }}>
            <Typography variant="h2" fontWeight="400">
              {mainText}
            </Typography>
          </Box>

          {!isMobile && (
            <Box sx={{ alignSelf: "flex-end", width: "9%", pl: "50%" }}>
              <Estrella2 style={{ width: "100%" }} />
            </Box>
          )}
          <Box
            sx={{
              display: { xs: "flex", sm: "none" },
              position: "absolute",
              right: 0,
              pr: "10%",
              top: "60%",
              width: { xs: "10%", sm: "20%" },
              mt: "10%",
            }}
          >
            <Estrella3
              sx={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
          <Box
            sx={{
              paddingBottom: { xs: "35%", sm: "0%" },
              paddingTop: { xs: "15%", sm: "0%" },
              pl: "13.5%",
              width: isMobile ? "250%" : "100%",
            }}
          >
            <ButtonRegister className={styles.buttonRegister} />
          </Box>
        </Box>

        <Box
          sx={{
            width: isMobile ? "62%" : "60%",
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={isMobile ? fondoInicioPhone : fondoInicio}
            alt="fondo inicio"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 2,
              width: "100%",
            }}
          />
          <Box
            component="img"
            src={isMobile ? fondoInicioColorPhone : fondoInicioColor}
            alt="fondo inicio color"
            sx={{
              position: isMobile ? "absolute":"relative",
              zIndex: 1,
              top: 0,
              left: isMobile ? "0":"3%",
              width: "100%",
            }}
          />
        </Box>
      </Box>
      <Box>
        
      </Box>
    </>
  );
};

export default Inicio;
