 

import styles from "./form.module.css";
import SendButton from "../components/SendButton";
import { useState } from "react";
const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    category: "default",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Correo enviado con éxito");
      } else {
        alert("Hubo un problema al enviar el correo");
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h2>
        Completá el formulario con tu consulta y te responderemos a la brevedad
      </h2>
      <form className={styles.box}onSubmit={handleSubmit}>

        <div className={styles.inputContainer}>
          {" "}
           <h4>Nombre</h4>  
           <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} />
           </div>
        
        <div className={styles.inputContainer}>
          {" "}
           <h4>Apellido</h4>  
           <input type="text" name="lastName" placeholder="Apellido" value={formData.lastName} onChange={handleChange} />
           </div>
        
        <div className={styles.inputContainer}>
          {" "}
           <h4>Dropdown Title</h4>  
               <select name="category" value={formData.category} onChange={handleChange}>
    <option value="default" >Quiero probar la app</option>
      <option value="investor">Soy inversionista</option>
     <option value="project">Quiero formar parte de un proyecto</option>
   </select>
         </div>
        
        <div className={styles.inputContainer}>
          {" "}
           <h4>Email</h4>  
           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
           </div>
        
        <div  className={styles.inputContainer3}>
          {" "}
           <h4>Nombre2</h4>  
          <input type="text" />
        </div>
        
        <div className={styles.inputContainer}>
          {" "}
           <h4>Telefono</h4>  
           <input type="text" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} />
           </div>
        
        <div className={styles.inputContainer2}>
        {" "}
           <h4>Deja tu email o inquietud</h4>  
           <input type="text" name="message" placeholder="Tu mensaje" value={formData.message} onChange={handleChange} />
           </div> 
        <div   className={styles.inputContainer3}>
          {" "}
           <h4>Nombre2</h4>  
          <input type="text" />
        </div>
       <div className={styles.inputContainerb}>
           <SendButton  onClick={handleSubmit}/>
        </div> 
        <div   className={styles.inputContainer3}>
          {" "}
           <h4>Nombre2</h4>  
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

 export default Form;

 