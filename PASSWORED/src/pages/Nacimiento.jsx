import styles from "./nacimiento.module.css";
import child2 from "../assets/child2.png";

const Nacimiento = () => {
  return (
    <div className={styles.container}>
      <div className={styles.seccion1}>
      <div className={styles.content2} >   
          <h2>¿Cómo nació PASSWORED?</h2>
        <p  >
          Un compañero tenía un hijo con retraso madurativo; una noche fui a
          visitarlo y observe que el pequeño de 2 años estaba jugando con el
          celular, algo que no me pareció correcto, por lo que pregunte: «¿Por
          qué le das el telefono a tu hijo si para muchos padres es
          perjudicial?» A lo que el me respondió: «Con el celular aprende cosas,
          como escribir su nombre».Yo todo incrédulo ¿Escribir su nombre con 2
          años y retraso madurativo? En ese momento él le pregunto: «¿Como te
          llamas?» El niño escribió en la pantalla del celular «GABRIEL». Luego
          le pregunto: «¿Cual es tu número de documento?» sin dudarlo escribió
          los ocho números.Wow… y no sólo eso!!!, luego le pregunto: «¿Si te
          pierdes como llamas a papá?», a lo que nuevamente escribió los 10
          dígitos sin error alguno. Increible!!! Cómo lo haces? «Muy fácil» me
          respondió «a mi hijo le encanta jugar con el celular, sólo bloqueo el
          teléfono y coloco de contraseña lo que quiero que aprenda, si no lo
          aprende no puede ingresar a su app favorita».Con esto en mente
          llegamos a diseñar y crear una App que convierte el tiempo de ocio en
          momentos de aprendizaje.  <br/> <br/>Los niños no aprenden no porque no sean
          capaces, sino porque no reciben el estimulo suficiente para hacerlo.
        </p></div>
        <div className={styles.imgContainer}>  
        <img src={child2} alt="child2" className={styles.responsiveImage} /> 
        </div>
         <div className={styles.content} >   
          <h2>¿Cómo nació PASSWORED?</h2>
        <p  >
          Un compañero tenía un hijo con retraso madurativo; una noche fui a
          visitarlo y observe que el pequeño de 2 años estaba jugando con el
          celular, algo que no me pareció correcto, por lo que pregunte: «¿Por
          qué le das el telefono a tu hijo si para muchos padres es
          perjudicial?» A lo que el me respondió: «Con el celular aprende cosas,
          como escribir su nombre».Yo todo incrédulo ¿Escribir su nombre con 2
          años y retraso madurativo? En ese momento él le pregunto: «¿Como te
          llamas?» El niño escribió en la pantalla del celular «GABRIEL». Luego
          le pregunto: «¿Cual es tu número de documento?» sin dudarlo escribió
          los ocho números.Wow… y no sólo eso!!!, luego le pregunto: «¿Si te
          pierdes como llamas a papá?», a lo que nuevamente escribió los 10
          dígitos sin error alguno. Increible!!! Cómo lo haces? «Muy fácil» me
          respondió «a mi hijo le encanta jugar con el celular, sólo bloqueo el
          teléfono y coloco de contraseña lo que quiero que aprenda, si no lo
          aprende no puede ingresar a su app favorita».Con esto en mente
          llegamos a diseñar y crear una App que convierte el tiempo de ocio en
          momentos de aprendizaje.  <br/> <br/>Los niños no aprenden no porque no sean
          capaces, sino porque no reciben el estimulo suficiente para hacerlo.
        </p></div>
      </div>
      <div className={styles.seccion2}>
      <h2>¿Sabías qué?</h2>
      <p>El 80% de los niños entre 2 y 10 años utiliza dispositivos móviles a diario, y que el 60% de ellos lo hace durante más de dos horas?
Estos datos, extraídos de un estudio realizado por la Universidad de Harvard, revelan que los niños están expuestos a una gran cantidad de estímulos digitales que pueden afectar a su desarrollo cognitivo, emocional y social. Además, muchos de éstos estímulos no son de calidad ni tienen un propósito educativo, sino que sólo buscan entretener o distraer a los niños.
¿Qué pasaría si pudiéramos convertir el tiempo de pantalla en tiempo de aprendizaje?, ¿Y si pudiéramos aprovechar el interés de los niños por los dispositivos móviles para enseñarles cosas nuevas y útiles, como matemáticas, comprensión de texto o idiomas? Esa es la idea detrás de PASSWORED.</p>
      </div>
    </div>
  );
};

export default Nacimiento;
