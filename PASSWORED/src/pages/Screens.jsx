 import styles from "./screens.module.css";
import screen1 from "../assets/box1.png";
import screen2 from "../assets/screen2.png";
import screen3 from "../assets/screen3.png";
import screen4 from "../assets/screen4.png";
import screen5 from "../assets/screen5.png";
import screen6 from "../assets/screen6.png";
import { Typography, useMediaQuery } from "@mui/material"; 
import Box from "@mui/material/Box";

const Screens = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const steps = [
    {
      number: "01",
      title: "Descargar la App",
      description:
        "Por el momento solo estará disponible para sistema Android.",
      img: screen1,
    },
    {
      number: "02",
      title: "Configurar la App",
      description:
        "Seleccionará a qué Apps puede ingresar el niño realizando una actividad educativa.",
      img: screen2,
    },
    {
      number: "03",
      title: "Listo!!!",
      description:
        "El celular se verá totalmente normal, pero en el momento que el niño seleccione una App como por ejemplo Free Fire...",
      img: screen3,
    },
  ];
  const stepsGold = [
    {
      title: "Actividad",
      description:
        "Aparecerá una actividad de enseñanza y luego cuatro preguntas relacionadas. Si responde bien tres de ellas...",
      img: screen4,
    },
    {
      title: "Apps Bloqueadas",
      description:
        "Si selecciona una App de las que se bloqueo previamente en configuración como por ejemplo Whatsapp...",
      img: screen5,
    },
    {
      title: "Password",
      description:
        "Aparecerá un patrón de bloqueo que sólo conocerá el tutor del niño. Manteniendo el acceso controlado del menor.",
      img: screen6,
    },
  ];
  const Step = ({ number, title, description, img }) => (
    <Box
      sx={{
        width: "29%",
        backgroundColor: "#e8dbff",
        border: "1px solid #ccc",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "20px",
        marginBottom: "4%",
        paddingBottom: "1%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          height: "25%",
          width: "100%",
        }}
      >
        <Typography variant="h1" sx={{ pl: "5%" }}>
          {number}
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 500, pl: "5%" }}>
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
           height: "50%",
          textAlign: "left",
          paddingLeft: " 6%",
          paddingRight: "6%",
        }}
      >
        <Typography variant="body">{description}</Typography>
      </Box>
      <Box sx={{ alignSelf: "center", height: "auto" }}>
        {/* <img src={img} alt={title} style={{ marginLeft: "15%", maxWidth: "70%", height: "auto" }} /> */}
        <img src={img} style={{ width: "100%", height: "auto" }} />
      </Box>
    </Box>
  );
  const StepGold = ({ number, title, description, img }) => (
    <Box
      sx={{
        width: "27%",
        backgroundColor: "#ffc978",
        border: "1px solid #ccc",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "20px",
        padding: "1%",
        display: "flex",
        flexDirection: "column",
        alignitems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <Box sx={{ height: " 12%", paddingLeft: "0%" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,
            paddingLeft: " 6%",
            paddingBottom: "1%",
            paddingTop: "5%",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
           height: "50%",
          textAlign: "left",
          paddingLeft: " 6%",
          paddingRight: "6%",
          paddingBottom: "5%",
        }}
      >
        <Typography variant="body">{description}</Typography>
      </Box>
      <Box sx={{ alignSelf: "center", height: "auto" }}>
        {/* <img src={img} alt={title} style={{ marginLeft: "15%", maxWidth: "70%", height: "auto" }} /> */}
        <img src={img} style={{ width: "100%", height: "auto" }} />
      </Box>
    </Box>
  );

  const StepMobile = ({ number, title, description, img }) => (
    <Box
      sx={{
        width: "87%",
        marginLeft: "5%",
        marginRight: "5%",
        marginBottom: "5%",
        borderRadius: "20px",

        padding: "1%",
        backgroundColor: "#E8DBFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          height: "25%",
          width: "100%",
          gap: 0,
        }}
      >
        <Typography variant="h1" sx={{pl:"5%" }}>{number}</Typography>
        <Typography variant="h3" sx={{pl:"7%", fontWeight: 500 }}>
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: "left",
          height: "50%",
          fontSize: "18px",
          justifySelf: "start",
          paddingLeft: "6%",
          paddingRight: "6%",
          paddingBottom: "6%",

        }}
      >
        <Typography variant="body">{description}</Typography>
      </Box>
      <Box sx={{   alignSelf: "center", height: "auto" }}>
        {/* <img src={img} alt={title} style={{ marginLeft: "15%", maxWidth: "70%", height: "auto" }} /> */}
        <img
          src={img}
          style={{ marginLeft: "16.5%", maxWidth: "70%", height: "auto" }}
        />
      </Box>
    </Box>
  );
  const StepGoldMobile = ({ number, title, description, img }) => (
    <Box
      sx={{
        display: "inline-block",
        width: "87%",
        height: "auto",
        backgroundColor: "#ffc978",
        border: "1px solid #ccc",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "20px",
        padding: "1%",
        marginLeft: "5%",
        marginRight: "5%",
        textAlign: "center",
        position: "relative",
        maxWidth: "90%",
        overflow: "hidden",
        marginTop: "5%",
      }}
    >
      <Box sx={{ textAlign: "left" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 500, pl: "7%", pt: "2%", pb: "2%" }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
           height: "50%",
          textAlign: "left",
          paddingLeft: " 6%",
          paddingRight: "6%",
          paddingBottom: "5%",
        }}
      >
        <Typography variant="body">{description}</Typography>
      </Box>
      <Box sx={{ alignSelf: "center", height: "auto" }}>
        <img src={img} style={{ maxWidth: "70%", height: "auto" }} />
      </Box>
    </Box>
  );

  return (
    <>
      {!matches ? (
        <Box className={styles.container}
        sx={{
          paddingLeft: { lg: '7%', xl: '10%' },
          paddingRight: { lg: '7%', xl: '10%' },
          paddingBottom: '10%',
          display: 'flex',
          flexDirection: 'column',
        }}
        
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "left",
              fontWeight: 600,
              marginTop: "3%",
              marginBottom: "7%",
            }}
          >
            {" "}
            Tan fácil como...
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "space-between",
            }}
          >
            {steps.map((step) => (
              <Step key={step.number} {...step} />
            ))}

            {stepsGold.map((step) => (
              <StepGold key={step.number} {...step} />
            ))}
          </Box>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              overflowX: "hidden",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                backgroundColor: "#eee8fb",
                paddingTop: "25%",
                paddingLeft: "6%",
                paddingbottom: "50%",
                width: "100%",
                fontWeight: 600,
              }}
            >
              
              Tan fácil como...
            </Typography>
            <Box
              sx={{
                paddingTop: "25%",
                background:
                  "linear-gradient(180deg, #eee8fb 44.5%, rgba(253, 194, 49, 0.58) 89%)",
                flex: 1,
                marginBottom: "0%",
              }}
            >
              {steps.length > 0 && (
                <StepMobile key={steps[0].number} {...steps[0]} />
              )}
            </Box>

            <Box
              sx={{
                flex: "1",
                position: "relative",
                backgroundColor: "rgba(253, 194, 49, 0.58)",
              }}
            >
              {steps.length > 0 && (
                <StepMobile key={steps[1].number} {...steps[1]} />
              )}
            </Box>
          </Box>

          <div className={styles.gradient}>
            {steps.length > 0 && (
              <StepMobile key={steps[2].number} {...steps[2]} />
            )}

            {stepsGold.map((step) => (
              <StepGoldMobile key={step.number} {...step} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Screens;
