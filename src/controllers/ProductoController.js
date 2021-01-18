const Producto = require("./../models/Producto");

const listar = async function(req,res)
{
    try
    {
        var datos = await Producto.find();
        res.json(datos);
    }
    catch(error)
    {
        res.json("ERROR", error);
    }
}
const mostrar = async function(req,res)
{
    let id = req.params.id;

    try
    {
        var busqueda = await Producto.findById(id);
        res.json(busqueda);
    }
    catch(error)
    {
        res.json("ERROR", error);
    }
}
const guardar = function(req,res)
{
   try{
       const prod = new Producto(req.body);
       prod.save(); 
       res.json({mensaje: "Producto almacenado"});
   }
   catch(error)
   {
        res.json("ERROR", error);
   }   
}
const modificar =  async function(req,res){
    let id = req.params.id;
    try{
        const prod = await Producto.findById(id);
        const prod_mod = await prod.update(req.body);
        res.json({mensaje: "Producto modificado", prod_mod});
    }
    catch(error)
    {
        res.json("ERROR",error);
    }
}
const eliminar = async function(req,res){
    let id = req.params.id;
    try{
        const prod = await Producto.findById(id);
        const prod_el = await prod.delete(req.body);
        res.json({mensaje: "Producto eliminado", prod_el});
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