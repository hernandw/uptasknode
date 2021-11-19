export const home = (req, res) => {
    res.render('index')
}

export const contacto = (req, res)=>{
    res.send('Aqui la página de Contacto');
}

export const nosotros = (req, res)=>{
    res.send('Aqui la página de Nosotros');
}

export default {
    home,
    contacto,
    nosotros
}