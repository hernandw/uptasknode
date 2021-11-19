import express from 'express';
/* const express = require('express'); */
const app = express();
const port = process.env.PORT || 3000;
/* const router = require('./routes'); */
import router from './routes/index.js';

app.listen(port, (req, res)=>  {
    console.log(`Servidor Activo on ${port}` )
});

// Enlace a routes

app.use('/', router);

