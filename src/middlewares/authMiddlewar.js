//Para proteger las rutas, verifica si el usuario tiene permiso

const jwt = require("jsonwebtoken");
const config = require("./../config/config");

const vericarAuth = async (req, res, next) =>{
    let token = null;

    if(req.headers.authorization)
    {
        token = req.headers.authorization.split(' ')[1];
        //console.log(token);
    }
        if(!token){
            return res.status(403).send({
            auth:false,
            mensaje:"No se proporciono token"
            })
    }   
    jwt.verify(token, config.JWT_SECRET,(error, decode)=>{
        if(error){
                return res.status(404).send({
                auth:false,
                mensaje:"No se proporciono token"
            });
        }
        next();
    });    
};

module.exports = {
    vericarAuth,
}
