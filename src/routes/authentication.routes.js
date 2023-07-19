// este archivo va a tener las url de los metodos, va a viajar a controller y ahi se va a ejecutar la logica de negocio

import { Router } from 'express'; //este router es para poder crear las rutas URL
import { verifyUsuario } from '../middleware/index.js';
import { userSignIn, userSignUp } from '../controllers/authentication.controller.js';

const router = Router(); //instancio el router como una constante para poder usarlo


router.post('/signUp',[verifyUsuario.validarResistroUsuario] ,userSignUp); // sign up es para registrarse


router.post('/signin', userSignIn); 




export default router; //exporto el router para poder usarlo en otros archivos  