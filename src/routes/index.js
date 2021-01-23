const ClienteController = require("./../controllers/ClienteController")
const ProductoController = require("./../controllers/ProductoController")
const authController = require("./../controllers/AuthController");
const UsuarioController = require("./../controllers/UsuarioController");
const authMiddleware = require("./../middlewares/authMiddlewar");
const PedidoController = require("./../controllers/PedidoController");

const rutas = (app) => {

    //rutas de login 
    app.post("/login",authController.login);
    //rutas de usuario
    app.post("/usuario",authMiddleware.vericarAuth,UsuarioController.guardar);
    app.get("/usuario",authMiddleware.vericarAuth, UsuarioController.listar);
    //rutas cliente
    app.get("/cliente",authMiddleware.vericarAuth, ClienteController.listar);
    app.get("/cliente/:id",authMiddleware.vericarAuth, ClienteController.mostrar);
    app.post("/cliente",authMiddleware.vericarAuth, ClienteController.guardar);
    app.put("/cliente/:id",authMiddleware.vericarAuth, ClienteController.modificar);
    app.delete("/cliente/:id",authMiddleware.vericarAuth, ClienteController.eliminar);
    //ruta producto
    app.get("/producto",authMiddleware.vericarAuth, ProductoController.listar);
    app.get("/producto/:id",authMiddleware.vericarAuth, ProductoController.mostrar);
    app.post("/producto",authMiddleware.vericarAuth, ProductoController.guardar);
    app.put("/producto/:id",authMiddleware.vericarAuth, ProductoController.modificar);
    app.delete("/producto/:id",authMiddleware.vericarAuth, ProductoController.eliminar);
    //ruta pedido
    app.post("/pedido", authMiddleware.vericarAuth,PedidoController.guardar);
    app.get("/pedido", authMiddleware.vericarAuth, PedidoController.listar);
    /* 
    app.get("/pedido/:id", PedidoController.mostrar);
    app.put("/pedido/:id", PedidoController.modificar);
    app.delete("/pedido/:id", PedidoController.eliminar);*/
}

module.exports = {
    rutas
}