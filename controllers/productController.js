const products = require('../data/products.json')
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
        const {id} = req.params;
        
        const product = products.find((product) => product.id === +id)
        return res.render('product/detalle',{
            title: 'Detalle de producto',
            ...product,
            toThousand
        })
    }
}