//este archivo va a tener la implementacion de los metodos de las rutas
import { getConnection } from "../database/connnection"; //
import { Categoria } from "../models/Categoria";
import { Producto } from "../models/Producto";


export const getCategorias = async (req, res) => {

    try {
        
        //esto es para generar un error de prueba por eso esta comentado
        // throw new Error("Error de prueba");

        const categorias = await Categoria.findAll();

        // res es la respuesta que retornamos a la peticion, cuando pido las categorias devuelvo todas las categorias de la base
        res.json(categorias);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }



    // ASI ES COMO SE CONECTA A LA BASE DE DATOS SIN EL ORM

    // const pool = await getConnection();
    // const result = await pool.request().query("select * from Categoria");
    // res.json(result.recordset);
}

export const createNewCategoria = async (req, res) => {
    const { Nombre, Descripcion } = req.body; //desestructuro el objeto req.body para obtener los datos que necesito
    try {
        const nuevaCategoria = await Categoria.create({
            Nombre: Nombre,
            Descripcion: Descripcion
        })
        res.json(nuevaCategoria);
        

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


    //TAMBIEN PODRIA HACERLO DE ESTA FORMA CON EL ORM

    // try {
    //     const nuevaCategoria = await Categoria.create(req.body);
    //     res.json(nuevaCategoria);

    // } catch (error) {
    //     return res.status(500).json({ message: error.message });
    // }



    //PRUEBAS QUE IRIAN DENTRO DEL TRY 
    // debugger;
    // console.log(req.body);

    // console.log(Nombre, Descripcion);

    //FIN DE PRUEBAS 



    //ASI ES COMO SE CONECTA A LA BASE DE DATOS SIN EL ORM

    // const pool = await getConnection();
    // const result = await pool.request().query("select * from Categoria");

    // res es la respuesta que retornamos a la peticion, cuando quiera crear un objeto podria devolver el mismo
}


export const getCategoriaById = async (req, res) => {

    try {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id);

        if (!categoria) {
            return res.status(404).json({ message: "Categoria no encontrada" });
        }

        res.json(categoria);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }



}

export const deleteCategoria = async (req, res) => {
    const { id } = req.params;
    try {
        const categoria = await Categoria.findByPk(id);

        if (!categoria) {
            return res.status(404).json({ message: "Categoria no encontrada" });
        }
        else {
            console.log("Categoria encontrada");
            await categoria.destroy();
            return res.status(204).json({ message: "Categoria eliminada" });


        }

        //otra forma
        // await Categoria.destroy({
        //     where: {
        //         id: id
        //     }
        // });

        //el status 204 significa que no devuelve nada pero todo fue bien

    } catch (error) {
        return res.status(500).json({ message: error.message + "Error al eliminar la categoria ya que tiene relacion con Productos" });
    }

}

export const updateCategoria = async (req, res) => {
    //SIEMPRE TENGO QUE RECIBIR EN LOS PARAMETROS CON EL NOMBRE TAL CUAL LO PONGO EN EL METODO DE ROUTES
    const { id } = req.params;
    const { Nombre, Descripcion } = req.body;

    try {
        // const categoriaActualizar = await Categoria.findByPk(id);
        const categoriaActualizar = await Categoria.findOne({
            where: {
                Id: id
            }
        });


        if (!categoriaActualizar) {
            return res.status(404).json({ message: "Categoria no encontrada" });
        }
        else {
            console.log("Categoria encontrada");
            categoriaActualizar.set(req.body);
            await categoriaActualizar.save();
            res.json(categoriaActualizar);

        }

        //otra forma de hacerlo es como hice producto, en este caso no vale tanto la pena porque no tiene foreign key


        // if (!categoriaActualizar) {
        //     return res.status(404).json({ message: "Categoria no encontrada" });
        // }
        // else{
        //     console.log("Categoria encontrada");
        //     categoriaActualizar.Nombre = Nombre;
        //     categoriaActualizar.Descripcion = Descripcion;
        //     await categoriaActualizar.save();
        //     res.json(categoriaActualizar);

        // }






    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

export const getProductosCategoria = async (req, res) => {

    try {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id);

        if (!categoria) {
            return res.status(404).json({ message: "Categoria no encontrada" });
        }
        else{
            const productos = await Producto.findAll({
                where: {
                    Id_Categoria: categoria.Id
                }
            });
            res.json(productos);
        }


        //otra forma de hacerlo

        // const categoria = await Categoria.findByPk(id);

        // if (!categoria) {
        //     return res.status(404).json({ message: "Categoria no encontrada" });
        // }
        // else {
        //     const productos = await Producto.findAll({
        //         where: {
        //             Id_Categoria: req.params.Id
        //         }
        //     });
        //     res.json(productos);
        // }



    } catch (error) {
        return res.status(500).json({ message: error.message });
    }



}
