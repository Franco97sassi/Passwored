import CallButton from "../components/CallButton";
import styles from "./invertir.module.css";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Phone2 from '../assets/images/Phone2'
import Button from "../components/CallButton";
import useResponsive from "../hooks/useResponsive";
const Invertir = () => {
  const { isMobile } = useResponsive();
  const teamText = `
  Jóvenes capacitados y comprometidos full time con esta Startup,
  con habilidades acorde a la magnitud del proyecto, la resiliencia
  suficiente para sortear las dificultades y sobre todo con la
  capacidad de cambiar o modificar el emprendimiento para lograr
  el éxito en su máxima expresión. Tenemos objetivos claros y
  definidos en etapas con variedad de alternativas, una misión
  preponderante afines a nuestros valores y una visión distante
  pero motivadora.
`;

const impactText = `
  Nuestra app educativa está cambiando vidas para un futuro mejor.
  Ayudamos a los estudiantes a adquirir conocimientos de manera
  efectiva y a desarrollar habilidades claves para el éxito en
  el futuro.
`;
const readyText = `
  ¿Listo para ser parte de algo grande? Envianos un mensaje a
                través br de nuestro formulario de contacto o escríbenos
                directamente a contac@passwored.com
`;

  return (
    <>
      {!isMobile ? (
        <Box className={styles.container}>
          <Typography
            variant="h2"
            sx={{
              fontWeight:"600",
              backgroundColor: "#FEDC88",
              padding: "3% 10% 2% 10%",
              margin: "0 -8.1% 0 -10%",
            }}
          >
            POR QUÉ INVERTIR EN NOSOTROS?
          </Typography>
           
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "2.8%",
            }}
          >
             <Box
              sx={{
                backgroundColor: "#E8DBFF",
                padding: "2%",
                borderRadius: "20px",
                width: "48%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 600,pb:"2%" }}>
                Equipo
              </Typography>
              <Typography variant="body">
                 {teamText}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#E8DBFF",
                padding: "2%",
                borderRadius: "20px",
                width: "48%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/*  */}
              <Typography variant="h4" sx={{ fontWeight: 600,pb:"2%" }}>
                Impacto
              </Typography>
              <Typography variant="body">
              {impactText}
              </Typography>
            </Box>
          </Box>
           <Box sx={{ display: "flex", justifyContent: "center", pt: "5%"   }}>
            <Box className={styles.boxEvolution}>
              <Typography
                sx={{ paddingLeft: "1%", paddingBottom: "4%" }}
                variant="h2"
                fontWeight="600"
              >
                ÚNETE A LA EVOLUCIÓN
              </Typography>
              <Typography
                variant="h3"
                sx={{ paddingBottom: "2%" }}
                fontWeight="500"
              >
                {readyText}
              </Typography>
              <Box sx={{ width: "60%" }}>
                <Button className={styles.buttonProps} text="Contactanos" Icon={Phone2} />
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box className={styles.container} sx={{ pt: "20%" }}>
          <Typography variant="h2" sx={{ pb: "7%", fontWeight: 600 }}>
            POR QUE INVERTIR EN NOSOTROS?
          </Typography>
           <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: "20px",
            }}
          >
             <Box
              sx={{
                backgroundColor: "#E8DBFF",
                padding: "4%",
                borderRadius: "20px",
                width: "92%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: 500, pb: "1%" }}>
                Equipo
              </Typography>
              <Typography variant="body" sx={{ pr: "5%" }}>
              {teamText}
              </Typography>
            </Box>

            <Box>
              <Box
                sx={{
                  backgroundColor: "#E8DBFF",
                  padding: "4%",
                  borderRadius: "20px",
                  width: "92%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 500, pb: "1%" }}>
                  Impacto
                </Typography>
                <Typography variant="body" sx={{ pr: "5%" }}>
                {impactText}
                </Typography>
              </Box> 
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: "0%" }}>
            <Box className={styles.boxEvolution}>
              <Typography variant="h3" sx={{ fontWeight: 600, pb: "5%",ml:"-0%"}}>
                ÚNETE A LA EVOLUCIÓN
              </Typography>
              <Typography variant="body" sx={{ fontWeight: 500, pb: "15%" }}>
              {readyText}
              </Typography>
              <Box sx={{  width: "100%",pt:"5%" }}>
              <Button className={styles.buttonProps} text="Contactanos" Icon={Phone2} />
              </Box>
            </Box>
          </Box>
        </Box>
      )}{" "}
    </>
  );
};

export default Invertir;
