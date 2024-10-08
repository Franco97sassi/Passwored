// const express = require("express");
// const nodemailer = require("nodemailer");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Ruta para mostrar "Hola Mundo" en la ruta raíz (/)
// app.get("/", (req, res) => {
//   res.send("Hola Mundo");
// });

// app.post("/send-email", (req, res) => {
//   const { name, lastName, email, phone, message, category } = req.body;

//   // Configura tu transporte de correo
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "franco.sassi97@gmail.com", // Cambia esto por tu correo de Gmail
//       pass: "yybx suzo zldk zfjv", // Cambia esto por tu contraseña de Gmail
//     },
//     tls: {
//         rejectUnauthorized: false, // Desactiva la verificación de certificado
//       },
//   });
//   transporter.verify((error, success) => {
//     if (error) {
//       console.error("Error en la configuración del transporte:", error);
//     } else {
//       console.log("Configuración del transporte es correcta");
//     }
//   });
//   const mailOptions = {
//     from: email,
//     to: "franco.sassi97@gmail.com", // El correo de destino
//     subject: "Nueva consulta del formulario",
//     text: `Nombre: ${name}
//           Apellido ${lastName}
//            Email: ${email}
//            Teléfono: ${phone}
//            Categoría: ${category}
//            Mensaje: ${message}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }
//     res.send("Correo enviado con éxito");
//   });
// });
 
// // Iniciar el servidor
// app.listen(3001, () => {
//   console.log("Servidor escuchando en el puerto 3001");
// });










const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Ruta para mostrar "Hola Mundo" en la ruta raíz (/)
app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

app.post("/send-email", (req, res) => {
  const { name, lastName, email, phone, message, category } = req.body;

  // Configura tu transporte de correo
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Usa la variable de entorno
      pass: process.env.EMAIL_PASS,   // Usa la variable de entorno
    },
    tls: {
        rejectUnauthorized: false, // Desactiva la verificación de certificado
      },
  });
  transporter.verify((error, success) => {
    if (error) {
      console.error("Error en la configuración del transporte:", error);
    } else {
      console.log("Configuración del transporte es correcta");
    }
  });
  const mailOptions = {
    from: email,
    to: "franco.sassi97@gmail.com", // El correo de destino
    subject: "Nueva consulta del formulario",
    text: `Nombre: ${name}
          Apellido ${lastName}
           Email: ${email}
           Teléfono: ${phone}
           Categoría: ${category}
           Mensaje: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send("Correo enviado con éxito");
  });
});
 
// Iniciar el servidor
const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log("Servidor escuchando en el puerto 3001");
});