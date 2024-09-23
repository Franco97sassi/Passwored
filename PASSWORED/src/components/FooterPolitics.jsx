 import PasswordLogo from '../assets/images/PasswordLogo';
import InstagramIcon from '../assets/images/InstagramIcon';
import TwitterIcon from '../assets/images/TwitterIcon';
import YoutubeIcon from '../assets/images/YoutubeIcon';
import TiktokIcon from '../assets/images/TiktokIcon';
import logopass from "../assets/logopass.png"
import { Link } from 'react-router-dom'; 
import { Box, Typography, IconButton } from '@mui/material';

const FooterPolitics = () => {
  const handleRedirect = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    
    mb={{ xs: '10vh', md: '0' }}
    flexDirection={{ xs: 'column-reverse', md: 'row' }}
    sx={{
      margin: {
        xs: '0 -0%', 
       },
       paddingBottom: '5vh',
      background: 'linear-gradient(180deg, #ffffff 0%, #9f6ed7 50%, #9f6ed7 100%)',
    }} 
  >
      <Box
        display="flex"
        alignItems="center"
        pl={{ xs: 0, md: '1%' }}
        width={{ xs: '65%', md: '20%' }}
        pt={{ xs: '15px', md: '0' }}
      ><img
      src={logopass}
      alt="Logopass"
      style={{
        width: 'auto',
      }}
      sx={{
        transform: {
          xs: 'scale(1)',   
          md: 'scale(0.5)'  
        }
      }}
    />
      </Box>
      <Box>
        <Link to="/politics" style={{ }}>
          <Typography
             sx={{
              fontSize: { xs: '20px', md: '24px' },
             }}
          >
            Políticas de Privacidad
          </Typography>
        </Link>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={{ xs: '5vw', md: '1vw' }}
        sx={{ paddingRight: { xs: '0', md: '5%' } }}
      >
        <IconButton onClick={() => handleRedirect("https://www.tiktok.com/@passwored.com?_t=8pcX6DH2AUv&_r=1")}>
          <TiktokIcon />
        </IconButton>
        <IconButton onClick={() => handleRedirect("https://www.instagram.com/passwored.edtech?igsh=MWY2dTNxdmtsY2tmNA==")}>
          <InstagramIcon />
        </IconButton>
        <IconButton onClick={() => handleRedirect("https://www.facebook.com/profile.php?id=61565960210607&mibextid=ZbWKwL")}>
          <TwitterIcon /> {/* Cambia a `FacebookIcon` si tienes un ícono específico para Facebook */}
        </IconButton>
        <IconButton onClick={() => handleRedirect("https://www.youtube.com")}>
          <YoutubeIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default FooterPolitics