import React from 'react';
import Inicio from './Inicio';
import Info from './Info';
import Screens from './Screens';
import Nacimiento from './Nacimiento';
import Unete from './Unete';
import Invertir from './Invertir';
import Form from './Form';
import Contact from './Contact';
import Navbar from '../components/Navbar';
import Rocket from './Rocket';
import Fondo from './fondo';
import Politics from './Politics';

const Landing = () => {
  return (
    <>   
            
       <div id="inicio">
        <Inicio />
      </div>    
          <Info/>   
       <Screens />  
          <Nacimiento />    
       
           <div id="unete">
        <Unete />
      </div>   
      {/* <Fondo/> */}
         <Invertir />    
           <Form />       
              <Rocket />   
              <Politics/>
          <div id="contacto">
        <Contact />   
      </div>          
    </>
  );
};

export default Landing;
