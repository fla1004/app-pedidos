const cliente = require("./../models/Cliente")

const listar = async function(req,res)
{
    var datos = await cliente.find();
    res.json(datos);
}
const mostrar= function(req,res)
{
    res.json({mensaje: "mostrarcliente"});
}
const guardar = function(req,res)
{
    const clie = new cliente({
        nombre: 'Flavia', 
        apellidos:'Claros',
    });
    clie.save();
    res.json({mensaje: "guardar cliente"});
}
const modificar =    function(req,res){
    res.json({mensaje: "cliente modificado"});
}
const eliminar = function(req,res){
    res.json({mensaje: "cliente eliminado"});
}
module.exports = {
    listar,
    mostrar,
    guardar,
    modificar,
    eliminar
}