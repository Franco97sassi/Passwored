import InstagramIcon from "../assets/images/InstagramIcon";
import TwitterIcon from "../assets/images/TwitterIcon";
import YoutubeIcon from "../assets/images/YoutubeIcon";
import TiktokIcon from "../assets/images/TiktokIcon";
import logopass from "../assets/logopass.png";
import { Link } from "react-router-dom";
import { Box, Typography, IconButton, Link as MuiLink } from "@mui/material";

const Footer = ({ background, width }) => {
  const handleRedirect = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const isHomePage = location.pathname === "/";

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      // width="100%"
      flexDirection={{ xs: "column-reverse", md: "row" }}
      mb={{ xs: "10vh", md: "0" }}
      sx={{
 
        margin: {
          xs: "0 -0%",
          md: "0 0%",
        },
        padding: {
          xs: "0 -0%",
            md: "0 4%",
         

        },
 
        height:isHomePage?"10vh":"20vh",
        background: background,
       
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        pl={{ xs: "37%", md: "-1%" }}
        ml={isHomePage ? "-27%" : "-20%"}        width={{ xs: "75%", md: "20%" }}
        pt={{ xs: "0px", md: "0" }}
      >
        {/* No se puede poner la imagen en svg */}
        <img
          src={logopass}
          alt="Logopass"
          style={{
            width: "auto",
            transform: {
              xs: "scale(1)",
              md: "scale(0.5)",
            },
          }}
        />
      </Box>
      <Box>
        <Link to="/politics"  style={{ textDecoration: 'none' }}>
          <Typography fontSize={{ xs: "20px", md: "24px" }} textAlign="center" sx={{
            pt:{
              xs: "5%",
              md: "0%",
            }, 
            pb:{
              xs: "5%",
              md: "0%",
            },
          }}>
            Políticas de Privacidad
          </Typography>
        </Link>
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={{ xs: "5vw", md: "1vw" }}
       
      >
        <IconButton
          onClick={() =>
            handleRedirect(
              "https://www.tiktok.com/@passwored.com?_t=8pcX6DH2AUv&_r=1"
            )
          }
        >
          <TiktokIcon />
        </IconButton>
        <IconButton
          onClick={() =>
            handleRedirect(
              "https://www.instagram.com/passwored.edtech?igsh=MWY2dTNxdmtsY2tmNA=="
            )
          }
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          onClick={() =>
            handleRedirect(
              "https://www.facebook.com/profile.php?id=61565960210607&mibextid=ZbWKwL"
            )
          }
        >
          <TwitterIcon />
        </IconButton>
        <IconButton onClick={() => handleRedirect("#")}>
          <YoutubeIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
