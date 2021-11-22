const { Sequelize } = require('sequelize');

const db = new Sequelize('uptasknode', 'root', 'bootcamp159', {
    host: 'localhost',
    dialect: 'mysql'
    
    
    

  });

module.exports = db;

