// IMPORTS 

    const express = require("express");
    const morgan = require("morgan");


//IMPORTANDO MODULO RUTAS DE ROUTES>INDEX.JS
    const routes = require("./routes/index");

// CONFIGS 
    const app = express();
    app.use(morgan("dev"));


// HABILITAR RUTA
    routes.rutas(app);

// LEVANTAR SERVIDOR
    app.listen(3000,()=>{
        console.log("Servidor levantado");
    });