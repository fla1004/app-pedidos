const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema({
    nombre: {type: String, required:true, trim:true},
    apellidos: {type: String, required:true},
    correo: {type: String, required:"Correo obliatorio", trim:true},
    password: {type: String, required:"Password obligatorio"},
    rol: {type: String, required:true},
    estado: {type:Boolean, required:true, default:true}
},
{
    timestamps:true,
});

module.exports = mongoose.model("Usuario",UsuarioSchema);