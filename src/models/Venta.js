var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var VentaSchema = Schema({
    idcliente: {type: Schema.ObjectId, ref: 'Cliente'},
    iduser: {type: Schema.ObjectId, ref: 'Usuario'},
    fecha: {type: Date, default: Date.now},

});

module.exports = mongoose.model('Venta',VentaSchema);