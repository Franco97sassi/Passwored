import React, { useState }  from "react";
import styles from "./screens.module.css";
import screen1 from "../assets/box1.png";
import screen2 from "../assets/screen2.png";
import screen3 from "../assets/screen3.png";
import screen4 from "../assets/screen4.png";
import screen5 from "../assets/screen5.png";
import screen6 from "../assets/screen6.png";
import { useMediaQuery } from "@mui/material"; // Si estás usando Material UI para el hook
import arrow from "../assets/arrow.png";

 const Screens = () => {
  const matches = useMediaQuery('(max-width:600px)')
  const [currentBox, setCurrentBox] = useState(0);

  // Las cajas que solo se renderizan cuando matches es true
  const box2Content = [
    {
      title: "Actividad",
      description:
        "Aparecerá una actividad de enseñanza y luego cuatro preguntas relacionadas. Si responde bien tres de ellas... Eureka! ingresará a su App favorita por 20 min.",
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
  const handleNext = () => {
    if (currentBox < box2Content.length - 1) {
      setCurrentBox(currentBox + 1);
    }
  };

  const handlePrev = () => {
    if (currentBox > 0) {
      setCurrentBox(currentBox - 1);
    }
  };

  return (
    <>  { !matches?(  
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
            <h3>Listo!!!</h3> </div>
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
    ):(
      <> 
    <div className={styles.b1} > 
    <h2 className={styles.title}> Tan fácil como...</h2>
 
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
        </div></div>
        <div className={styles.gradient}>  

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
      <div className={styles.mobileContainer}>
          <div className={styles.box2}>
            <div className={styles.title3}>
              <h3>{box2Content[currentBox].title}</h3>
            </div>
            <div className={styles.description}>
              <p>{box2Content[currentBox].description}</p>
            </div>
            <div className={styles.imgContainer}>
              <img src={box2Content[currentBox].img} className={styles.img} alt={box2Content[currentBox].title} />
            </div>
            {/* Flechas de navegación */}
            <button
  className={`${styles.arrow} ${styles.arrowLeft}`}
  onClick={handlePrev}
  disabled={currentBox === 0}
>
  <img src={arrow} alt="left arrow" className={`${styles.arrowImage} ${styles.flipped}`}  />
</button>
<button
  className={`${styles.arrow} ${styles.arrowRight}`}
  onClick={handleNext}
  disabled={currentBox === box2Content.length - 1}
>
<img src={arrow} alt="right arrow"className={styles.arrowImage}  />
</button>
          </div>
        </div>
        </div>
        </>
    )}</>
  );
};

export default Screens;
