 import Inicio from "./Inicio";
import Info from "./Info";
import Screens from "./Screens";
import Nacimiento from "./Nacimiento";
import Unete from "./Unete";
import Invertir from "./Invertir";
import Form from "./Form";
import Contact from "./Contact";
 import Rocket from "./Rocket";
 

const Landing = () => {
  return (
    <div>
      <div id="inicio">
        <Inicio />
      </div>
      <Info />
      <Screens />
      <Nacimiento />

      <div id="unete">
        <Unete />
      </div>
      <Invertir />
      <Form />
      <Rocket />

      <div id="contacto">
       <Contact /> 
      </div>
    </div>
  );
};

export default Landing;
