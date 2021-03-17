const Producto = require("./../models/Producto");

const cat = function(req,res){
    let id = req.params.id;

    Producto.find({idCategoria:id},(error, prod_seleccionado)=>{
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

module.exports = {
    cat
}
