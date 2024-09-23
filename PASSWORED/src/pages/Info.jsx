import Estrella3 from "../assets/images/Estrella3";
import rocketgif from "../assets/images/rocket.gif";
import Estrella1 from "../assets/images/Estrella1";
import { Box, Typography } from "@mui/material";

const Info = () => {
  const SectionTitle = ({ children }) => (
    <Typography variant="h2" fontWeight="600" sx={{ pb: "2%" }}>
      {children}
    </Typography>

  );

  const StarStyles = {
    width: "100%",
    height: "auto",
  };
  return (
    <Box
      sx={{
        height: { xs: "110vh", md: "105vh" },
        background: {
          xs: "white",  
          md: "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(238, 232, 251, 1) 60%, rgba(253, 194, 49, 0.58) 100%)", // Gradiente para pantallas medianas o mayores
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingLeft: { xs: "0%", md: "6.2%" },
      }}
    >
      <Box
        sx={{
          alignSelf: "flex-end",
          paddingRight: "7%",
          height: "15%",
          display: { xs: "none", md: "block" },
        }}
      >
        <Estrella3 style={  StarStyles } />
      </Box>

      <Box
        sx={{
          height: { xs: "45%", md: "42%" },
          paddingRight: "7%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          paddingLeft: { xs: "6.2%", md: "0%" },
          
        }}
      >
        <SectionTitle>¿Qué es PASSWORED?</SectionTitle>
        <Typography variant="body">
          PASSWORED es una aplicación que bloquea el acceso a las demás
          aplicaciones del celular o tablet de tu hijo… Para desbloquearlas, el
          niño tendrá que realizar una actividad educativa como resolver un
          problema matemático, aprender un idioma, leer y comprender un texto,
          etc.
          <br />
          De lo contrario, no podrá acceder a su app favorita, cada 20 minutos,
          el dispositivo se volverá a bloquear y el niño tendrá que realizar
          otra actividad.
        </Typography>
      </Box>

      <Box
        sx={{
          height: "15%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Box
          component="img"
          src={rocketgif}
          alt="Rocket animation"
          sx={{
            display: { xs: "flex", sm: "none" },
            position: "absolute",
            alignSelf: "flex-end",
            width: "40%",
            height: "auto",
          }}
        />
         
        <Box
          sx={{
            position: "relative",
            bottom: 0,
            display: { xs: "flex", sm: "none" },
            flexDirection: "row",
            backgroundColor: "transparent",
            height: "auto",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: { xs: "#EEE8FB", md: "inherit" },
          paddingLeft: { xs: "6.2%", md: "0%" },
           
          paddingTop: { xs: "5%", sm: "0%" },
          height: { xs: "max-content", sm: "30.8%" },
        }}
      >
        <SectionTitle>Resultados</SectionTitle>
        <Typography variant="body" sx={{ width: { xs: "90%", md: "70%" },
    }}>
          Utilizamos este método obteniendo resultados sorprendentes; niños de
          dos años razonando, memorizando y utilizando la lógica para resolver
          problemas en cuestión de minutos;transformando tiempo de ocio en
          educación de alto rendimiento.
          <br />
          Con la ayuda de la IA generativa podremos llevar esto a otro nivel,
          personalizando, potenciando y descubriendo los intereses y talentos
          individuales de cada niño.
          <br />
          Está demostrado que ellos utilizan altos grados de razonamiento y
          comprensión para obtener lo que quieren.{" "}
        </Typography>
      </Box>

      <Box
        sx={{
          height: "auto",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          margin: 0,
          padding: 0,
          backgroundColor: { xs: "#EEE8FB", sm: "inherit" },
        }}
      >
        <Box
          sx={{
            paddingTop: "5%",
            alignSelf: "flex-end",
            width: { xs: "5%", sm: "3%" },
            pl: { xs: "6%", sm: "0%" },

          }}
        >
          <Estrella1 style={  StarStyles } />
        </Box>

        <Box
          sx={{
            width: "35%",
            display: { xs: "none", md: "block" },
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          <img
            src={rocketgif}
            alt="Rocket animation"
            style={  StarStyles }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Info;
