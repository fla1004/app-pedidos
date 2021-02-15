const Cliente = require("./../models/Cliente");

const guardar = function(req, res ){

    let data = req.body;

    try{
        const clie = new Cliente();

        clie.nombre = data.nombre;
        clie.apellidos = data.apellidos;
        clie.ci = data.ci;
        clie.email = data.email;
        clie.telefono = data.telefono;

       clie.save((err, clie_save)=>{
            if(err){
                res.json({mensaje: 'Error en el servidor'});
            }
            else{
                if(clie_save){
                    res.json({Clientes: clie_save});
                }
                else{
                    res.json({mensaje: 'No se registro al usuario'});
                }
            }
        })
    }catch(err){
        res.json('Error',err);
    }
}


const listar = async function(req,res)
{
    try
    {
        const datos = await Cliente.find();
        res.json(datos);
    }
    catch(error)
    {
        res.json("ERROR", error);
    }
}
const listar_id = function(req,res)
{
    let data = req. body;
    let id = req.params.id;

    try{
        Cliente.findOne({_id: id},(err, cli_lista)=>{
            if(err){
                res.json({mensaje:'Error en el servidor'});
            }
            else
            {
                if(cli_lista)
                {
                    res.json({Clientes: cli_lista});
                }
                else
                {
                    res.json({mensaje: 'No se encontro al cliente'});
                }
            }
        })
    }
    catch(err)
    {
        res.json('Error',err);
    }
    
}
const modificar =  function(req,res){
    let id = req.params.id;
    let data = req.body;
    
    try{
        Cliente.findByIdAndUpdate({_id: id}, {
            nombre : data.nombre,
            apellidos : data.apellidos,
            ci : data.ci,
            email : data.email,
            telefono : data.telefono },
            (err, clie_mod) => {
                if(err){
                    res.json({mensaje: 'Error en el servidor'});
                }
                else{
                    if(clie_mod){
                        res.json({Cliente_mod: clie_mod});
                    }
                    else{
                        res.json({mensaje: 'No se modifico al cliente'});
                    }
                }
            }
        )
    }
    catch(err)
    {
        res.json('Error',err);
    }
}
const eliminar = function(req, res){

    let id = req.params.id;

    try{
        Cliente.findOneAndRemove({_id:id}, (err, clie_eliminado)=>{
            if(err){
                res.json({mensaje: 'Error en el servidor'});
            }
            else{
                if(clie_eliminado){
                    res.json({Cliente_elimnado: clie_eliminado});
                }
                else{
                    res.json({mensaje: 'No se modifico al cliente'});
                }
            }
        })
    }
    catch(err)
    {
        res.json('Error',err);
    }
}


module.exports = {
    guardar,
    listar,
    listar_id,
    modificar,
    eliminar
}