import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, (req, res)=>  {
    console.log(`Servidor Activo on ${port}` )
});

app.get('/', (req, res)=>{
    res.send('Servidor Activo')
});