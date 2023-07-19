// este archivo va a tener las url de los metodos, va a viajar a controller y ahi se va a ejecutar la logica de negocio

import { Router } from 'express'; //este router es para poder crear las rutas URL
import config from '../config';

import {authJwt} from '../middleware/index.js'; //al index.js de la carpeta middleware le meto todo lo que declare y lo exporto, asi lo puedo usar en toda la aplicacion

//con esto declaro para poder subir archivos
const uploadFile = require('../middleware/multer.js');


import { createNewProduct, getProducts,getProductById,deleteProduct,updateProduct, getProductosCategoria} from '../controllers/products.controller'; //importo el metodo getProducts del archivo products.controller.js

const router = Router(); //instancio el router como una constante para poder usarlo

router.get('/getProducts', getProducts); //creo la ruta URL y le paso el metodo que quiero que se ejecute cuando se llame a esa ruta

// router.post('/crearProducto', [authJwt.verifyToken, authJwt.verifyRolAdmin] , createNewProduct); // VERIFICO QUE EL USUARIO TENGA UN TOKEN Y QUE TENGA EL ROL DE ADMIN PARA PODER HACER LA PETICION

router.post('/crearProducto', createNewProduct); 

router.get('/getProducto/:id', getProductById); 

router.delete('/eliminarProducto/:id', deleteProduct); //creo la ruta URL y le paso el metodo que quiero que se ejecute cuando se llame a esa ruta

// router.delete('/eliminarProducto/:id',[authJwt.verifyToken, authJwt.verifyRolAdmin] , deleteProduct); 

router.put('/updateProducto/:id', updateProduct);

// router.put('/updateProducto/:id',[authJwt.verifyToken, authJwt.verifyRolAdmin] ,updateProduct); 

router.get('/getProductos', getProductosCategoria)


//ruta para guardar las imagenes en una carpeta del servidor CON VALIDACION
// router.post('/uploadFile',[authJwt.verifyToken, authJwt.verifyRolAdmin],uploadFile(), (req, res) => {
//     debugger;
//     console.log(req.file);
//     if (req.file == undefined) {
//         return res.status(400).json({ message: "Falta el archivo" });
//     }
//     return res.json("/images/" + req.file.filename);

// })


//SIN VALIDACION
router.post('/uploadFile',uploadFile(), (req, res) => {
    debugger;
    console.log(req.file);
    if (req.file == undefined) {
        return res.status(400).json({ message: "Falta el archivo" });
    }
    return res.json("/images/" + req.file.filename);

})



export default router; //exporto el router para poder usarlo en otros archivos