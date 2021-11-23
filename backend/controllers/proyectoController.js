const data = require("../models/Proyectos");
const slug = require("slug");
const { v4: uuidv4 } = require("uuid");
const Proyectos = require("../models/Proyectos");
const { where } = require("sequelize/dist");

exports.home = async (req, res) => {
  const data = await Proyectos.findAll();
  res.render("index", {
    nombrePagina: "Proyectos",
    data,
  });
};

exports.formularioProyecto = async (req, res) => {
  const data = await Proyectos.findAll();

  res.render("proyecto", {
    nombrePagina: "Nuevo Proyecto",
    data,
  });
};

exports.newProyect = async (req, res) => {
  const data = await Proyectos.findAll();
  const { nombre } = req.body;
  let errores = [];

  if (!nombre) {
    errores.push({ texto: "Agrega un nombre al proyecto" });
  }

  if (errores.length > 0) {
    res.render("proyecto", {
      nombrePagina: "Nuevo Proyecto",
      errores,
      data,
    });
  } else {
    const record = uuidv4().slice(30);
    const url = slug(nombre).toLowerCase();
    const data = await Proyectos.create({ nombre, url, record });
    res.redirect("/");
  }
};

exports.nosotros = (req, res) => {
  res.send("Aqui la página de Nosotros");
};

exports.paginaPorUrl = async (req, res) => {
  const data = await Proyectos.findAll();
  const proyecto = await Proyectos.findOne({
    where: {
      url: req.params.url,
    },
  });

  res.render("tareas", {
    nombrePagina: "Tareas del Proyecto",
    proyecto,
    data,
  });
};
