import jwt from "jsonwebtoken";
import config from "../config";
import { Usuario } from "../models/Usuario";


//el next es para que continue con lo que sigue, si no lo pongo se queda ahi
export const verifyToken = async (req, res, next) => {

    debugger;
    const token = req.headers["x-access-token"]; //obtengo el token de los headers, que es lo que envia el front end cuando hace una peticion
    console.log(token);


    //basicamente lo que hago aca es que si no hay token, no continua con lo que sigue, y si hay token, continua con lo que sigue, es decir, le voy a permitir al usuario que haga la peticion

    //voy a verificar que el token sea valido

    if (!token) return res.status(403).json({ message: "No se envio el token" }); //si no hay token, devuelvo un mensaje de error y no continua con lo que sigue

    //si hay token, lo verifico
    try {

        //el verify verifica el token, si no es valido tira un error, si es valido, devuelve el token decodificado y el id del usuario

        //EL DECODED ES LA CLAVE DE TODO PORQUE SI TIENE TOKEN ME DEVUELVE EL ID DEL USUARIO, ENTONCES LO PUEDO GUARDAR EN EL REQ.USERID Y LO PUEDO USAR EN LOS OTROS MIDDLEWARES

        const decoded = jwt.verify(token, config.secretKey); //verifico el token, si no es valido, tira un error, si es valido me devuelve el id del usuario al cual pertenece el token

        req.userId = decoded.Id; //guardo el id del usuario en el request, para que lo pueda usar en el siguiente middleware
        console.log(decoded);

        //verifico que el usuario exista en la base de datos y que este activo

        const user = await Usuario.findByPk(req.userId);

        console.log(user);

        if (!user) return res.status(404).json({ message: "Usuario no encontrado" }); //si el usuario no existe, devuelvo un mensaje de error y no continua con lo que sigue



    } catch (error) {
        return res.status(401).json({ message: "No autorizado" }); //si el token no es valido, devuelvo un mensaje de error y no continua con lo que sigue
    }


    next(); //si el token es valido, continua con lo que sigue, es decir, le voy a permitir al usuario que haga la peticion
};


//hago una funcion que verifique que el rol que tenga el usuario para poder hacer determinadas acciones

export const verifyRolAdmin = async (req, res, next) => {

    debugger;
    //COMO EN EL VERIFYTOKEN DECLARE EL REQ.USERID, LO PUEDO USAR ACA Y EN EL SIGUIENTE MIDDLEWARE

    const user = await Usuario.findByPk(req.userId, {
        include: ["Rol"]
    }); //busco el usuario por el id que esta en el request

    debugger;
    if (user.Rol.dataValues.Codigo != config.codigoRolAdministrador) {
        return res.status(403).json({ message: "No autorizado" }); //si el token no es valido, devuelvo un mensaje de error y no continua con lo que sigue

    }
    next();


};

export const verifyRolSucursal = async (req, res, next) => {
    const user = await Usuario.findByPk(req.userId, {
        include: ["Rol"]
    }); //busco el usuario por el id que esta en el request

    if (user.Rol.dataValues.Codigo != config.codigoRolSucursal) {
        return res.status(403).json({ message: "No autorizado" }); //si el token no es valido, devuelvo un mensaje de error y no continua con lo que sigue

    }
    
    next();



}
