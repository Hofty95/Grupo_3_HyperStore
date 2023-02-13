const products = require("../data/products.json");

const {readJson, writeJson} = require("../data/readWrite")
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
    busqueda:(req,res) => {
        return res.render('product/busqueda',{
            title: 'Search'
        })
    },
    carrito:(req,res) => {
        return res.render('product/carrito',{
            title: 'Carrito'
        })
    },
    category:(req,res) => {
        return res.render('product/category',{
            title:'Category'
        })
    },
    detalle:(req,res) => {
        const {id} = req.params;
        const ofertProduct = products.filter(product => product.discount)
        const product = products.find((product) => product.id === +id)
        return res.render('product/detalle',{
            title: 'Detalle de producto',
            ...product,
            products,
            ofertProduct,
            toThousand
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