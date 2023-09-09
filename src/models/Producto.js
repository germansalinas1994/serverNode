import { DataTypes, Sequelize  } from "sequelize";
import { dbConnection } from "../database/connnection"; //importo la conexion a la base de datos con sequelize que cree en el archivo connection.js que esta dentro de la carpeta database ORM sequelize para poder conectarme
import { Categoria } from "./Categoria";

export const Producto = dbConnection.define('Producto', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    Descripcion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    
    Precio :{ 
        type : DataTypes.FLOAT,
        allowNull: false
    },
    Url_Imagen :{
        type: DataTypes.STRING,
    },
    Marca:{
        type: DataTypes.STRING,
        allowNull: true,

    },
    Id_Categoria: {
        type: DataTypes.INTEGER,
        allowNull: true,
    
        references: {
          // This is a reference to another model
          model: 'Categoria',
    
          // This is the column name of the referenced model
          key: 'Id'
    
        }
      },  

},
{
    freezeTableName: true,
    timestamps: false,
    tableName: 'Producto' //ACA PUEDO DEFINIR EL NOMBRE DE LA TABLA EN LA BASE DE DATOS

});



Producto.belongsTo(Categoria, {
    foreignKey: 'Id_Categoria', //foreignKey indica la clave foranea de la tabla origen
    targetKey: 'Id',  //targetKey indica la clave primaria de la tabla objetivo
    hooks: true,
    as: 'Categoria'
});




