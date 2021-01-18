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

module.exports = {
    listar,
    guardar
}