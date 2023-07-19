import {Router} from 'express';


//EL ADMIN VA A PODER CREAR USUARIOS, EL CLIENTE SOLO PUEDE CREAR SU PROPIO USUARIO 

import * as userController from '../controllers/usuario.controller';
import {authJwt} from '../middleware/index.js';

const router = Router();

router.get('/getUsuarios',[authJwt.verifyToken,authJwt.verifyRolAdmin],userController.getAllUsuarios);

router.post('/crearUsuario',[authJwt.verifyToken,authJwt.verifyRolAdmin] ,userController.crearUsuario);

// router.put('/updateUsuario/:id', updateUsuario);

// router.delete('/eliminarUsuario/:id', deleteUsuario);

// router.get('/getUsuario/:id', getUsuarioById);


export default router;