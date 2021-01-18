const Usuario = require("./../models/Usuario");

//Importamos bcrypt para cifrar las contraseñas
const bcrypt = require("bcrypt");


const guardar =  async function(req,res)
{    
    var BCRYPT_SALT_ROUNDS = 12;
    bcrypt
    .hash(req.body.password, BCRYPT_SALT_ROUNDS)
    .then(function(hashedPassword){
        console.log(hashedPassword);
        req.body.password = hashedPassword; 
        
        const user = new Usuario(req.body);
        user.save().then(dato => {
            res.json({mensaje: "Usuario registrado",user});
        }).catch((error)=>{
            res.json({mensaje: "Error al registrar el usuario",error});
        });

        res.json({mensaje: "Usuario guardado",user});
    }).catch(error =>
        {
            console.log(error);
            res.json({mensaje: "Error al cifrar la contraseña"});
        });   
}





const listar = async function(req,res)
{
    try
    {
        var datos = await Usuario.find();
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
        var user = await Usuario.findById(id);
        res.json(user);
    }
    catch(error)
    {
        res.json({mensaje: "ERROR"});
    }
}
    

const modificar =  async function(req,res){
    let id = req.params.id;
    try{
        const user = await Usuario.findById(id);
        const user_mod = await user.update(req.body);
        res.json({mensaje: "Usuario modificado", user_mod});
    }
    catch(error)
    {
        res.json("ERROR",error);
    }
}
const eliminar = async function(req,res){
    let id = req.params.id;
    try{
        const user = await Usuario.findById(id);
        const user_el = await user.delete(req.body);
        res.json({mensaje: "Usuario eliminado", user_el});
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