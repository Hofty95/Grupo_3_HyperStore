const products = require("../data/products.json");

const {readJson, writeJson} = require("../data/readWrite")

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
        const id = req.params.id;
        const product = products.find(product => product.id === +id);
        
        return res.render('product/detalle', {
            ...product
        })
    },
    confirmRemove : (req, res) => {
        const id = req.params.id;
        const product = products.find(product => product.id === +id);
        

        return res.render('product/confirmRemove', {
            ...product
        })
    },
    remove : (req, res) => {
        const id = req.params.id;
        const deleteProduct = products.filter(product => product.id !== +id);

        writeJson('products.json', deleteProduct);
        res.redirect(`/admin/dashboard`)
    }
}