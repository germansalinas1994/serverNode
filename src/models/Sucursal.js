import { DataTypes, Sequelize } from "sequelize";
import { dbConnection } from "../database/connnection"; //importo la conexion a la base de datos con sequelize que cree en el archivo connection.js que esta dentro de la carpeta database ORM sequelize para poder conectarme
// import { Producto } from "./Producto";

export const Sucursal = dbConnection.define('Sucursal', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    Nombre:{
        type: DataTypes.STRING,
        allowNull: true
    },
    Direccion:{
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    freezeTableName: true, //esto es para que no se cree la tabla con el nombre en plural, sino que se cree con el nombre que le pongo aca
    timestamps: false,
    tableName: 'Sucursal' //ACA PUEDO DEFINIR EL NOMBRE DE LA TABLA EN LA BASE DE DATOS

},
);

