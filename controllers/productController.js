module.exports = {
    busqueda:(req,res) => {
        return res.render('busqueda')
    },
    carrito:(req,res) => {
        return res.render('carrito')
    },
    category:(req,res) => {
        return res.render('category')
    },
    detalle:(req,res) => {
        return res.render('detalle')
    }
}