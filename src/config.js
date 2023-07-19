import { config } from 'dotenv'; //esto lo que hace es intentar leer las variables de entorno que estan en el archivo .env

config(); //esto lo que hace es leer el archivo .env y setear las variables de entorno

//seteo una variable de entorno para el puerto que esta en el archivo config.js
//LAS VARIABLES DE ENTORNO VAN EN MAYUSCULA
export default {
    port: process.env.PORT || 3000, //en caso de que exista la variable de entorno en el archivo .env con el puerto del servidor usala, sino por defecto usa el 3000
  
    // host: process.env.DB_HOST || '', //en caso de que exista la variable de entorno en el archivo .env con el host de la base de datos usala, sino por defecto usa el ''
    dbUser: process.env.DB_USER || '', //en caso de que exista la variable de entorno en el archivo .env con el usuario de la base de datos usala, sino por defecto usa el ''
    dbPassword: process.env.DB_PASSWORD || '', //en caso de que exista la variable de entorno en el archivo .env con el password de la base de datos usala, sino por defecto usa el ''
    database: process.env.DB_NAME || '', //en caso de que exista la variable de entorno en el archivo .env con el nombre de la base de datos usala, sino por defecto usa el ''
    dbServer : process.env.DB_SERVER || '', //en caso de que exista la variable de entorno en el archivo .env con el servidor de la base de datos usala, sino por defecto usa el 'localhost'
    dbDialect : process.env.DB_DIALECT || '',
    rutaPublica : process.env.RUTAPUBLICA || '',
    secretKey : process.env.SECRETKEY,
    rolCliente : process.env.ROLCLIENTE, 
    codigoRolSucursal : process.env.CODROLSUCURSAL,
    codigoRolCliente : process.env.CODROLCLIENTE,
    codigoRolAdministrador : process.env.CODROLADMINISTRADOR,
    
};




