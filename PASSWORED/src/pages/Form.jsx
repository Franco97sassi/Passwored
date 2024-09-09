 

import styles from "./form.module.css";
import SendButton from "../components/SendButton";
import { useState } from "react";
import { MenuItem, Select, useMediaQuery } from "@mui/material";
import { styled } from '@mui/material/styles';

const Form = () => {
  const matches = useMediaQuery('(max-width:600px)')
  const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    borderRadius: '0px',
    '&.Mui-selected': {
    backgroundColor: '#8e2de2', // Color violeta para la opción seleccionada
    color: '#fff', // Color del texto blanco para la opción seleccionada
    '&:hover': {
      backgroundColor: '#8e2de2', // Aseguramos que el color sea el mismo en hover
      color: '#fff', // Aseguramos que el texto siga siendo blanco en hover
    },
    
  },
  
    '&:hover': {
      backgroundColor: '#8e2de2', // Color violeta al pasar el ratón
      color: '#fff', // Color del texto blanco
    },
   
  }));
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    category: "default",
  });
  
  const [isSelectOpen, setIsSelectOpen] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSelectFocus = () => {
    setIsSelectOpen(true);
  };

  const handleSelectBlur = () => {
    setIsSelectOpen(false);
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
<>  
{ !matches?(    
<div className={`${styles.container} ${isSelectOpen ? styles.containerOpen : ""}`}>

      <h2>
        Completá el formulario con tu consulta y te responderemos a la brevedad
      </h2>
      <form  onSubmit={handleSubmit} 
className={`${styles.box} ${isSelectOpen ? styles.containerOpen  : ""}`}>
        <div className={styles.inputContainer}>
          {" "}
           <h4>Nombre</h4>  
           <input type="text" name="name" placeholder="Juan" value={formData.name} onChange={handleChange} />
           </div>
        
        <div className={styles.inputContainer}>
          {" "}
           <h4>Apellido</h4>  
           <input type="text" name="lastName" placeholder="Perez" value={formData.lastName} onChange={handleChange} />
           </div>
        
        <div className={styles.inputContainer}>
          {" "}
           <h4>Dropdown Title</h4>  
               {/* <select name="category" value={formData.category} onChange={handleChange} onFocus={handleSelectFocus}
            onBlur={handleSelectBlur}>
    <option value="default" >Quiero probar la app</option>
      <option value="investor">Soy inversionista</option>
     <option value="project">Quiero formar parte de un proyecto</option>
   </select> */}
   <Select
   onFocus={handleSelectFocus}
            onBlur={handleSelectBlur}
        name="category"
        value={formData.category}
        onChange={handleChange}
        label="Categoria"
        MenuProps={{
          PaperProps: {
            style: {
              borderRadius: '10px',
             marginTop: '0px', // Ajusta el margen superior
        marginBottom: '0px', // Ajusta el margen inferior
        padding: '0px', // Ajusta el padding
       
            },
            
          },
         
        }}
        sx={{
          borderRadius: '10px',
          width: '102%', height:"60%",
          backgroundColor: "white",
          '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',  
             
          },
           
        '& .MuiSelect-select': {
          fontFamily: 'Noto Sans, sans-serif',
          fontWeight: 400,
        },
        '& .MuiMenuItem-root': {
          fontFamily: 'Noto Sans, sans-serif',
          fontWeight: 400,
        },
        '& .MuiMenuItem-root.Mui-selected': {
          backgroundColor: '#8e2de2',
          color: '#fff',          fontWeight: 400,

        },
        '& .MuiMenuItem-root:hover': {
          backgroundColor: '#8e2de2',
          color: '#fff',          fontWeight: 400,

        },
        }}
      >
        <CustomMenuItem value="default">Quiero probar la app</CustomMenuItem>
        <CustomMenuItem value="investor">Soy inversionista</CustomMenuItem>
        <CustomMenuItem value="project">Quiero formar parte de un proyecto</CustomMenuItem>
      </Select>

         </div>
        
        <div    
         className={`${styles.inputContainer} ${isSelectOpen ? styles.inputMobileMove : ""}`}>
          {" "}
           <h4>Email</h4>  
           <input type="email" name="email" placeholder="jperez@gmail.com" value={formData.email} onChange={handleChange} />
           </div>
        
            <div className={`${styles.inputContainer2} ${isSelectOpen ? styles.moveDown : ""}`}>    
           {" "}
           {/* <div className={styles.inputContainer2}> */}
           {/* <div className={styles.inputContainer}>   */}

           <h4>Deja tu duda o inquietud</h4>  
           <input type="text"
  className={isSelectOpen ? styles.moveDown : ""}
  name="message"   value={formData.message} onChange={handleChange} />
           </div> 
           <div            className={`${styles.inputContainer} ${isSelectOpen ? styles.moveDownExtra : ""}`}>

        {/* <div className={`${styles.inputContainer} ${styles.inputMobile}`}> */}
          {" "}
           <h4>Teléfono</h4>  
           <input type="text" name="phone" placeholder="123456789" value={formData.phone} onChange={handleChange} />
           </div>
            
         
        {/* <div   className={styles.inputContainer3}>
          {" "}
           <h4>Nombre2</h4>  
          <input type="text" />
        </div> */}
        <div
        className={`${styles.inputContainerb} ${isSelectOpen ? styles.moveDown2 : ""}`}>
            <SendButton  onClick={handleSubmit}/>
        </div> 
        {/* <div   className={styles.inputContainer3}>
          {" "}
           <h4>Nombre2</h4>  
          <input type="text" />  
        </div>*/}
      </form>
    </div> ):(
      <> 
       <div className={styles.container}>
      <h2>
        Completá el formulario con tu consulta y te responderemos a la brevedad
      </h2>
      <form className={styles.box}onSubmit={handleSubmit}>

        <div className={styles.inputContainer}>
          {" "}
           <h4>Nombre</h4>  
           <input type="text" name="name" placeholder="Juan" value={formData.name} onChange={handleChange} />
           </div>
        
        <div className={styles.inputContainer}>
          {" "}
           <h4>Apellido</h4>  
           <input type="text" name="lastName" placeholder="Perez" value={formData.lastName} onChange={handleChange} />
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
           <h4>Teléfono</h4>  
           <input type="text" name="phone" placeholder="123456789" value={formData.phone} onChange={handleChange} />
           </div>
        
        <div  className={styles.inputContainer3}>
          {" "}
           <h4>Nombre2</h4>  
          <input type="text" />
        </div>
        
        
           <div className={styles.inputContainer}>
          {" "}
           <h4>Email</h4>  
           <input type="email" name="email" placeholder="jperez@gmail.com" value={formData.email} onChange={handleChange} />
           </div>
        <div className={styles.inputContainer2}>
        {" "}
           <h4>Deja tu duda o inquietud</h4>  
           <input type="text" name="message"  value={formData.message} onChange={handleChange} />
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
      </>
    )
      
  } </> 
  );
};

 export default Form;

 