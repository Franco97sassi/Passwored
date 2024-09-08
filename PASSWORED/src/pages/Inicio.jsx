import Navbar from "../components/Navbar";
import Estrella1 from "../assets/images/Estrella1";
import Estrella2 from "../assets/images/Estrella2";
import Button from "../components/Button";
import fondoInicio from "../assets/fondoInicio.png";
import fondoInicioColor from "../assets/fondoInicioColor.png";
import Estrella3 from "../assets/images/Estrella3";
import fondoInicioPhone from "../assets/backImagePhone.png";
import fondoInicioColorPhone from "../assets/backPhone.png";
import styles from "./inicio.module.css";
 const Inicio = () => {
  return (
    <>  
     <Navbar className={styles.navbar}/>     
    <div className={styles.section}>
       
      <div className={styles.section1}>
        <div className={styles.star12}>
          
          <Estrella2 className={styles.star122} />
        </div>
        <div className={styles.star1}>
          <Estrella1 className={styles.star11} />
        </div>

        <div className={styles.desc}>
          <p className={styles.text1}>
            App que genera<br/>hábitos de lectura,<br/> comprensión de textos<br/> y mucho
            más.
          </p>
          <p className={styles.text1Mobile}>
            App que<br/> genera hábitos<br/> de lectura,<br/> comprensión<br/> de textos<br/> y mucho
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
      <div className={styles.section21}>
        <img
          src={fondoInicioPhone}
          alt="fondo inicio"
          //  className={styles.overlayImage1}
          className={styles.backgroundImagePhone}
        />
        <img
          src={fondoInicioColorPhone}
          alt="fondo inicio"
          className={styles.backImagePhone}
        />
      </div>
    </div></>
  );
};

export default Inicio;
