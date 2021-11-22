const data = require("../models/Proyectos");
const slug = require('slug');
exports.home = (req, res) => {
  res.render("index", {
    nombrePagina: "Proyectos",
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
      const url = slug(nombre).toLowerCase();
    const proyecto = await data.create({ nombre, url });
    res.redirect('/');
  }
};

exports.nosotros = (req, res) => {
  res.send("Aqui la página de Nosotros");
};
