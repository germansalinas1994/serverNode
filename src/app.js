const path = require('path'); //esto es para que el servidor pueda acceder a la carpeta public y pueda mostrar las imagenes

import express from "express"; //express es un framework de nodejs que nos permite crear un servidor
import config from "./config";
import cors from "cors"; //los cors son para que el servidor entienda los datos que le llegan en formato json y lo guarda en un req body
import { dbConnection } from "./database/connnection";
import productsRoutes from "./routes/products.routes";
import categoriaRoutes from "./routes/categoria.routes";
import authenticationRoutes from "./routes/authentication.routes";
import sucursalRoutes from "./routes/sucursal.routes";
import usuarioRoutes from "./routes/usuario.routes";

const jwt = require("jsonwebtoken"); //esto es para poder usar el token

//estos son los middlewares que se pueden usar para verificar el token pero hay que investigar mas 


// import { verifyToken } from "./middlewares/authentication";
// import { verifyAdmin } from "./middlewares/authentication";
// import { verifyUser } from "./middlewares/authentication";
// import { verifyUserOrAdmin } from "./middlewares/authentication";
// import { verifyUserOrAdminOrSuperAdmin } from "./middlewares/authentication";
// import { verifySuperAdmin } from "./middlewares/authentication";


import morgan from "morgan"; //morgan es un middleware que nos permite ver las peticiones que llegan al servidor


//usar el token


// Create a new express application instance, ejecutamos la función express, app seria un objeto
const app = express();

app.use(morgan("dev")); //esto es para que el servidor pueda ver las peticiones que le llegan, con esto sale por consola las peticiones que le llegan al servidor
//seteamos el puerto
app.set("port", config.port); //si nos fijamos en config.js, el puerto esta en una variable de entorno, por lo tanto si no existe la variable de entorno, usa el puerto 3000

app.use(cors()); //esto es para que el servidor entienda los datos que le llegan en formato json y lo guarda en un req body
app.use(express.json()); //esto es para que el servidor entienda los datos que le llegan en formato json y lo guarda en un req body

app.use(express.static(config.rutaPublica)); // esta es la ruta donde se van a guardar las imagenes

// app.use(express.static(path.join(__dirname, 'public/images'))); //hago esto para que el servidor pueda acceder a la carpeta public y pueda mostrar las imagenes




app.use(productsRoutes); //esto es para que el servidor entienda las rutas que le llegan
app.use(categoriaRoutes);
app.use(authenticationRoutes);
app.use(sucursalRoutes);
app.use(usuarioRoutes);


async function main() {
  try {
    console.log("Me ejecuto en el puerto " ,app.get('port'));
    console.log("Conectado a la base de datos", await dbConnection.getDatabaseName(),"prueba desde app.js \n \n \n" );
  } catch (error) {
    console.error("Error al conectar con la base de datos", error);
  }
}

main();





export default app;

//siempre se exporta para poder importarlo de otros lugares