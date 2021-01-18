const Cliente = require("./../models/Cliente");

const listar = async function(req,res)
{
    try
    {
        var datos = await Cliente.find();
        res.json(datos);
    }
    catch(error)
    {
        res.json("ERROR", error);
    }
}

const mostrar= async function(req,res)
{
    let id = req.params.id;
    try{
        var clie = await Cliente.findById(id);
        res.json(clie);
    }
    catch(error)
    {
        res.json({mensaje: "ERROR"});
    }
}
    
const guardar =  function(req,res)
{    
    const clie = new Cliente(req.body);
    clie.save();
    res.json({mensaje: "cliente guardado",clie});
    
}
const modificar =  async function(req,res){
    let id = req.params.id;
    try{
        const clie = await Cliente.findById(id);
        const clie_mod = await clie.update(req.body);
        res.json({mensaje: "Cliente modificado", clie_mod});
    }
    catch(error)
    {
        res.json("ERROR",error);
    }
}
const eliminar = async function(req,res){
    let id = req.params.id;
    try{
        const clie = await Cliente.findById(id);
        const clie_el = await clie.delete(req.body);
        res.json({mensaje: "Cliente eliminado", clie_el});
    }
    catch(error)
    {
        res.json("ERROR",error);
    }
}
module.exports = {
    listar,
    mostrar,
    guardar,
    modificar,
    eliminar
}