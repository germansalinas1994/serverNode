import { DataTypes, Sequelize } from "sequelize";
import { dbConnection } from "../database/connnection"; //importo la conexion a la base de datos con sequelize que cree en el archivo connection.js que esta dentro de la carpeta database ORM sequelize para poder conectarme

export const EstadoCarrito = dbConnection.define('EstadoCarrito', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    }


},
{
    freezeTableName: true,
    timestamps: false,
    tableName: 'EstadoCarrito' //ACA PUEDO DEFINIR EL NOMBRE DE LA TABLA EN LA BASE DE DATOS
});


