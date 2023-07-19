import { DataTypes, Sequelize } from "sequelize";
import { dbConnection } from "../database/connnection"; //importo la conexion a la base de datos con sequelize que cree en el archivo connection.js que esta dentro de la carpeta database ORM sequelize para poder conectarme

export const Prueba = dbConnection.define('Prueba', {
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
    tableName: 'Prueba'
}
);

