/* import express from 'express'; */
const express = require('express')
const router = express.Router();



//Importando el Controlador
const proyectoControllers = require('../controllers/proyectoController.js') ;



    router.get('/', proyectoControllers.home);
    
    router.get('/nuevo-proyecto', proyectoControllers.formularioProyecto);

    router.post('/nuevo-proyecto', proyectoControllers.newProyect);

    module.exports = router;