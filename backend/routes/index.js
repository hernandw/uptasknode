/* import express from 'express'; */
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

//Importando el Controlador
const proyectoControllers = require("../controllers/proyectoController.js");

router.get("/", proyectoControllers.home);

router.get("/nuevo-proyecto", proyectoControllers.formularioProyecto);

router.post(
  "/nuevo-proyecto",
  body("nombre").not().isEmpty().trim().escape(),
  proyectoControllers.newProyect
);

router.get('/proyectos/:url', proyectoControllers.paginaPorUrl);

router.get('/proyectos/editar/:id', proyectoControllers.formularioEditar);

router.post(
  "/nuevo-proyecto/:id",
  body("nombre").not().isEmpty().trim().escape(),
  proyectoControllers.actualizarFormulario
);

module.exports = router;
