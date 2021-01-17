const mongoose = require("mongoose");

const ClienteSchema = mongoose.Schema({
    nombre: {type: String, required:true, trim:true},
    apellidos: {type: String, required:true, trim:true},
    empresa: {type: String, required:false, trim:true},
    email: {type: String, required:false, trim:true},
    telefono: {type: String, required:false, trim:true},
});

module.exports = mongoose.model("Cliente",ClienteSchema);