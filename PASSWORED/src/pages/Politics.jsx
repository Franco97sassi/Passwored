import React from 'react';
import styles from "./politics.module.css";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavbarPolitics from '../components/NavbarPolitics';
import FooterPolitics from '../components/FooterPolitics';

const Politics = () => {
  return (
    <> 
    <NavbarPolitics/>
    <div className={styles.container}>
      
      <h1 className={styles.politicsh1}>Política de Privacidad de PASSWORED</h1>

      <h2 className={styles.politicsh2}>1. Información General</h2>
      <p className={styles.politicsp}>
        Esta Política de Privacidad describe nuestras políticas y procedimientos sobre la recopilación, uso y divulgación de tu información cuando usas el Servicio y te informa sobre tus derechos de privacidad y cómo la ley te protege. Utilizamos tus datos personales para proporcionar y mejorar el Servicio. Al usar el Servicio, aceptas la recopilación y el uso de información de acuerdo con esta Política de Privacidad. Esta Política de Privacidad ha sido creada con la ayuda del Generador de Políticas de Privacidad.
      </p>

      <h2 className={styles.politicsh2}>2. Interpretación y Definiciones</h2>

      <h3 className={styles.politicsh3}>Interpretación</h3>
      <p className={styles.politicsp}>
        Las palabras cuya letra inicial está en mayúscula tienen significados definidos bajo las siguientes condiciones. Las siguientes definiciones tendrán el mismo significado independientemente de si aparecen en singular o en plural.
      </p>

      <h3  className={styles.politicsh3}>Definiciones</h3>
      <p className={styles.politicsp}>
        Para los propósitos de esta Política de Privacidad:
      </p>
      <ol className={styles.politicsul}>
        <li><strong>Cuenta</strong> significa una cuenta única creada para que accedas a nuestro Servicio o partes de nuestro Servicio.</li>
        <li><strong>Afiliado</strong> significa una entidad que controla, es controlada por o está bajo control común con una parte, donde “control” significa la propiedad del 50% o más de las acciones, participación accionaria u otros valores con derecho a voto para la elección de directores u otra autoridad de gestión.</li>
        <li><strong>Aplicación</strong> se refiere a PASSWORED, el programa de software proporcionado por la Compañía.</li>
        <li><strong>Compañía</strong> (referida como “la Compañía”, “Nosotros”, “Nos” o “Nuestro” en este Acuerdo) se refiere a PASSWORED.</li>
        <li><strong>País</strong> se refiere a: Argentina.</li>
        <li><strong>Dispositivo</strong> significa cualquier dispositivo que pueda acceder al Servicio, como una computadora, un teléfono móvil o una tableta digital.</li>
        <li><strong>Datos Personales</strong> es cualquier información que se relaciona con un individuo identificado o identificable.</li>
        <li><strong>Servicio</strong> se refiere a la Aplicación.</li>
        <li><strong>Proveedor de Servicios</strong> significa cualquier persona natural o jurídica que procesa los datos en nombre de la Compañía. Se refiere a empresas o individuos terceros empleados por la Compañía para facilitar el Servicio, para proporcionar el Servicio en nombre de la Compañía, para realizar servicios relacionados con el Servicio o para ayudar a la Compañía a analizar cómo se utiliza el Servicio.</li>
        <li><strong>Datos de Uso</strong> se refiere a los datos recopilados automáticamente, ya sea generados por el uso del Servicio o de la infraestructura del Servicio en sí (por ejemplo, la duración de una visita a la página).</li>
        <li><strong>Tú</strong> significa el individuo que accede o usa el Servicio, o la empresa u otra entidad legal en nombre de la cual dicho individuo está accediendo o usando el Servicio, según corresponda.</li>
      </ol>

      <h2  className={styles.politicsh2}>3. Recopilación y Uso de tus Datos Personales</h2>

      <h3  className={styles.politicsh3}>Tipos de Datos Recopilados</h3>

      <h4  className={styles.politicsh4}>Datos Personales</h4>
      <p className={styles.politicsp}>
        Mientras usas nuestro Servicio, podemos pedirte que nos proporciones cierta información de identificación personal que puede ser utilizada para contactarte o identificarte. La información de identificación personal puede incluir, pero no se limita a:
      </p>
      <ol className={styles.politicsul}>
        <li>Dirección de correo electrónico</li>
        <li>Nombre y apellido</li>
        <li>Datos de Uso</li>
      </ol>

      <h4  className={styles.politicsh4}>Datos de Uso</h4>
      <p className={styles.politicsp}>
        Los Datos de Uso se recopilan automáticamente al usar el Servicio.
      </p>
      <p className={styles.politicsp}>
        Los Datos de Uso pueden incluir información como la dirección de Protocolo de Internet de tu Dispositivo (por ejemplo, dirección IP), tipo de navegador, versión del navegador, las páginas de nuestro Servicio que visitas, la hora y fecha de tu visita, el tiempo que pasas en esas páginas, identificadores únicos de dispositivos y otros datos de diagnóstico.
      </p>
      <p className={styles.politicsp}>
        Cuando accedes al Servicio a través de un dispositivo móvil, podemos recopilar cierta información automáticamente, incluyendo, pero no limitado a, el tipo de dispositivo móvil que usas, tu ID único de dispositivo móvil, la dirección IP de tu dispositivo móvil, tu sistema operativo móvil, el tipo de navegador de Internet móvil que usas, identificadores únicos de dispositivos y otros datos de diagnóstico.
      </p>
      <p className={styles.politicsp}>
        También podemos recopilar información que tu navegador envía cada vez que visitas nuestro Servicio o cuando accedes al Servicio a través de un dispositivo móvil.
      </p>

      <h2 className={styles.politicsh2}>4. Uso de tus Datos Personales</h2>
      <p className={styles.politicsp}>
        La Compañía puede usar los Datos Personales para los siguientes propósitos:
      </p>
      <ol  className={styles.politicsul}>
        <li>Para proporcionar y mantener nuestro Servicio, incluyendo para monitorear el uso de nuestro Servicio.</li>
        <li>Para gestionar tu Cuenta: para gestionar tu registro como usuario del Servicio. Los Datos Personales que proporcionas pueden darte acceso a diferentes funcionalidades del Servicio que están disponibles para ti como usuario registrado.</li>
        <li>Para personalizar el contenido.</li>
        <li>Para formular estadísticas.</li>
        <li>Para mejorar la app.</li>
      </ol>

      <h2  className={styles.politicsh2}>5. Seguridad de los Datos</h2>
      <p className={styles.politicsp}>
        Implementamos las siguientes medidas de seguridad para proteger los datos de los usuarios:
      </p>
      <ol  className={styles.politicsul}>
        <li><strong>Cifrado de Datos:</strong> Utilizamos cifrado SSL/TLS para proteger los datos durante la transmisión.</li>
        <li><strong>Almacenamiento Seguro:</strong> Aseguramos que los datos se almacenen en servidores seguros con acceso restringido.</li>
      </ol>

      <h2  className={styles.politicsh2}>6. Protección de la Privacidad de los Niños</h2>
      <p className={styles.politicsp}>
        Para proteger la privacidad de los niños, tomamos las siguientes medidas:
      </p>
      <ol  className={styles.politicsul}>
        <li><strong>Consentimiento Parental:</strong> Obtenemos el consentimiento verificable de los padres o tutores antes de recopilar cualquier dato personal de los niños.</li>
        <li><strong>Limitación de Datos:</strong> Recopilamos solo la información necesaria y evitamos recopilar datos sensibles.</li>
      </ol>

      <h2  className={styles.politicsh2}>7. Derechos de los Usuarios</h2>
      <p className={styles.politicsp}>
        Los usuarios pueden acceder, corregir o eliminar sus datos visitando nuestra página web:  passwored.com/politicas_de_privacidad .
      </p>

      <h2  className={styles.politicsh2}>8. Notificación de Cambios</h2>
      <p className={styles.politicsp}>
        Notificamos a los usuarios sobre cambios en la política de privacidad a través de los correos electrónicos registrados. Las actualizaciones se realizan cada vez que sea necesario o, en su defecto, cada dos meses.
      </p>

      <h2  className={styles.politicsh2}>9. Contacto</h2>
      <p className={styles.politicsp}>
        Si tienes preguntas o preocupaciones sobre nuestra política de privacidad, puedes contactarnos a través de  contac@passwored.com .
      </p>
 
    </div>          <FooterPolitics/>

      </>
  );
};

export default Politics;
