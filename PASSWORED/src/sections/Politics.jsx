 
import styles from "./politics.module.css";
 
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Box, Typography, useMediaQuery } from "@mui/material";
import useResponsive from "../hooks/useResponsive";

const Politics = () => {
  const { isMobile } = useResponsive();

  const text="#000000"
  const colors= "#000000"
  return (
    <> 
    <Navbar   sx={{ zIndex: 1}} text={text}/>
    <Box  sx={{ padding: '6%',
          paddingTop: isMobile?"12%":'15%',
          display: 'flex',
          paddingBottom:isMobile?"10%":"0%",
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft:isMobile?"10%":"10%",
          paddingRight:isMobile?"10%":"10%",

          alignItems: 'flex-start',gap:"10px"}}>
      
      <Typography variant="h2">Política de Privacidad de PASSWORED</Typography>

      <Typography variant="h3">1. Información General</Typography>
      <Typography variant="body">
        Esta Política de Privacidad describe nuestras políticas y procedimientos sobre la recopilación, uso y divulgación de tu información cuando usas el Servicio y te informa sobre tus derechos de privacidad y cómo la ley te protege. Utilizamos tus datos personales para proporcionar y mejorar el Servicio. Al usar el Servicio, aceptas la recopilación y el uso de información de acuerdo con esta Política de Privacidad. Esta Política de Privacidad ha sido creada con la ayuda del Generador de Políticas de Privacidad.
      </Typography>

      <Typography variant="h3">2. Interpretación y Definiciones</Typography>

      <Typography variant="h4">Interpretación</Typography>
      <Typography  variant="body">
        Las palabras cuya letra inicial está en mayúscula tienen significados definidos bajo las siguientes condiciones. Las siguientes definiciones tendrán el mismo significado independientemente de si aparecen en singular o en plural.
      </Typography>

      <Typography  variant="h4">Definiciones</Typography>
      <Typography variant="body">
        Para los propósitos de esta Política de Privacidad:
      </Typography>
      <ol className={styles.politicsul}>
      <Typography component="li" variant="li" gutterBottom>
            <strong>Cuenta:</strong> significa una cuenta única creada para que accedas a nuestro Servicio o partes de nuestro Servicio.
          </Typography>      
          <Typography component="li" variant="li" gutterBottom>
          <strong>Afiliado</strong> significa una entidad que controla, es controlada por o está bajo control común con una parte, donde “control” significa la propiedad del 50% o más de las acciones, participación accionaria u otros valores con derecho a voto para la elección de directores u otra autoridad de gestión.</Typography>   
        <Typography component="li" variant="li" gutterBottom><strong>Aplicación</strong> se refiere a PASSWORED, el programa de software proporcionado por la Compañía.</Typography>   
        <Typography component="li" variant="li" gutterBottom><strong>Compañía</strong> (referida como “la Compañía”, “Nosotros”, “Nos” o “Nuestro” en este Acuerdo) se refiere a PASSWORED.</Typography>   
        <Typography component="li" variant="li" gutterBottom><strong>País</strong> se refiere a: Argentina.</Typography>   
        <Typography component="li" variant="li" gutterBottom><strong>Dispositivo</strong> significa cualquier dispositivo que pueda acceder al Servicio, como una computadora, un teléfono móvil o una tableta digital.</Typography>   
        <Typography component="li" variant="li" gutterBottom><strong>Datos Personales</strong> es cualquier información que se relaciona con un individuo identificado o identificable.</Typography>   
        <Typography component="li" variant="li" gutterBottom><strong>Servicio</strong> se refiere a la Aplicación.</Typography>   
        <Typography component="li" variant="li" gutterBottom><strong>Proveedor de Servicios</strong> significa cualquier persona natural o jurídica que procesa los datos en nombre de la Compañía. Se refiere a empresas o individuos terceros empleados por la Compañía para facilitar el Servicio, para proporcionar el Servicio en nombre de la Compañía, para realizar servicios relacionados con el Servicio o para ayudar a la Compañía a analizar cómo se utiliza el Servicio.</Typography>   
        <Typography component="li" variant="li" gutterBottom><strong>Datos de Uso</strong> se refiere a los datos recopilados automáticamente, ya sea generados por el uso del Servicio o de la infraestructura del Servicio en sí (por ejemplo, la duración de una visita a la página).</Typography>   
        <Typography component="li" variant="li" gutterBottom><strong>Tú</strong> significa el individuo que accede o usa el Servicio, o la empresa u otra entidad legal en nombre de la cual dicho individuo está accediendo o usando el Servicio, según corresponda.</Typography>   
      </ol>

      <Typography  variant="h3">3. Recopilación y Uso de tus Datos Personales</Typography>

      <Typography  variant="h4">Tipos de Datos Recopilados</Typography>

      <Typography  variant="h4">Datos Personales</Typography>
      <Typography variant="body">
        Mientras usas nuestro Servicio, podemos pedirte que nos proporciones cierta información de identificación personal que puede ser utilizada para contactarte o identificarte. La información de identificación personal puede incluir, pero no se limita a:
      </Typography>
      <ol className={styles.politicsul}>
      <Typography component="li" variant="li" gutterBottom>Dirección de correo electrónico</Typography>
      <Typography component="li" variant="li" gutterBottom>Nombre y apellido</Typography>
      <Typography component="li" variant="li" gutterBottom>Datos de Uso</Typography>
      </ol>

      <Typography  variant="h4">Datos de Uso</Typography>
      <Typography variant="body">
        Los Datos de Uso se recopilan automáticamente al usar el Servicio.
      </Typography>
      <Typography variant="body">
        Los Datos de Uso pueden incluir información como la dirección de Protocolo de Internet de tu Dispositivo (por ejemplo, dirección IP), tipo de navegador, versión del navegador, las páginas de nuestro Servicio que visitas, la hora y fecha de tu visita, el tiempo que pasas en esas páginas, identificadores únicos de dispositivos y otros datos de diagnóstico.
      </Typography>
      <Typography variant="body">
        Cuando accedes al Servicio a través de un dispositivo móvil, podemos recopilar cierta información automáticamente, incluyendo, pero no limitado a, el tipo de dispositivo móvil que usas, tu ID único de dispositivo móvil, la dirección IP de tu dispositivo móvil, tu sistema operativo móvil, el tipo de navegador de Internet móvil que usas, identificadores únicos de dispositivos y otros datos de diagnóstico.
      </Typography>
      <Typography variant="body">
        También podemos recopilar información que tu navegador envía cada vez que visitas nuestro Servicio o cuando accedes al Servicio a través de un dispositivo móvil.
      </Typography>

      <Typography variant="h3">4. Uso de tus Datos Personales</Typography>
      <Typography variant="body">
        La Compañía puede usar los Datos Personales para los siguientes propósitos:
      </Typography>
      <ol  className={styles.politicsul}>
      <Typography component="li" variant="li" gutterBottom>Para proporcionar y mantener nuestro Servicio, incluyendo para monitorear el uso de nuestro Servicio.</Typography>
      <Typography component="li" variant="li" gutterBottom>Para gestionar tu Cuenta: para gestionar tu registro como usuario del Servicio. Los Datos Personales que proporcionas pueden darte acceso a diferentes funcionalidades del Servicio que están disponibles para ti como usuario registrado.</Typography>
      <Typography component="li" variant="li" gutterBottom>Para personalizar el contenido.</Typography>
      <Typography component="li" variant="li" gutterBottom>Para formular estadísticas.</Typography>
      <Typography component="li" variant="li" gutterBottom>Para mejorar la app.</Typography>
      </ol>

      <Typography  variant="h3">5. Seguridad de los Datos</Typography>
      <Typography variant="body">
        Implementamos las siguientes medidas de seguridad para proteger los datos de los usuarios:
      </Typography>
      <ol  className={styles.politicsul}>
      <Typography component="li" variant="li" gutterBottom><strong>Cifrado de Datos:</strong> Utilizamos cifrado SSL/TLS para proteger los datos durante la transmisión.</Typography>
      <Typography component="li" variant="li" gutterBottom><strong>Almacenamiento Seguro:</strong> Aseguramos que los datos se almacenen en servidores seguros con acceso restringido.</Typography>
      </ol>

      <Typography  variant="h3">6. Protección de la Privacidad de los Niños</Typography>
      <Typography variant="body">
        Para proteger la privacidad de los niños, tomamos las siguientes medidas:
      </Typography>
      <ol  className={styles.politicsul}>
      <Typography component="li" variant="li" gutterBottom><strong>Consentimiento Parental:</strong> Obtenemos el consentimiento verificable de los padres o tutores antes de recopilar cualquier dato personal de los niños.</Typography>
      <Typography component="li" variant="li" gutterBottom><strong>Limitación de Datos:</strong> Recopilamos solo la información necesaria y evitamos recopilar datos sensibles.</Typography>
      </ol>

      <Typography  variant="h3">7. Derechos de los Usuarios</Typography>
      <Typography variant="body">
        Los usuarios pueden acceder,<br/> corregir o eliminar sus datos,<br/>  visitando nuestra página web:<br/> passwored.com/<br/> politicas_de_privacidad 
      </Typography>

      <Typography  variant="h3">8. Notificación de Cambios</Typography>
      <Typography variant="body">
        Notificamos a los usuarios sobre cambios en la política de privacidad a través de los correos electrónicos registrados. Las actualizaciones se realizan cada vez que sea necesario o, en su defecto, cada dos meses.
      </Typography>

      <Typography  variant="h3">9. Contacto</Typography>
      <Typography variant="body">
        Si tienes preguntas o preocupaciones sobre nuestra política de privacidad, puedes contactarnos a través de  contac@passwored.com .
      </Typography>
 
    </Box>          
    <Footer 
  background='linear-gradient(180deg, #ffffff 0%, #9f6ed7 50%, #9f6ed7 100%)' 
  width="100%"
   
/>
      </>
  );
};

export default Politics;