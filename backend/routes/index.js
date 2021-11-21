import express from 'express';

const router = express.Router();

export default router

//Importando el Controlador
import proyectoControllers from '../controllers/proyectoController.js';



    router.get('/', proyectoControllers.home);
    
    router.get('/nuevo-proyecto', proyectoControllers.formularioProyecto);

    router.post('/nuevo-proyecto', proyectoControllers.newProyect);