import React from "react";
import styles from "./unete.module.css";
import Button from "../components/Button";
import rayoIcon from "../assets/rayoIcon.png";
import ButtonRegister from "../components/ButtonRegister";
import niñobox from "../assets/niñobox.png";

const Unete = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section1}> 
      <div className={styles.box}>
        <h4>Bienvenido a esta maravillosa experiencia!</h4>
        <h2>Forma parte de esta gran alternativa</h2>
        <h3>
          Las primeras 1000 personas que se registren obtendán la App GRATIS
        </h3>
<div  className={styles.button}>  
        <ButtonRegister /></div>
      </div>
      </div>
      <div>
       
          <div className={styles.unete}>
            <h2>ÚNETE A NOSOTROS</h2>

            <li>
              {" "}
              <h4>Inversionistas:</h4>
              <p>
                Si buscas oportunidades de inversión con un alto potencial de
                crecimiento, contáctanos. Juntos podemos llevar la educación al
                siguiente nivel.
              </p>
            </li>
            <li>
              {" "}
              <h4> Expertos en Educación y Tecnología:</h4>
              <p>
                {" "}
                Queremos escuchar tu experiencia. Es valiosa para nosotros.
                Únete a nuestra misión de engrandecer a los niños a través del
                aprendizaje automatizado.
              </p>
            </li>
            <li>
              {" "}
              <h4> Gobierno:</h4>
              <p>
                Queremos trabajar de cerca con el Gobierno para fortalecer la
                educación en todo el país. Invitamos a las autoridades a unirse
                a nuestra misión.
              </p>
            </li>
          </div>
        
      </div>
    </div>
  );
};

export default Unete;
