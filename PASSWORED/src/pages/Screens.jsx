import React, { useRef } from "react";
import styles from "./screens.module.css";
import screen1 from "../assets/box1.png";
import screen2 from "../assets/screen2.png";
import screen3 from "../assets/screen3.png";
import screen4 from "../assets/screen4.png";
import screen5 from "../assets/screen5.png";
import screen6 from "../assets/screen6.png";

const Screens = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}> Tan fácil como...</h2>
      <div className={styles.boxes}>
       
        <div className={styles.box}>
          <div className={styles.title2}>
            <h2>01</h2> 
            <h3>Descargar la App</h3>
             </div>
             <div className={styles.description}>  
            <p  >Por el momento solo estará disponible para sistema Android.</p>{" "}
            </div>
             
             {" "}
          <div className={styles.imgContainer}>
            <img src={screen1}    className={styles.img}/>{" "}
          </div>
        </div>
       
        <div className={styles.box}>
          <div className={styles.title2}>
            <h2>02</h2>   
            <h3>Configurar la App</h3>{" "}</div>
            <div  className={styles.description}>  <p >
              Seleccionará a qué Apps puede ingresar el niño realizando una
              actividad educativa (casilleros derecha) y qué Apps tendrán una
              contraseña para que el niño no pueda ingresar (casilleros
              izquierda).{" "}
            </p>{" "}
          {" "} </div>
          <div  className={styles.imgContainer}>
            <img src={screen2} className={styles.img} />{" "}
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.title2}>
            <h2>03</h2>   
            <h3> Listo!!!</h3>{" "}</div>
            <div  className={styles.description}>  <p >
            El celular se verá totalmente normal, pero en el momento que el
              niño seleccione una App como por ejemplo Free Fire...{" "}

            </p>{" "}
          {" "} </div>
          <div  className={styles.imgContainer}>
            <img src={screen3} className={styles.img} />{" "}
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.title3}>
             <h3> Actividad </h3></div>
            <div  className={styles.description}>  <p >
            Aparecerá una actividad de enseñanza y luego cuatro preguntas
              relacionadas. Si responde bien tres de ellas... Eureka! ingresará
              a su App favorita por 20 min.
            </p>{" "}
          {" "} </div>
          <div  className={styles.imgContainer}>
            <img src={screen4} className={styles.img} />{" "}
          </div>
        </div>
        
        <div className={styles.box2}>
          <div className={styles.title3}>
               
            <h3> Apps Bloqueadas</h3>{" "}</div>
            <div  className={styles.description}>  <p >
            Si selecciona una App de las que se bloqueo previamente en
            configuración como por ejemplo Whatsapp...
            </p>{" "}
          {" "} </div>
          <div  className={styles.imgContainer}>
            <img src={screen5} className={styles.img} />{" "}
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.title3}>
             
            <h3> Password</h3>{" "}</div>
            <div  className={styles.description}>  <p >
            Aparecerá un patrón de bloqueo que sólo conocerá el tutor del
              niño. Manteniendo el acceso controlado del menor.{" "}

            </p>{" "}
          {" "} </div>
          <div  className={styles.imgContainer}>
            <img src={screen6} className={styles.img} />{" "}
          </div>
        </div>
        
         
      </div>
    </div>
  );
};

export default Screens;
