// este archivo va a tener las url de los metodos, va a viajar a controller y ahi se va a ejecutar la logica de negocio

import { Router } from 'express'; //este router es para poder crear las rutas URL
import config from '../config';



import {getSucursales} from '../controllers/sucursal.controller'; 

const router = Router(); //instancio el router como una constante para poder usarlo

router.get('/getSucursales', getSucursales); //creo la ruta URL y le paso el metodo que quiero que se ejecute cuando se llame a esa ruta

// router.post('/crearSucursal', nuevaSucursal); //creo la ruta URL y le paso el metodo que quiero que se ejecute cuando se llame a esa ruta

// router.get('/getSucursal/:id', getSucursalById); //creo la ruta URL y le paso el metodo que quiero que se ejecute cuando se llame a esa ruta

// router.delete('/eliminarSucursal/:id', eliminarSucursal); //creo la ruta URL y le paso el metodo que quiero que se ejecute cuando se llame a esa ruta

// router.put('/updateSucursal/:id', updateSucursal); //creo la ruta URL y le paso el metodo que quiero que se ejecute cuando se llame a esa ruta








export default router; //exporto el router para poder usarlo en otros archivos
