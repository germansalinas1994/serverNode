import sql from 'mssql'
import {Sequelize} from 'sequelize' //importo el ORM sequelize para poder conectarme a la base de datos
import config from "../config";

//Exporto la conexion a la base de datos con sequelize, para incorporarla en los modelos que necesite y tener la conexion en un modelo
// export const dbConnection = new Sequelize(config.database, config.dbUser, config.dbPassword,{
//     server: config.dbServer,
//     database: config.database,
//     dialect: config.dbDialect,
//     dialectOptions: {
//         options: {
//             encrypt: true,
//             enableArithAbort: true,
//             trustServerCertificate: true,

//         }
//     },
//     define: {
//         timestamps: false,
//         freezeTableName: true
//     }
// })






//BASE DE DATOS DE MY SQL

export const dbConnection = new Sequelize(config.database, config.dbUser, config.dbPassword,{
    host: 'localhost',
    dialect: config.dbDialect,
    dialectOptions: {
        options: {
            encrypt: true,
            enableArithAbort: true,
            trustServerCertificate: true,

        }
    },
    define: {
        timestamps: false,
        freezeTableName: true
    }

  });












//DE ESTA FORMA MECONECTO A LA BASE DE DATOS SIN EL ORM, CON EL ORM QUE USO QUE ES SEQUELIZE TENGO LA VENTAJA DE PODER TRABAJAR LOS JSON O LOS OBJETOS COMO MODELO



// const dbSettings = {
//     user: config.dbUser,
//     password: config.dbPassword,
//     server: config.dbServer,
//     database: config.database,
//     //stream es opcional, porque no cambia que lleguen los datos, hay que ver a futuro
//     //stream es por si se quiere que los datos lleguen en forma de stream
//     stream: false,
//     options: {
//       //trustedConnection es opcional, porque no cambia que lleguen los datos, hay que ver a futuro 
//       //trustedconnection es para que no se tenga que poner el usuario y la contraseña
//       trustedConnection: true,
//       //encrypt funciona para encriptar los datos que se envian y se reciben
//       encrypt: true,
//       //enablearithabort es para que no se cierre la conexion cuando se produce un error
//       enableArithAbort: true,
//       //trustServerCertificate es para que no se muestre el mensaje de advertencia de que no se puede verificar la identidad del servidor
//       trustServerCertificate: true,
  
//     },
// }



// ESTA FUNCION ES PARA PROBAR QUE LA CONEXION A LA BASE DE DATOS SIN EL ORM SE HACE CORRECTAMENTE
// export async function getConnection() {
//     try {
//         const pool = await sql.connect(dbSettings);
//         //pruebo para ver si funciona

//         const result = await pool.request().query('select * from Usuario');
//         console.log(result.recordset);
        
//         //con estas lineas lo que estoy haciendo aca es probar que funcione la base de datos
//         // const result2 = await pool.request().query(`INSERT INTO Categoria (Nombre, Descripcion) VALUES ('German3', 'german 3')`);
//         // console.log(result2.recordset);


//         //DEVUELVO LA CONEXION A LA BASE DE DATOS PARA QUE PUEDA SER USADA EN OTRO LADO COMO POR EJEMPLO EN EL MODELO DE USUARIO
//         return pool

//     } 
//     catch (error) {
//         console.log(error)
//     }
// }

//para que esta prueba se ejecute primero hay que ejecutar el archivo index.js y llamar a la funcion getConnection() si es que quiero probarlo

// getConnection();

// sql.connect() 