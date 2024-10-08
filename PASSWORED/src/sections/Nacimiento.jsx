import child2 from "../assets/child2.png";
import Estrella3 from "../assets/images/Estrella3";
import { Box, Typography, useMediaQuery } from "@mui/material";

const Nacimiento = () => {
  // const matches = useMediaQuery("(max-width:600px)");

  const Content = ({ children, variant, align }) => (
    <Typography
      variant={variant}
      sx={{ textAlign: align, paddingLeft: "5%", width: { xs: "95%", md: "75%" } }}
    >
      {children}
    </Typography>
  );
  const bodyText = (
    <>
      Un compañero tenía un hijo con retraso madurativo; una noche fui a
      visitarlo y observe que el pequeño de 2 años estaba jugando con el
      celular, algo que no me pareció correcto, por lo que pregunte: «¿Por qué
      le das el teléfono a tu hijo si para muchos padres es perjudicial?» A lo
      que él me respondió: «Con el celular aprende cosas, como escribir su
      nombre». Yo todo incrédulo ¿Escribir su nombre con 2 años y retraso
      madurativo?
      <br />
      En ese momento él le preguntó: «¿Cómo te llamas?» El niño escribió en la
      pantalla del celular «GABRIEL». Luego le preguntó: «¿Cuál es tu número de
      documento?» sin dudarlo escribió los ocho números. Wow… y no sólo eso!!!
      Luego le preguntó: «¿Si te pierdes cómo llamas a papá?», a lo que
      nuevamente escribió los 10 dígitos sin error alguno. Increíble!!! ¿Cómo lo
      haces? «Muy fácil» me respondió «a mi hijo le encanta jugar con el
      celular, sólo bloqueo el teléfono y coloco de contraseña lo que quiero que
      aprenda, si no lo aprende no puede ingresar a su app favorita».
      <br />
      Con esto en mente llegamos a diseñar y crear una App que convierte el
      tiempo de ocio en momentos de aprendizaje.
      <br />
      Los niños no aprenden no porque no sean capaces, sino porque no reciben el
      estímulo suficiente para hacerlo.
    </>
  );
  return (
    <Box
      sx={{
        background:
          "linear-gradient(to bottom, #FFFFFF 0%, #EEE8FB 50%, rgba(253, 194, 49, 0.58) 100%)",
        width: "100%",
        padding: "0 0%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          width: "100%",
          paddingBottom: "7%",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            pt: { xs: "5%", md: "none" },
            flexDirection: "column",
            width: "90%",
            paddingLeft: "5%",
          }}
        >
          <Box sx={{ alignSelf: "flex-end" }}>
            <Estrella3
              style={{
                display: { xs: "flex", md: "none" },

                width: { xs: "30%", md: "auto" },
                height: { xs: "100px", md: "auto" },
              }}
            />{" "}
          </Box>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              textAlign: "left",
              pb: { xs: "5%", md: "none" },
              pl: { xs: "5%", md: "none" },
              width:{ xs: "75%", md: "100%" }
            }}
          >
            ¿Cómo nació PASSWORED?
          </Typography>

          <Content variant="body"  >{bodyText}</Content>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", md: "47.3%" },
            height: "auto",
            paddingLeft: { xs: "5%", md: "4.3%" },
            paddingTop: { xs: "10%", md: "0%" },
          }}
        >
          <img
            src={child2}
            alt="child2"
            style={{ width: "100%", alignSelf: "flex-start", height: "auto" }}
          />
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            alignItems: "center",
            width: "52.7%",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              textAlign: "left",
              margin: 0,
              paddingTop: "10%",
              paddingBottom: "2%",
              paddingLeft: "5%",
              width: "75%",
            }}
          >
            ¿Cómo nació PASSWORED?
          </Typography>
          <Typography
            variant="body"
            sx={{
              paddingRight: "0%",
              textAlign: "left",
              width: "75%",
              fontWeight: 400,
              paddingLeft: "5%",
             
            }}
          >
            {bodyText}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          paddingLeft: "5.3%",
          paddingBottom: "6%",
          height: "34%",
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          alignItems: "flex-start",
          width:  { xs: "87%", md: "62%" } 
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 600, textAlign: "left" }}>
          ¿Sabías qué...
        </Typography>
        <Typography variant="body">
          El 80% de los niños entre 2 y 10 años utiliza dispositivos móviles a
          diario, y que el 60% de ellos lo hace durante más de dos horas? Estos
          datos, extraídos de un estudio realizado por la Universidad de
          Harvard, revelan que los niños están expuestos a una gran cantidad de
          estímulos digitales que pueden afectar a su desarrollo cognitivo,
          emocional y social. Además, muchos de éstos estímulos no son de
          calidad ni tienen un propósito educativo, sino que sólo buscan
          entretener o distraer a los niños. ¿Qué pasaría si pudiéramos
          convertir el tiempo de pantalla en tiempo de aprendizaje?, ¿Y si
          pudiéramos aprovechar el interés de los niños por los dispositivos
          móviles para enseñarles cosas nuevas y útiles, como matemáticas,
          comprensión de texto o idiomas? Esa es la idea detrás de PASSWORED.
        </Typography>
      </Box>
    </Box>
  );
};

export default Nacimiento;
