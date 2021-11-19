import express from 'express';

const router = express.Router();

export default router

//Importando el Controlador
import proyectoControllers from '../controllers/proyectoController.js';



    router.get('/', proyectoControllers.home);
    
    router.get('/nosotros', proyectoControllers.nosotros);
    
    router.get('/contacto', proyectoControllers.contacto);




