const Usuario = require("./../models/Usuario");
const config = require("./../config/config")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



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
        //Compara las contraseñas
        const estado = await bcrypt.compare(req.body.password, user.password)
        if(estado){
            //Generar token
            const payload = {
                correo: user.correo,
                id: user._id,
                time: new Date()
            }

            var token = jwt.sign(payload,config.JWT_SECRET, {
                expiresIn: config.JWT_EXPIRE,
            });

            res.json({
                access_token:token,
                Usuario: {
                    _id: user._id,
                    usuario: user.usuario,
                    correo: user.correo,
                    fecha: new Date(),
                }
            });
        }
        else{
            res.json({mensaje:"Contraseña incorrecta"});
        }
        
    }
}
module.exports = {
    login,
}