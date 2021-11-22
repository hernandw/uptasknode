exports.home = (req, res) => {
    res.render('index', {
        nombrePagina: 'Proyectos'
    })
}

exports.formularioProyecto = (req, res)=>{
    res.render('proyecto', {
        nombrePagina: 'Nuevos Proyectos'
    });

}

exports.newProyect = (req, res)=>{
    const { nombre } = req.body;
let errores = [];

if(!nombre){
    errores.push({'texto' : 'Agrega un nombre al proyecto'})
}

if(errores.length > 0){
    res.render('proyecto', {
        nombrePagina: 'Nuevo Proyecto',
        errores
    })
}
}


exports.nosotros = (req, res)=>{
    res.send('Aqui la página de Nosotros');
}

