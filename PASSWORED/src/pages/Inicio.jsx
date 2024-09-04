import Estrella1 from "../assets/images/Estrella1";
import Estrella2 from "../assets/images/Estrella2";
import Button from "../components/Button";
import fondoInicio from "../assets/fondoInicio.png";
import fondoInicioColor from "../assets/fondoInicioColor.png";
import Estrella3 from "../assets/images/Estrella3";

import styles from "./inicio.module.css";
import Navbar from "../components/Navbar";
const Inicio = () => {
  return (
    <>  
     <Navbar className={styles.navbar}/>     
    <div className={styles.section}>
       
      <div className={styles.section1}>
        <div className={styles.star12}>
          {" "}
          <Estrella2 className={styles.star122} />
        </div>
        <div className={styles.star1}>
          <Estrella1 className={styles.star11} />
        </div>

        <div className={styles.desc}>
          <p className={styles.text1}>
            App que genera hábitos de lectura, comprensión de textos y mucho
            más.
          </p>
        </div>
        <div className={styles.star2}>
          {" "}
          <Estrella2 className={styles.star22} />
        </div>
        <div className={styles.star21}>
          <Estrella3 className={styles.star22} />
        </div>
        <div className={styles.star3}>
          <Button />
        </div>
      </div>
      <div className={styles.section2}>
        <img
          src={fondoInicio}
          alt="fondo inicio"
          //  className={styles.overlayImage1}
          className={styles.backgroundImage}
        />
        <img
          src={fondoInicioColor}
          alt="fondo inicio"
          className={styles.backImage}
        />
      </div>
    </div></>
  );
};

export default Inicio;
