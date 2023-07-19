import { dbConnection } from "../database/connnection";
import { Usuario } from '../models/Usuario';
import { Rol } from '../models/Rol';


export const getAllUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al obtener los usuarios",

        });
    }
}

export const crearUsuario = async (req, res) => {
    const { Nombre, Apellido, Email, Password, Id_Rol } = req.body;
    try {
        const nuevoUsuario = await Usuario.create({
            Nombre: Nombre,
            Apellido: Apellido,
            Email: Email,
            Password: Password,
            Id_Rol: Id_Rol
        },
        );
        if (nuevoUsuario) {
            res.json({
                message: "Usuario creado correctamente",
                data: nuevoUsuario
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al crear el usuario",
        });
    }
}

