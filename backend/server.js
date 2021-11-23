/* import express from 'express'; */
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes');
/* import router from './routes/index.js'; */
/* import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); */
const path = require('path')
/* import db from '../backend/config/db'; */
const db = require('../backend/config/db');
require('./models/Proyectos');
const helpers = require('../helpers');
/* const { Validators } = require('express-validators'); */


try{
  db.sync();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


app.listen(port, (req, res)=>  {
    console.log(`Servidor Activo on ${port}` )
});
// Pasar vardump a la aplicación
app.use((req, res, next)=>{
  res.locals.vardump = helpers.vardump;
  next();
});

app.use(express.urlencoded({ extended: true}))

//Archivos Publicos
app.use(express.static('public'));

/* app.use(expressValidators()); */

//habilitando pug
app.set('view engine', 'pug');

// habilitar views
app.set('views', path.join(__dirname, './views'));

// Enlace a routes
app.use('/', router);

