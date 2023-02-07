module.exports = {
    busqueda:(req,res) => {
        const {keywords} = req.query
        
        return res.render('busqueda',{
            keywords
        })
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