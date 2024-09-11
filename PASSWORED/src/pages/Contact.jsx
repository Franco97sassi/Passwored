import styles from "./contact.module.css";
import Footer from "../components/Footer";
import Phone from "../assets/images/Phone";
import MailIcon from "../assets/images/MailIcon";
import LocationIcon from "../assets/images/LocationIcon";

const Contact = () => {
  
  
  return (
    <div className={styles.c2}>  
   <div className={styles.container}>
      <div>
        <h3>Datos de Contacto</h3>
        <div className={styles.flex}>
          <MailIcon />
          <p>Email:  contac@passwored.com</p>
        </div>
        <div className={styles.flex2}>
          <MailIcon />
          <p>Email:<br/> contac@passwored.com</p>
        </div>
        <div className={styles.flex}>
          <Phone />
          <p>Telefono: +54 3874778216</p>
        </div>{" "}
         
        <div className={styles.flex2}>
          <Phone />
          <p>Telefono:<br/> +54 3874778216</p>
        </div>{" "}
        <div className={styles.flex}>
          <LocationIcon />
          <p>Dirección :Tomas Jofre 179, San Luis -  Argentina</p>
        </div>
        <div className={styles.flex2}>
          <LocationIcon />
          <p>Dirección :<br/> Tomas Jofre 179, San Luis -<br/> Argentina</p>
        </div>
      </div> 
      <div>
        
        <Footer />
      </div>
    </div>  </div>
  );
};

export default Contact;
