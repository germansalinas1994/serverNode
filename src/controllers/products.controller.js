//este archivo va a tener la implementacion de los metodos de las rutas
import { getConnection } from "../database/connnection"; //
import { Categoria } from "../models/Categoria";

import { EstadoCarrito } from "../models/EstadoCarrito";
import { Producto } from "../models/Producto";


const uploadFile = require('../middleware/multer.js');



export const getProducts = async (req, res) => {

    try {
        //esto es para generar un error de prueba por eso esta comentado
        // throw new Error("Error de prueba");

        const products = await Producto.findAll();

        // res es la respuesta que retornamos a la peticion, cuando pido las categorias devuelvo todas las categorias de la base
        res.json(products);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }



    // ASI ES COMO SE CONECTA A LA BASE DE DATOS SIN EL ORM

    // const pool = await getConnection();
    // const result = await pool.request().query("select * from Categoria");
    // res.json(result.recordset);
}

export const createNewProduct = async (req, res) => {
    const { Nombre, Descripcion, Precio, Stock, Id_Categoria, Url_Imagen } = req.body; //desestructuro el objeto req.body para obtener los datos que necesito
    try {
        if (Nombre == null || Descripcion == null || Precio == null || Id_Categoria == null) {
            return res.status(400).json({ message: "Faltan datos" });
        }
        const categoria = await Categoria.findByPk(Id_Categoria);
        if (!categoria) {
            return res.status(404).json({ message: "Categoria no encontrada" });
        }


        const nuevoproducto = await Producto.create({
            Nombre: Nombre,
            Descripcion: Descripcion,
            Precio: Precio,
            Stock: Stock,
            Id_Categoria: Id_Categoria,
            Url_Imagen: Url_Imagen

        })
        res.json(nuevoproducto);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    //ASI ES COMO SE CONECTA A LA BASE DE DATOS SIN EL ORM

    // const pool = await getConnection();
    // const result = await pool.request().query("select * from Categoria");

    // res es la respuesta que retornamos a la peticion, cuando quiera crear un objeto podria devolver el mismo
}


export const getProductById = async (req, res) => {

    try {
        const { id } = req.params;
        const producto = await Producto.findByPk(id);

        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrada" });
        }

        res.json(producto);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }



}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findByPk(id);

        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        else {
            console.log("Producto encontrado");
            await producto.destroy();
            return res.status(204).json({ message: "Producto eliminado" });
        }

        //otra forma
        // await Categoria.destroy({
        //     where: {
        //         id: id
        //     }
        // });

        //el status 204 significa que no devuelve nada pero todo fue bien

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

export const updateProduct = async (req, res) => {
    //SIEMPRE TENGO QUE RECIBIR EN LOS PARAMETROS CON EL NOMBRE TAL CUAL LO PONGO EN EL METODO DE ROUTES
    const { id } = req.params;
    const { Nombre, Descripcion, Precio, Stock, Id_Categoria } = req.body;

    try {
        const productoActualizar = await Producto.findByPk(id);
        if (!productoActualizar) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }

        //si mandan un id de categoria lo busco
        if (req.body.Id_Categoria != null) {
            const categoria = await Categoria.findByPk(req.body.Id_Categoria);
            if (!categoria) {
                return res.status(404).json({ message: "Categoria no encontrada" });
            }
            else {
                console.log("Categoria encontrada");
                productoActualizar.set(req.body);
                await productoActualizar.save();
                res.json(productoActualizar);
            }
        }
        //si no mandan un id de categoria no lo busco y actualizo directo
        else {
            productoActualizar.set(req.body);
            await productoActualizar.save();
            res.json(productoActualizar);
        }

    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }




    //OTRA FORMA DE HACERLO, ACA HAY QUE TENER CUIDADO CON LOS NULOS YA QUE EN EL BODY PUEDE SER QUE NO VAYAN TODOS LOS CAMPOS
    // if (!productoActualizar) {
    //     return res.status(404).json({ message: "Producto no encontrado" });
    // }
    // if(Id_Categoria != null){
    //     const categoria = await Categoria.findByPk(Id_Categoria);
    //     if(!categoria){
    //         return res.status(404).json({message : "Categoria no encontrada"});
    //     }

    // }
    // else{
    //     productoActualizar.Nombre = Nombre;
    //     productoActualizar.Descripcion =Descripcion;
    //     productoActualizar.Precio = Precio;
    //     productoActualizar.Stock = Stock;
    //     productoActualizar.Id_Categoria = Id_Categoria;
    //     await productoActualizar.save();
    //     res.json(productoActualizar);

    // }


}

// export const getEstadoCarrito = async (req, res) => {

//     try {

//         const estadoCarrito = await EstadoCarrito.findAll();

//         // res es la respuesta que retornamos a la peticion, cuando pido las categorias devuelvo todas las categorias de la base
//         res.json(estadoCarrito);

//     } catch (error) {
//         return res.status(500).json({ message: error.message });
//     }

// }



export const getProductosCategoria = async (req, res) => {
    try {
        //esto es para generar un error de prueba por eso esta comentado
        // throw new Error("Error de prueba");

        const products = await Producto.findAll(
            {
                include: [{
                    model: Categoria,
                    as: 'Categoria'
                }]
            }
        );

        // res es la respuesta que retornamos a la peticion, cuando pido las categorias devuelvo todas las categorias de la base
        res.json(products);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


}





