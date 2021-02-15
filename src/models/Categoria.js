const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
    titulo : {type: String, required:"El atributo titulo es obligatorio", trim:true},
    descripcion : {type: String, required:false, trim:true},
});

module.exports = mongoose.model("Categoria",CategoriaSchema);