const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductoSchema = new mongoose.Schema({

        nombre: {type: String, required:"El atributo nombre es obligatorio", trim:true},
        precio_venta :{type:Number, required:"El atributo precio es obligatorio", trim:true},
        precio_compra: {type: Number, required:"El atributo precio es obligatorio", trim:true},
        stock: {type:Number, required:true, default:0},
        imagen: {type: String, required:false, trim:true},
        descripcion: {type: String, required:false, trim:true},
        idCategoria: { type:Schema.Types.ObjectId, ref: 'Categoria'}
     
    },
    {
        timestamps:true,
    });
    
module.exports = mongoose.model("Producto",ProductoSchema);
