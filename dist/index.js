"use strict";

// IMPORTS 
const express = require("express");

const morgan = require("morgan"); //IMPORTANDO MODULO RUTAS DE ROUTES>INDEX.JS


const routes = require("./routes/index");

const config = require("./config/config"); // CONFIGS 


const app = express();
app.use(morgan("dev"));
app.set("port", process.env.PORT || config.port); //guarar variables lobales 
// HABILITAR RUTA

routes.rutas(app); // LEVANTAR SERVIDOR

app.listen(app.get("port"), () => {
  console.log(`Servidor levantado en 127.0.0.1:${app.get("port")}`);
});