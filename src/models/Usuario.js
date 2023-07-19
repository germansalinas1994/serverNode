import { DataTypes, Sequelize  } from "sequelize";
import { dbConnection } from "../database/connnection"; //importo la conexion a la base de datos con sequelize que cree en el archivo connection.js que esta dentro de la carpeta database ORM sequelize para poder conectarme
import { Rol } from "./Rol";
import bcrypt from 'bcrypt'; // el modulo bcryptjs es para encriptar la contraseña


export const Usuario = dbConnection.define('Usuario', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nombre:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    Email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    
    Contrasenia :{ 
        type : DataTypes.STRING,
        allowNull: true
    },  

    Id_Rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          // This is a reference to another model
          model: 'Rol',
    
          // This is the column name of the referenced model
          key: 'Id'
    
        }
      },  

},
{
    freezeTableName: true,
    timestamps: false,
    tableName: 'Usuario' //ACA PUEDO DEFINIR EL NOMBRE DE LA TABLA EN LA BASE DE DATOS

});


// PROBAR SIEMPRE DESDE DONDE SALE LA RELACION

// Usuario.hasOne(Rol, {
//     foreignKey: 'Id_Rol', //foreignKey indica la clave foranea de la tabla origen
//     targetKey: 'Id',  //targetKey indica la clave primaria de la tabla objetivo
//     hooks: true,
//     as: 'Rol'
// });

Usuario.belongsTo(Rol, {
    foreignKey: 'Id_Rol', //foreignKey indica la clave foranea de la tabla origen
    targetKey: 'Id',  //targetKey indica la clave primaria de la tabla objetivo
    hooks: true, //hooks: true, significa que se creara una relacion uno a uno
    // as: 'Rol' //as: 'Rol' es el alias de la relacion
});


Usuario.encryptPassword = async (Contrasenia) => {
    const salt = await bcrypt.genSalt(10);
    debugger;
    return await bcrypt.hash(Contrasenia, salt);
}


Usuario.comparePassword = async (Contrasenia, receivedPassword) => {
    return await bcrypt.compare(Contrasenia, receivedPassword);
}
