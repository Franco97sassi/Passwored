require("dotenv").config();
const express = require("express");
const cors = require("cors");

const emailRoutes = require("./src/routes/mailConfig");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/", emailRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
