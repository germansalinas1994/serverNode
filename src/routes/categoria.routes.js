// este archivo va a tener las url de los metodos, va a viajar a controller y ahi se va a ejecutar la logica de negocio

import { Router } from 'express'; //este router es para poder crear las rutas URL
import { createNewCategoria, deleteCategoria, getCategorias, updateCategoria, getCategoriaById,getProductosCategoria} from '../controllers/categoria.controller';

const router = Router(); //instancio el router como una constante para poder usarlo

router.get('/getCategorias', getCategorias); //creo la ruta URL y le paso el metodo que quiero que se ejecute cuando se llame a esa ruta

router.get('/categoria/:id/productos', getProductosCategoria); //De la categoria tal, traeme todos los proyectos

router.post('/nuevaCategoria', createNewCategoria); //creo la ruta URL y le paso el metodo que quiero que se ejecute cuando se llame a esa ruta

router.get('/getCategoria/:id', getCategoriaById); //creo la ruta URL y le paso el metodo que quiero que se ejecute cuando se llame a esa ruta

router.delete('/eliminarCategoria/:id', deleteCategoria); //creo la ruta URL y le paso el metodo que quiero que se ejecute cuando se llame a esa ruta

router.put('/actualizarCategoria/:id', updateCategoria); //creo la ruta URL y le paso el metodo que quiero que se ejecute cuando se llame a esa ruta


export default router; //exporto el router para poder usarlo en otros archivos