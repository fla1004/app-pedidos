const mongoose = require("mongoose");

const ClienteSchema = mongoose.Schema({
    nombre: {type: String, required:false, trim:true},
    apellidos: {type: String, required:true, trim:true},
    ci: {type: String, required:true, trim:true},
    email: {type: String, required:false, trim:true},
    telefono: {type: String, required:false, trim:true},
},
{
    timestamps:true,
});

module.exports = mongoose.model("Cliente",ClienteSchema);