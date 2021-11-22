const data = require("../models/Proyectos");
const slug = require('slug');
const { v4: uuidv4 } = require('uuid');
const Proyectos  = require("../models/Proyectos");

exports.home = async (req, res) => {
  const data = await Proyectos.findAll();
    res.render("index", {
    nombrePagina: "Proyectos",
    data
  });
};

exports.formularioProyecto = (req, res) => {
  res.render("proyecto", {
    nombrePagina: "Nuevos Proyectos",
  });
};

exports.newProyect = async (req, res) => {
  const { nombre } = req.body;
  let errores = [];

  if (!nombre) {
    errores.push({ texto: "Agrega un nombre al proyecto" });
  }

  if (errores.length > 0) {
    res.render("proyecto", {
      nombrePagina: "Nuevo Proyecto",
      errores,
    });
  } else {
      const record = uuidv4().slice(30);
      const url = slug(nombre).toLowerCase();
    const proyecto = await data.create({nombre, url, record });
    res.redirect('/');
  }
};

exports.nosotros = (req, res) => {
  res.send("Aqui la página de Nosotros");
};
