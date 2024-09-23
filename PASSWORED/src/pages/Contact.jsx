import Footer from "../components/Footer";
import Phone from "../assets/images/Phone";
import MailIcon from "../assets/images/MailIcon";
import LocationIcon from "../assets/images/LocationIcon";
import { Box, Typography, useMediaQuery } from "@mui/material";

const Contact = () => {
  const matches = useMediaQuery("(max-width:600px)");
  const contactInfo = [
    {
      icon: <MailIcon />,
      label: "Email:",
      value: "contac@password.com",
    },
    {
      icon: <Phone />,
      label: "Teléfono:",
      value: "+54 3874778216",
    },
    {
      icon: <LocationIcon />,
      label: "Dirección:",
      value: "Tomas Jofre 179, San Luis - Argentina",
    },
  ];
  return (
    <Box
      sx={{
        height: matches?"75vh":"75vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "95%",
        paddingLeft: "5%",
        paddingBottom: "3%",
        paddingTop: "3%",
        background:
          "linear-gradient(180deg, #ffffff 0%, #eee8fb 50%, #9f6ed7 100%)",
      }}
    >
      <Box>
        <Typography
          fontWeight="600"
          variant="h2"
          sx={{ p: 0, textAlign: "left", paddingBottom: "4%" }}
        >
          Datos de Contacto
        </Typography>

        {contactInfo.map(({ icon, label, value }, index) => (
          <Box
            key={index}
            sx={{ display: "flex", paddingBottom: "2%" }}
            alignItems="center"
          >
            {icon}
            <Typography
              variant="h4"
              sx={{ paddingLeft: { xs: "5%", sm: "1%" } }}
            >
              {label} {matches && <br />}
              {value}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box>
        <Footer 
    
        
        />
      </Box>
    </Box>
  );
};

export default Contact;
