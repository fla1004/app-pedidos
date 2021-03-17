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

    app.set("port", process.env.PORT || config.port); //guadrar variables globales 

// CONEXION A LA BASE DE DATOS 
    mongoose.connect('mongodb://localhost:27017/app-pedidos', {
        useNewUrlParser:true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then((db)=>{
        console.log("conectado...");
    }).catch((error)=>
    {
        console.log("Error",error);
    })

//HABILITANDO CORS PARA PETICIONES DEL LADO DEL CLIENTE
    app.use(function(req, res, next){
        //Sitio web al que se desea permitir que se conecte 
        res.setHeader("Access-Control-Allow-Origin", "*");
        
        //habilitar los encabezados que desea permitir
        res.setHeader("Access-Control-Allow-Headers",
                      "content-type, X-Requested-With, Authorization"
                    );
        res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT,DELETE");
        next();
    });
    
// HABILITAR RUTA
    routes.rutas(app);

// LEVANTAR SERVIDOR
    app.listen(app.get("port"), ()=>{
        console.log(`Servidor levantado en 127.0.0.1:${app.get("port")}`);
    });