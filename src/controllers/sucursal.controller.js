//este archivo va a tener la implementacion de los metodos de las rutas
import { getConnection } from "../database/connnection"; //

import { Sucursal } from "../models/Sucursal";


export const getSucursales = async (req, res) => {
    try {
        const sucursales = await Sucursal.findAll();
        res.json(sucursales);

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}
