const Usuario = require("./../models/Usuario");

//Importamos bcrypt para cifrar las contraseñas
const bcrypt = require("bcrypt");


const guardar = async function(req,res)
{
        var BCRYPT_SALT_ROUNDS = 12;
            bcrypt
            .hash(req.body.password, BCRYPT_SALT_ROUNDS)
            .then( function(hashedPassword){

                req.body.password = hashedPassword;
              
                    const user = new Usuario(req.body);

                    user
                    .save()
                    .then((dato) => {
                        res.json({mensaje: "Usuario registrado", dato});
                    })
                    .catch((error)=>{
                        res.json({mensaje: "Error al registrar el usuario",error});
                    });

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
        const datos = await Usuario.find();

        res.json(datos);
    }
    catch(error)
    {
        res.json("ERROR", error);
    }
}
const mostrar_id = function(req, res){
    let id = req.params.id;

    try{
        Usuario.findById({_id:id},(err, user_seleccionado)=>{
            if(err)
            { 
                res.json({mensaje: 'Error en el servidor'});
            }
            else{
                if(user_seleccionado){
                    res.json({user: user_seleccionado});
                }
                else{
                    res.json({mensaje: 'No se encontro la categoria'});
                }
            }
        })
    }
    catch(error){
        res.json("ERROR", error)
    }
}

const modificar = function(req, res) {
    
    let id = req.params.id;
    let data = req.body;

    if(data.password)
    {
        var BCRYPT_SALT_ROUNDS = 12;
        
        bcrypt
        .hash(req.body.password, BCRYPT_SALT_ROUNDS)
        .then( function(hashedPassword){
            
            Usuario.findByIdAndUpdate(id,
              { 
                nombre: data.nombre, 
                apellidos: data.apellidos, 
                correo: data.correo,
                password:  hashedPassword,
                estado: data.estado,
                rol: data.rol
              },
              (err, user_mod) => {
                if(err){
                    res.json({mensaje: "Error en el servidor"});
                }
                else{
                  if(user_mod){
                    res.json({Usuario: user_mod});
                  }
                  else{
                    res.json({mensaje: "El usuario no se modifico"});
                  }
                }
                  
              }
              );
        }).catch(error =>
        {
            console.log(error);
            res.json({mensaje: "Error al cifrar la contraseña"});
        }); 
    }
    else{
        Usuario.findByIdAndUpdate(id,
            { 
              nombre: data.nombre, 
              apellidos: data.apellidos, 
              correo: data.correo,
              password: hashedPassword,
              estado: data.estado,
              rol: data.rol
            },
            (err, user_mod) => {
              if(err){
                  res.json({mensaje: "Error en el servidor"});
              }
              else{
                if(user_mod){
                  res.json({Usuario: user_mod});
                }
                else{
                  res.json({mensaje: "El usuario no se modifico"});
                }
              }
                
            }
            );
    }
}

const eliminar = function(req,res){
    let data = req.body;
    let id = req.params.id;

    try{
        Usuario.findOneAndRemove({_id:id},(err, user_eliminado)=>{
            if(err){
                res.json({mensaje: "Error en el servidor"});
            }
            else{
                if(user_eliminado)
                {
                    res.json({Categoria: user_eliminado});
                }
                else{
                    res.json({mensaje: "No se pudo eliminar la categoria"});
                }
            }
        } 
    )}
    catch{
        res.json("Error", error);
    }
}


module.exports = {
    listar,
    mostrar_id,
    guardar,
    eliminar,
    modificar
}