const { find } = require('./../models/Pedido');
const Pedido = require('./../models/Pedido');

const guardar = async(req, res, next)=>{
   try{
        const ped = new Pedido(req.body);
        await ped.save();
        res.json({mensaje: "Pedido registrado",ped});
   } 
   catch(error){
        res.json({mensaje: "Nose pudo registrar el pedido",status:404});
   }
};

const listar = async(req,res)=>{
     const pedidos = await Pedido.find()
          .populate('cliente')
          .populate({path: "productos.producto", model:"Producto"});
     res.json(pedidos);
}

module.exports = {
    guardar,
    listar,
}