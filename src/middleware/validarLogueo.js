import { Usuario } from "../models/Usuario"

export const validarResistroUsuario = async (req, res, next) => {
    debugger;
    const { Nombre, Apellido, Mail, Password} = req.body;
    try {

        //TENGO QUE HACER ESTO CON EL EMAIL Y CON EL NOMBRE DE USUARIO QUE ELIJA EL USUARIO, FALTA LA PARTE DE HACERLO CON EL NOMBRE DE USUARIO



        const usuario =  await Usuario.findOne({ where: { Mail: req.body.Mail } });
        debugger;
        if (usuario) {
            return res.status(400).json({ message: "El usuario ya existe" });
        }
        next();
    
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al crear el usuario",
        });
    }
}
