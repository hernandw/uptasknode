const { Sequelize } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const db = require('../config/db');

const Proyectos = db.define('proyectos', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre : Sequelize.STRING,
    url: Sequelize.STRING,
    record: Sequelize.STRING
}
);
module.exports = Proyectos;