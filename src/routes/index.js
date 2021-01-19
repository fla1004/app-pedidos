const ClienteController = require("./../controllers/ClienteController")
const ProductoController = require("./../controllers/ProductoController")
const authController = require("./../controllers/AuthController");
const UsuarioController = require("./../controllers/UsuarioController");
const authMiddleware = require("./../middlewares/authMiddlewar");

//const PedidoController = require("./../controllers/PedidoController");

const rutas = (app) => {

    //rutas de login 
    app.post("/login",authController.login);
    //rutas de usuario
    app.post("/usuario",UsuarioController.guardar);
    app.get("/usuario",authMiddleware.vericarAuth, UsuarioController.listar);
    //rutas cliente
    app.get("/cliente", ClienteController.listar);
    app.get("/cliente/:id", ClienteController.mostrar);
    app.post("/cliente", ClienteController.guardar);
    app.put("/cliente/:id", ClienteController.modificar);
    app.delete("/cliente/:id", ClienteController.eliminar);
    //ruta producto
    app.get("/producto", ProductoController.listar);
    app.get("/producto/:id", ProductoController.mostrar);
    app.post("/producto", ProductoController.guardar);
    app.put("/producto/:id", ProductoController.modificar);
    app.delete("/producto/:id", ProductoController.eliminar);
    //ruta pedido
   /* app.get("/pedido", PedidoController.listar);
    app.get("/pedido/:id", PedidoController.mostrar);
    app.post("/pedido", PedidoController.guardar);
    app.put("/pedido/:id", PedidoController.modificar);
    app.delete("/pedido/:id", PedidoController.eliminar);*/
}

module.exports = {
    rutas
}