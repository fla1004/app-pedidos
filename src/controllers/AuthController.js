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
        //verifica el estado del usuario.

        if(user.estado == true)
        {
            //Compara las contraseñas
        
            const com_pswd = await bcrypt.compare(req.body.password, user.password)
            if(com_pswd){
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
                        nombre: user.nombre,
                        apellidos: user.apellidos,
                        correo: user.correo,
                        estado: user.estado,
                        rol: user.rol,
                        fecha: new Date(),
                    }
                });
            }
            else{
                res.json({mensaje:"Contraseña incorrecta"});
            }
        }
        else
        {
           res.json({mensaje: "Usuario deshabilitado"});
        }
        
    }
}
module.exports = {
    login,
}