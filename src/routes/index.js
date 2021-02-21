const ClienteController = require("./../controllers/ClienteController")
const ProductoController = require("./../controllers/ProductoController")
const authController = require("./../controllers/AuthController");
const UsuarioController = require("./../controllers/UsuarioController");
const authMiddleware = require("./../middlewares/authMiddlewar");
const CategoriaController = require("./../controllers/CategoriaController");
const VentaController = require("./../controllers/VentaController");
const multipart = require('connect-multiparty');
var path = multipart({uploadDir: './src/image/productos'})

const rutas = (app) => {

    //rutas de login 
    app.post("/login",authController.login);

    //rutas de usuario
    app.post("/usuario",UsuarioController.guardar);
    app.get("/usuario",authMiddleware.vericarAuth, UsuarioController.listar);
    app.get("/usuario/:id" ,authMiddleware.vericarAuth, UsuarioController.mostrar_id);
    app.delete("/usuario/:id",authMiddleware.vericarAuth, UsuarioController.eliminar);
    app.put("/usuario/:id",UsuarioController.modificar);

    //ruta categoria
    app.post("/categoria", authMiddleware.vericarAuth, CategoriaController.guardar);
    app.get("/categoria",authMiddleware.vericarAuth,CategoriaController.mostrar);
    app.get("/categoria/select/:id", CategoriaController.mostrar_id);
    app.put("/categoria/:id", CategoriaController.modificar);
    app.delete("/categoria/:id", CategoriaController.eliminar);

    //ruta producto
    app.post("/producto",/*authMiddleware.vericarAuth,*/ path, ProductoController.guardar);
    app.get("/producto/:nombre",authMiddleware.vericarAuth, ProductoController.mostrar);
    app.put("/producto/:id/:img",/*authMiddleware.vericarAuth, */ path , ProductoController.modificar);
    app.delete("/producto/:id",authMiddleware.vericarAuth, ProductoController.eliminar);
    app.get("/producto/img/:img", ProductoController.get_img);
    app.get("/producto",authMiddleware.vericarAuth,ProductoController.listar);

    //rutas cliente 
    app.post("/cliente",authMiddleware.vericarAuth, ClienteController.guardar);
    app.get("/cliente",authMiddleware.vericarAuth, ClienteController.listar);
    app.get("/cliente/select/:id",authMiddleware.vericarAuth, ClienteController.listar_id);
    app.put("/cliente/:id",authMiddleware.vericarAuth, ClienteController.modificar);
    app.delete("/cliente/:id",authMiddleware.vericarAuth, ClienteController.eliminar);


    //ruta venta
    app.post("/pedido",VentaController.registrar);
    app.get("/pedido/:id", VentaController.datos_venta);
    app.get('/pedido',VentaController.listado_venta);
    app.get('/pedido/data/:id',VentaController.detalles_venta);
    /*app.get("/pedido/:id", PedidoController.mostrar);
    app.put("/pedido/:id", PedidoController.modificar);
    app.delete("/pedido/:id", PedidoController.eliminar);*/
   
}

module.exports = {
    rutas
}