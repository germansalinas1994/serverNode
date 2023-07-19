import { DataTypes, Sequelize } from "sequelize";
import { dbConnection } from "../database/connnection"; //importo la conexion a la base de datos con sequelize que cree en el archivo connection.js que esta dentro de la carpeta database ORM sequelize para poder conectarme
// import { Producto } from "./Producto";

export const Categoria = dbConnection.define('Categoria', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Descripcion:{
        type: DataTypes.STRING,
        allowNull: true
    },
},
{
    freezeTableName: true, //esto es para que no se cree la tabla con el nombre en plural, sino que se cree con el nombre que le pongo aca
    timestamps: false,
    tableName: 'Categoria' //ACA PUEDO DEFINIR EL NOMBRE DE LA TABLA EN LA BASE DE DATOS

},
);

//esto es para que se cree la relacion de uno a muchos entre categoria y producto, ya que una categoria puede tener muchos productos
//la relacion se hace en la clase padre, en este caso en la clase Categoria

// Producto.belongsTo(Categoria, {
//     foreignKey: 'Id_Categoria',
//      targetKey: 'Id',  //targetKey indica la clave primaria de la tabla objetivo 
//      as: 'Categoria'
// });


//ESTO ES LO MISMO 

//esto es para que se cree la relacion de uno a muchos entre categoria y producto pero no esta andando y no se por que 
// Categoria.hasMany(Producto, {
//     foreignKey: 'Id_Categoria',
//     sourceKey: 'Id', //sourceKey es para que se cree la columna Id en la tabla categoria
//     as: 'Producto',
//     hooks: true,
// });


//esto es para que se cree la relacion de uno a muchos entre categoria y producto


//el hasMany es para que se cree la relacion de uno a muchos,

// targetKey se utiliza para especificar la clave primaria de la tabla objetivo que se utilizará en la relación. 
// Si no se especifica targetKey, Sequelize utilizará la clave primaria predeterminada de la tabla objetivo.

// Por otro lado, sourceKey se utiliza para especificar la clave extranjera en la tabla origen que se utilizará en la relación.
//  Si no se especifica sourceKey, Sequelize utilizará la clave primaria predeterminada de la tabla origen.

//LA TABLA ORIGEN ES LA QUE TIENE LA CLAVE FORANEA Y LA TABLA DESTINO ES LA QUE TIENE LA CLAVE PRIMARIA


//EJEMPLO DE COMO PUEDO TRAER EL OBJETO CATEGORIA DE UN PRODUCTO

// const producto = await Producto.findByPk(1, {
//     include: [{
//       model: Categoria,
//       as: 'Categoria'                           
//     }]
//   });
// const objetoCategoria = producto.Categoria.dataValues;
// console.log(objetoCategoria);
