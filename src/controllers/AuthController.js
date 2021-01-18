const Usuario = require("./../models/Usuario");

const login = async function login(req,res)
{
    //1. Verificar si el email existe en la BDD
    const user = await Usuario.findOne({correo: req.body.correo});

    if(!user) //si no existe
    {
        res.json({mensaje: "No existe el usuario"});
    }
    else
    {
        res.json({mensaje: `Bienvenido: ${req.body.correo}`});
    }
}
module.exports = {
    login,
}