const {mongoose,Schema} = require("mongoose");

const PedidoSchema = new mongoose.Schema({

    cliente: {type:Schema.Types.ObjectId, ref:"Cliente"},
    productos: [
            {
                producto:{type:Schema.Types.ObjectId, ref:"Producto"},
                cantidad: {type:Number, min:1},
            },
        ],

        monto_total:{
            type:Schema.Types.Decimal128,
        },
    },
    {
        timestamps:true,
    });
    
module.exports = mongoose.model("Pedido",PedidoSchema);
