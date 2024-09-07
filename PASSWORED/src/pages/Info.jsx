import styles from "./info.module.css";
import Estrella3 from "../assets/images/Estrella3";
import rocketgif from "../assets/images/rocket.gif";
import Estrella1 from "../assets/images/Estrella1";

const Info = () => {
  return (
    <div className={styles.container}>
        
      <div className={styles.starSection}>
        <Estrella3 className={styles.star1} />
      </div>
      <div className={styles.passwored}>
        <p className={styles.subtitle}>¿Qué es PASSWORED?</p>
        <p className={styles.text}>
          PASSWORED es una aplicación que bloquea el acceso a las demás
          aplicaciones del celular o tablet de tu hijo… Para desbloquearlas, el
          niño tendrá que realizar una actividad educativa como resolver un
          problema matemático, aprender un idioma, leer y comprender un texto,
          etc.
          <br />
          De lo contrario, no podrá acceder a su app favorita, cada 20 minutos,
          el dispositivo se volverá a bloquear y el niño tendrá que realizar
          otra actividad.
        </p>
      </div>
      <div className={styles.section31}>  
        <div className={styles.star211}>  
          <Estrella1 className={styles.star22} />
          </div> 
        {/* </div>
        <div> */}
        <div  className={styles.rocket}> 
          <img
            src={rocketgif}
            alt="Rocket animation"
            className={styles.rocket2}
          /> </div>
   </div>
      <div className={styles.resultados}>
         
          <p className={styles.subtitle}>Resultados</p>
          <p className={styles.text}>
            Utilizamos este método obteniendo resultados sorprendentes; niños de
            dos años razonando,   memorizando y utilizando la lógica para resolver
            problemas en cuestión de  minutos;transformando tiempo de ocio en
            educación de alto rendimiento.
            <br />
            Con la ayuda de la IA generativa podremos llevar esto a otro nivel,
            personalizando, potenciando   y descubriendo los intereses y talentos
            individuales de cada niño.
            <br />
            Está demostrado que ellos utilizan altos grados de razonamiento y
            comprensión para obtener lo que quieren.{" "}
          </p>
         
           
         
      </div>
       
      <div className={styles.rocketStar}>  
        <div className={styles.star2}>  
          <Estrella1 className={styles.star22} />
          </div> 
        {/* </div>
        <div> */}
        <div  className={styles.rocket}> 
          <img
            src={rocketgif}
            alt="Rocket animation"
            className={styles.rocket2}
          /> </div>
   </div>
    </div>
  );
};

export default Info;
