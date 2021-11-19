import express from 'express';
/* const express = require('express'); */
const app = express();
const port = process.env.PORT || 3000;
/* const router = require('./routes'); */
import router from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.listen(port, (req, res)=>  {
    console.log(`Servidor Activo on ${port}` )
});

//Archivos Publicos
app.use(express.static('public'));

//habilitando pug
app.set('view engine', 'pug');

// habilitar views
app.set('views', path.join(__dirname, './views'));

// Enlace a routes
app.use('/', router);

