import app from "./app";
import { dbConnection } from './database/connnection' //importo la conexion a la base de datos con sequelize que cree en el archivo connection.js que esta dentro de la carpeta database ORM sequelize

//Puedo importar los modelos como para trabajar con  ellos si los necesito aca, por lo general no es necesario

//para generar tablas nuevas desde los modelos que cree, tengo que hacer un sync, y para que se sincronicen tengo que importarlos aca
// import { Categoria } from "./models/Categoria";
// import { Producto } from "./models/Producto";
// // import { Prueba } from "./models/prueba";

// import { Usuario } from "./models/Usuario";
import { Rol } from "./models/Rol";
// import { Sucursal } from "./models/Sucursal";


async function main() {




    //ESTO ES MUY IMPORTANTE PORQUE DE ESTA FORMA HACEMOS QUE EL PUERTO NOS ESTE ESCUCHANDO
    app.listen(app.get("port"));
    console.log("\nServer on port", app.get("port"), "\n");
    try {


        

        //aca sincroniza la base de datos con los modelos que cree, si llego a importar algun modelo nuevo tengo que hacer un sync para que se sincronicen 

        // await dbConnection.sync();


        // //ACA EMPIEZA LA PRUEBA DE LA CONEXION CON ORM

        // await dbConnection.authenticate(); //aca se conecta a la base de datos


        //EJEMPLO DE COMO PUEDO TRAER EL OBJETO CATEGORIA DE UN PRODUCTO

        // const producto = await Producto.findByPk(1, {
        //     include: [{
        //         model: Categoria,
        //         as: 'Categoria'
        //     }]
        // });
        // const objetoCategoria = producto.Categoria.dataValues;
        // console.log(objetoCategoria);



        // const result = await Producto.findAll();

        // console.l
        // result.forEach(element => {
        //     console.log(element.dataValues)
        // })


        // const productito = await Producto.findByPk(2156, {
        //     include: [{
        //         model: Categoria,
        //         as: 'Categoria'
        //     }]
        // });

        // console.log(productito.dataValues.Categoria.dataValues);

        // const result = await Categoria.findAll();

        // result.forEach(element => {
        //     console.log(element.dataValues),
        //     console.log(element.Nombre),
        //     element.Descripcion = "FUNCIONO CON EL FOREACH",
        //     console.log(element.Descripcion)
        // })



        // result.map(element => {
        //     element.Descripcion = "FUNCIONO CON EL MAP",
        //     console.log(element.Descripcion)
        // })
        // categoria.Descripcion = "Categoria de prueba",
        // console.log(categoria)),


        // const result = await Usuario.findAll();
        // console.log(result);

        // const roles = await Rol.findAll();
        // console.log(roles);

        // const usuario = await Usuario.findByPk(1009, {
        //     include: [{
        //         model: Rol,
        //         as: 'Rol'
        //     }]
        // });
        // console.log(usuario);
        // const objeto = usuario.Rol.dataValues;
        // console.log(objeto);

        // const sucursales = await Sucursal.findAll();
        // console.log(sucursales);




        console.log("Base de datos conectada comunicado desde index.js \n")

        const nombre = dbConnection.getDatabaseName();
        console.log(nombre);


        const roles = await Rol.findAll();
        console.log(roles);

        // const usuarios = await Usuario.findAll();
        // console.log(usuarios);
        // const roles = await Rol.findAll(); // console.log(roles);
        //ACA TERMINA LA PRUEBA DE LA CONEXION

    } catch (error) {
        console.log(error);
    }

}



main();