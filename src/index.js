// IMPORTS 
    const express = require("express");
    const morgan = require("morgan");
    const mongoose = require("mongoose");

//IMPORTANDO MODULO RUTAS DE ROUTES>INDEX.JS
    const routes = require("./routes/index");
    const config = require("./config/config");

// CONFIGS 
    const app = express();
    app.use(morgan("dev"));

    app.use(express.json());
    app.use(express.urlencoded({extended:true}));

    app.set("port", process.env.PORT || config.port); //guarar variables lobales 

// CONEXION A LA BASE DE DATOS 
    mongoose.connect('mongodb://localhost:27017/app-pedidos', {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }).then((db)=>{
        console.log("conectado...");
    }).catch((error)=>
    {
        console.log("Error",error);
    })
    
// HABILITAR RUTA
    routes.rutas(app);

// LEVANTAR SERVIDOR
    app.listen(app.get("port"), ()=>{
        console.log(`Servidor levantado en 127.0.0.1:${app.get("port")}`);
    });