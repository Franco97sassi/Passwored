 import styles from "./unete.module.css";
  // import ButtonRegister from "../components/Button";
  import { Box, Typography, List, ListItem, ListItemText   } from '@mui/material';
  import rayoIcon from '../assets/rayoIcon.png'; // Ruta al ícono de rayo
  import Button from "../components/CallButton";
  import RegisterUser from '../assets/images/RegisterUser'

const Unete = () => {
  const listItemStyles = {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '1.5%',
    alignItems: 'flex-start',  
    position: 'relative',
    '&::before': {
      content: '""',
      display: 'block',
      width: '40px',
      height: '40px',
      backgroundImage: `url(${rayoIcon})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      position: 'absolute',
      left: { xs: '-8.5%', sm: '-1.5%', xl: "0%" },
      top:  {xs:"0%",sm:"5%"},
      transform: 'translateY(50%)',
    },
  };

  const listItems = [
  {
    title: "Inversionistas:",
    description: "Si buscas oportunidades de inversión con un alto potencial de crecimiento, contáctanos. Juntos podemos llevar la educación al siguiente nivel."
  },
  {
    title: "Expertos en Educación y Tecnología:",
    description: "Queremos escuchar tu experiencia. Es valiosa para nosotros. Únete a nuestra misión de engrandecer a los niños a través del aprendizaje automatizado."
  },
  {
    title: "Gobierno:",
    description: "Queremos trabajar de cerca con el Gobierno para fortalecer la educación en todo el país. Invitamos a las autoridades a unirse a nuestra misión."
  },
];
  return (
    <Box  sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      overflowX: 'hidden',
    }}>
      <Box  sx={{
          width: '100%',
          paddingTop: '7%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}> 
      <Box  sx={{
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            background: 'linear-gradient(90deg, #EBE5FA 38%, rgba(253, 194, 49, 0.58) 100%)',
            textAlign: 'left',
            marginBottom: '10%',
            width: '89%',
            paddingLeft: '4%',
            paddingTop: '3%',
            paddingBottom: '3%',
          }}>
        <Typography variant="h4" sx={{fontWeight:400}}>Bienvenido a esta maravillosa experiencia!</Typography >
        <Typography variant="h2" sx={{fontWeight:600,mb:"2%",textAlign:"left"}}>Forma parte de esta gran alternativa</Typography >
        <Typography variant="h3"sx={{ mb:"3%",fontWeight:500,textAlign:"left"}}>
          Las primeras 1000 personas que se registren obtendán la App GRATIS
        </Typography  > 
<Box  sx={{width:"100%" }}>  
        {/* <ButtonRegister className={styles.buttonRegister} />  */}
        <Button className={styles.buttonRegister} text="Registrarme" Icon={RegisterUser} />
        </Box>
      </Box>
      </Box>
      
       
          <Box sx={{
           paddingTop: '5%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          background: 'linear-gradient(to bottom, #ffffff 0%, #eee8fb 50%, rgba(253, 194, 49, 0.58) 100%)',
          paddingLeft: '5.7%',
          paddingRight: '5.7%',
          textAlign: 'left',
          width: '88.6%',
        }}>
            <Typography variant="h2" sx={{fontWeight:600}}>ÚNETE A NOSOTROS</Typography>

             
                 <List sx={{paddingBottom:"5%" ,          pl: {xs:"5%",sm:"0%"}
}}>
                 
          {listItems.map((item, index) => (
            <ListItem key={index} sx={listItemStyles}>
              <ListItemText
                primary={<Typography fontWeight="700" variant="body">{item.title}<br /></Typography>}
                secondary={<Typography variant="body">{item.description}</Typography>}
              />
            </ListItem>
          ))}
        </List>
          </Box>
        
      
    </Box>
  );
};

export default Unete;
