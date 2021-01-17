const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({

        nombre: {type: String, required:"El atributo nombre es obligatorio", trim:true},
        precio: {type: Number, required:"El atributo precio es obligatorio", trim:true},
        stock: {type:Number, required:true, default:0},
        imagen: {type: String, required:false, trim:true},
        descripcion: {type: String, required:false, trim:true},
    });
    
module.exports = mongoose.model("Producto",ProductoSchema);
