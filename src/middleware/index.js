//en el index voy a importar todo lo que se declare en auth.jwt.js y validarusuario.js y lo voy a exportar, el token me sirve par que el usuario pueda o no acceder a determinadas rutas


import * as authJwt from "./auth.jwt";
import * as verifyUsuario from "./validarLogueo";

export { authJwt, verifyUsuario };


