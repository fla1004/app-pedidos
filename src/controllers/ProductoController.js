const Producto = require("./../models/Producto");
const fs = require('fs'); //filesystem
const path = require('path');

const guardar = function(req,res)
{
   try{
       
        var data = req.body;

        if(req.files){
            
            var imagen_path = req.files.imagen.path;
            
            var name = imagen_path.split('\\');
            var imagen_name = name [3];

            const prod = new Producto();
 
            prod.nombre = data.nombre;
            prod.precio_compra = data.precio_compra;
            prod.precio_venta = data.precio_venta;
            prod.stock = data.stock;
            prod.imagen = imagen_name;
            prod.descripcion = data.descripcion;
            prod.idCategoria = data.idCategoria;

            prod.save((err, prod_save)=>{
                if(err){
                    res.status(500).send({mensaje: "Error en el servidor"});
                }
                else{
                    if(prod_save)
                    {
                        res.json({mensaje: prod_save});
                    }
                    else
                    {
                        res.status(400).send({mensaje: 'No se registro el producto'});
                
                    }
                  }
            })
        }
        else{
            const prod = new Producto();
 
            prod.nombre = data.nombre;
            prod.precio_compra = data.precio_compra;
            prod.precio_venta = data.precio_venta;
            prod.stock = data.stock;
            prod.imagen = "sin imagen";
            prod.descripcion = data.descripcion;
            prod.idCategoria = data.idCategoria;
            
            prod.save((err, prod_save)=>{
                if(err){
                    res.status(500).send({mensaje: "Error en el servidor"});
                }
                else{
                    if(prod_save)
                    {
                        res.json({mensaje: prod_save});
                    }
                    else
                    {
                        res.status(400).send({mensaje: 'No se registro el producto'});
                
                    }
                  }
            })
        }
   }
   catch(error)
   {
        res.json("ERROR", error);
   }   
}
//Mostrar por nombre del producto
const mostrar = function(req,res)
{
    let nombre = req.params.nombre;
    try
    {
        Producto.find({nombre: 
            new RegExp(nombre, 'i')}, 
             (error, prod_lista)=>{
                 if(error){
                     res.json({mensaje: 'Error en el servidor'});
                 }else{
                     if(prod_lista)
                     {
                        res.send({productos: prod_lista});
                     }
                     else
                     {
                        res.json({mensaje: 'No se encontro el registro'});
                     }
                 }
             }
        );
    }
    catch(error)
    {
        res.json("ERROR", error);
    }
}
const modificar =  function(req,res){
    let data = req.body;
    let id = req.params.id;
    let img = req.params.img;

    try{
        if(req.files.imagen)
        {
            fs.unlink('./src/image/productos/'+img ,(error)=>{
                if(error) {console.log(error)};
            });
            
            var imagen_path = req.files.imagen.path;
            
            var name = imagen_path.split('\\');
            var imagen_name = name [3];

            Producto.findByIdAndUpdate(
                {_id:id},
                {nombre: data.nombre,
                 precio_compra: data.precio_compra,
                 precio_venta: data.precio_venta,
                 stock: data.stock,
                 imagen: imagen_name, 
                 descripcion: data.descripcion,
                 idCategoria: data.idCategoria},
                
                (error, prod_mod) => {
                    if(error){
                        res.json({mensaje: 'Error en el servidor'});
                    }
                    else{
                        if(prod_mod)
                        {
                            res.json({mensaje: prod_mod})
                        }
                        else
                        {
                            res.status(400).send({mensaje: 'No se EDITO el producto'});
                        }
                    }
                }
            )
        }
        else
        { 
            Producto.findByIdAndUpdate(
                {_id:id},
                {nombre: data.nombre,
                 precio_compra: data.precio_compra,
                 precio_venta: data.precio_venta,
                 stock: data.stock,
                 descripcion: data.descripcion,
                 idCategoria: data.idCategoria},
                
                (error, prod_mod) => {
                    if(error){
                        res.json({mensaje: 'Error en el servidor'});
                    }
                    else{
                        if(prod_mod)
                        {
                            res.json({mensaje: prod_mod})
                        }
                        else
                        {
                            res.status(400).send({mensaje: 'No se EDITO el producto'});
                        }
                    }
                }
            )
        }
    }
    catch(error)
    {
        res.json("ERROR",error);
    }
}
//Mostrar un producto especifico por ID
const mos_prod_id = function(req, res) {
    let id = req.params.id;

    Producto.findOne({_id:id},(error, prod_seleccionado)=>{
        if(error){
            res.json({mensaje: 'ERROR en el servidor'});
        }
        else{
            if(prod_seleccionado){
                res.json({Producto: prod_seleccionado});
            }
            else{
                res.json({mensaje: 'No se encontro el producto '});
            }

        }
    })
}
const eliminar =  function(req,res){
    let id = req.params.id;

    try{
        Producto.findOneAndRemove({_id:id},(error, prod_eliminado)=>{
            if(error){
                res.json({mensaje: 'Error en el servidor'});
            }else{
                if(prod_eliminado)
                {
                    fs.unlink('./src/image/productos/'+ prod_eliminado.imagen ,(error)=>{
                        if(error) {console.log(error)};
                    });
                    res.json({mensaje: 'producto eliminado'});
                }
                else
                {res.json({mensaje: 'No se pudo eliminar el producto'});}
            }
        })
    }
    catch(error)
    {
        res.json("ERROR",error);
    }
}
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

const get_img = function(req, res){
    let img = req.params.img;

    if(img != "null")
    {
        let path_img = './src/image/productos/'+img;
        res.sendFile(path.resolve(path_img));
    }
    else{
        let path_img = './src/image/productos/descarga.png';
        res.sendFile(path.resolve(path_img));
    }
}

module.exports = {
    guardar,
    mostrar,
    modificar,
    mos_prod_id,
    eliminar,
    listar, 
    get_img    
}