import { dbConnection } from "../database/connnection";
import { Usuario } from "../models/Usuario";
import config from "../config";
import { Rol } from "../models/Rol";
import { Sequelize } from "sequelize";



const jwt = require("jsonwebtoken"); //esto es para poder usar el token



//EL SIGN UP ES PARA REGISTRARSE
export const userSignUp = async (req, res) => {

    const transaction = await dbConnection.transaction();

    try {

        const { Nombre, Email, Contrasenia } = req.body;

        const nuevoUsuario = await Usuario.create({
            Nombre: Nombre,
            Email: Email,
            Contrasenia: await Usuario.encryptPassword(Contrasenia),
            Id_Rol: config.rolCliente

        }, { transaction: transaction })

        // console.log(nuevoUsuario);
        try {
            var usuario = await Usuario.findByPk(nuevoUsuario.Id, {
                include: [{
                    model: Rol,
                    // as: 'Rol'
                }],
                transaction
            });
            console.log(usuario);

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Error al obtener el usuario",
            });
        }
        console.log(usuario.Rol);

        await transaction.commit();

        // una vez guardado el usuario en la base de datos, genero el token
        //el token es para que el usuario no tenga que loguearse cada vez que quiera hacer una peticion
        //es para que el front end sepa que el usuario esta logueado y que puede hacer peticiones al back end
        //el token es como un pase para poder hacer peticiones
        //la secret key es una clave secreta que se usa para generar el token

        //esto se supone que crea el usuario, y si lo crea, genera el token con este token el usuario puede hacer peticiones al back end
        const token = jwt.sign({ Id: nuevoUsuario.Id }, config.secretKey, {
            expiresIn: 86400 //24 horas
        });



        res.json({ token });

    }

    catch (error) {
        console.log(error);
        await transaction.rollback();
        res.json(error);
    }

}


//sign in es para logue arse


export const userSignIn = async (req, res) => {

    const { Nombre, Email, Contrasenia } = req.body;

    debugger;

    const transaction = await dbConnection.transaction();

    try {

        const user = await Usuario.findOne({
            where: {
                Email: Email
            }
        }, { transaction: transaction });
        debugger;
        if (!user) {
            return res.status(400).json({
                message: "Usuario no encontrado"
            });
        }
        const matchPassword = await Usuario.comparePassword(Contrasenia, user.Contrasenia); //compara la contraseña que viene del front end con la que esta en la base de datos y devuelve true o false
        debugger;
        if (!matchPassword) {
            return res.status(401).json({
                token: null,
                message: "Contraseña invalida"
            });
        }
        const token = jwt.sign({ Id: user.Id }, config.secretKey, {
            expiresIn: 86400 //24 horas
        });
        res.json({ token });

    } catch (error) {
        console.log(error);
        await transaction.rollback();
        res.json(error);
    }
}




