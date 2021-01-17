const ClienteController = require("./../controllers/ClienteController")
const ProductoController = require("./../controllers/ProductoController")
const rutas = (app) => {

    //rutas de login 
    //rutas de usuario
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
}

module.exports = {
    rutas
}