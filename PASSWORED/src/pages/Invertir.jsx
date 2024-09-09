import ButtonCall from "../components/ButtonCall";
import ButtonRegister from "../components/ButtonRegister";
import styles from "./invertir.module.css";
import { useMediaQuery } from "@mui/material";

const Invertir = () => {
  const matches = useMediaQuery('(max-width:600px)')

  return (
    <>  
    { !matches?(  
    <div className={styles.container}>
      <h2>POR QUE INVERTIR EN NOSOTROS?</h2>
      {/* <div className={styles.boxes}> */}
      <div  className={styles.boxes}>

        {/* <div className={styles.box}> */}
        <div  className={styles.box}>  

          <h3>Equipo</h3>
          <p>
            Jóvenes capacitados y comprometidos full time con esta Startup, con
            habilidades acorde a la magnitud del proyecto, la resiliencia
            suficiente para sortear las dificultades y sobre todo con la
            capacidad de cambiar o modificar el emprendimiento para lograr el
            éxito en su máxima expresión. Tenemos objetivos claros y definidos
            en etapas con variedad de alternativas, una misión preponderante
            afines a nuestros valores y una visión distante pero motivadora.
          </p>
        </div>
        {/* <div className={styles.box}> */}
        <div className={styles.box}>   

          <h3>Impacto</h3>
          <p>
            Nuestra app educativa está cambiando vidas para un futuro mejor.
            Ayudamos a los estudiantes a adquirir conocimientos de manera
            efectiva y a desarrollar habilidades claves para el éxito en el
            futuro.
          </p>
        </div>
      </div>
      {/* <div className={styles.box2}> */}
      <div  className={styles.evolution} >
<div className={styles.boxEvolution}>  
       <h4>ÚNETE A LA EVOLUCIÓN</h4>
      <p>¿Listo para ser parte de algo grande? 
        Envianos un mensaje a través br de nuestro formulario de contacto o escríbenos directamente
         a contac@passtudy-ia.com</p>
         <div  className={styles.button}>  
          <ButtonCall/></div>
          </div>
           
      
     </div>
    </div>
    ):(
      
      <div className={styles.container}>
      <h2>POR QUE INVERTIR EN NOSOTROS?</h2>
      {/* <div className={styles.boxes}> */}
      <div  className={styles.boxes}>

        {/* <div className={styles.box}> */}
        <div  className={styles.box}>  

          <h3>Equipo</h3>
          <p>
            Jóvenes capacitados y comprometidos full time con esta Startup, con
            habilidades acorde a la magnitud del proyecto, la resiliencia
            suficiente para sortear las dificultades y sobre todo con la
            capacidad de cambiar o modificar el emprendimiento para lograr el
            éxito en su máxima expresión. Tenemos objetivos claros y definidos
            en etapas con variedad de alternativas, una misión preponderante
            afines a nuestros valores y una visión distante pero motivadora.
          </p>
        </div>
         <div className={styles.box123}>  
         <div className={styles.box}>   

          <h3>Impacto</h3>
          <p>
            Nuestra app educativa está cambiando vidas para un futuro mejor.
            Ayudamos a los estudiantes a adquirir conocimientos de manera
            efectiva y a desarrollar habilidades claves para el éxito en el
            futuro.
          </p>
        </div>    </div> 
      </div>
      {/* <div className={styles.box2}> */}
      <div  className={styles.evolution} >
<div className={styles.boxEvolution}>  
       <h4>ÚNETE A LA EVOLUCIÓN</h4>
      <p>¿Listo para ser parte de algo grande? 
        Envianos un mensaje a través br de nuestro formulario de contacto o escríbenos directamente
         a contac@passtudy-ia.com</p>
         <div  className={styles.button}>  
          <ButtonCall/></div>
          </div>
           
      
     </div>
    </div>)
} </>
  ); 
};

export default Invertir;
