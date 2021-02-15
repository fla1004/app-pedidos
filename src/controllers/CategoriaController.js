const Categoria =  require('./../models/Categoria');

const guardar = function(req,res)
{
    const datos = req.body;
    
    const cat = new Categoria();

    cat.titulo = datos.titulo;
    cat.descripcion = datos.descripcion;  

    if(cat.descripcion != "")
    {
        cat.save((err, cat_save) => {
        if(err){
            res.status(500).send({mensaje: "Error en el servidor"});
        }
        else{
            if(cat_save)
            {
                res.json({mensaje: cat_save});
                console.log(cat_save);
            }
            else
            {
                res.status(400).send({mensaje: 'No se registro la categoria'});
        
            }
        } })
    }
    else{
        cat.titulo = datos.titulo;
        cat.descripcion = "Sin detalles";

        cat.save((err, cat_save) => {
            if(err){
                res.status(500).send({mensaje: "Error en el servidor"});
            }
            else{
                if(cat_save)
                {
                    res.json({mensaje: cat_save});
                    console.log(cat_save);
                }
                else
                {
                    res.status(400).send({mensaje: 'No se registro la categoria'});
            
                }
            } })
    }

    
}

const mostrar = async function(req,res)
{
    try
    {
        const datos = await Categoria.find();
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
        Categoria.findById({_id:id},(err, cat_seleccionado)=>{
            if(err)
            { 
                res.json({mensaje: 'Error en el servidor'});
            }
            else{
                if(cat_seleccionado){
                    res.json({Categoria: cat_seleccionado});
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
    let data = req.body;
    let id = req.params.id;

    try{
       Categoria.findByIdAndUpdate(
           {_id:id},
            {
                titulo: data.titulo,
                descripcion: data.descripcion
            },
            (error, cat_mod) => {
                if(error){
                    res.json({mensaje: 'Error en el servidor'});
                }
                else{
                    if(cat_mod)
                    {
                        res.json({mensaje: cat_mod})
                    }
                    else
                    {
                        res.json({mensaje: 'No se edito la categoria'});
                    }
                }
            }
        )
        
    }
    catch(error)
    {
        res.json("ERROR",error);
    }
}
const eliminar = function(req,res){
    let data = req.body;
    let id = req.params.id;

    try{
        Categoria.findOneAndRemove({_id:id},(err, cat_eliminado)=>{
            if(err){
                res.json({mensaje: "Error en el servidor"});
            }
            else{
                if(cat_eliminado)
                {
                    res.json({Categoria: cat_eliminado});
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

module.exports ={
    guardar, 
    mostrar,
    mostrar_id,
    modificar,
    eliminar
}