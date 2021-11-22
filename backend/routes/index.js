/* import express from 'express'; */
const express = require('express')
const router = express.Router();
const { body } = require('express-validator')


//Importando el Controlador
const proyectoControllers = require('../controllers/proyectoController.js') ;



    router.get('/', proyectoControllers.home);
    
    router.get('/nuevo-proyecto', proyectoControllers.formularioProyecto);

    router.post('/nuevo-proyecto',
    body('nombre').not().isEmpty().trim().escape(),
    proyectoControllers.newProyect);

    module.exports = router;

    