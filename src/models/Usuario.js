const mongoose = require("mongoose");

const UsuarioSchema = mongoose.Schema({
    usuario: {type: String, required:false, trim:true},
    correo: {type: String, required:"Correo obliatorio", trim:true},
    password: {type: String, required:"Password obligatorio"},
    estado: {type:Boolean, required:true, default:true},
},
{
    timestamps:true,
});

module.exports = mongoose.model("Usuario",UsuarioSchema);