module.exports = {
    busqueda:(req,res) => {
        return res.render('product/busqueda')
    },
    carrito:(req,res) => {
        return res.render('product/carrito')
    },
    category:(req,res) => {
        return res.render('product/category')
    },
    detalle:(req,res) => {
        return res.render('product/detalle')
    }
}