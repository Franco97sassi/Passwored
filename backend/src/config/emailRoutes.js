const express = require("express");
const transporter = require("../config/mailConfig");
const router = express.Router();

 const validateEmailInput = (req, res, next) => {
  const { name, lastName, email, phone, message, category } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }
  next();
};

router.post("/send-email", validateEmailInput, (req, res) => {
  const { name, lastName, email, phone, message, category } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "Nueva consulta del formulario",
    text: `Nombre: ${name} ${lastName}
           Email: ${email}
           Teléfono: ${phone}
           Categoría: ${category}
           Mensaje: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar correo:", error);
      return res.status(500).json({ error: "Error al enviar el correo" });
    }
    res.json({ message: "Correo enviado con éxito" });
  });
});

module.exports = router;
