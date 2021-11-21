export const home = (req, res) => {
    res.render('index', {
        nombrePagina: 'Proyectos'
    })
}

export const formularioProyecto = (req, res)=>{
    res.render('proyecto', {
        nombrePagina: 'Nuevos Proyectos'
    });

}

export const newProyect = (req, res)=>{
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


export const nosotros = (req, res)=>{
    res.send('Aqui la página de Nosotros');
}

export default {
    home,
    formularioProyecto,
    nosotros,
    newProyect
}