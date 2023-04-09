const db = require('../database/models')
const {validationResult} = require('express-validator')

const categories = require("../data/categories.json");
const products = require("../data/products.json");
const users = require("../data/users.json");

const {readJson, writeJson} = require("../data/readWrite")

module.exports = {
    Admin : (req, res) => {

        const products = db.Product.findAll()
        const categories = db.Category.findAll()
        const users = db.User.findAll()
        
        Promise.all([products,users,categories])
            .then(([products,categories,users])=>{
                return res.render("admin/dashboard",{
                    title: "HyperStore | dashboard",
                    categories,
                    products,
                    users
                })                
            })

    },
    storeProduct : (req, res) => {
        const products = readJson('products.json')
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            const {code, name, price, discount, discountAmount, description, subDescription, category,image} = req.body
            const newProduct = {
                id : products.length ? products[products.length - 1].id + 1 : 1,
                code : code,
                name : name,
                price : +price,
                discount : discount ? true : false,
                discountAmount : +discountAmount,
                description : description,
                subDescription : subDescription,
                category : category,
                images : req.files.map(file=> file.filename),
            }
       
 
            products.push(newProduct)

            writeJson('products.json', products)

            res.redirect("/admin/dashboard");            
        }else{
            return res.render("admin/dashboard",{
                title: "HyperStore | dashboard",
                categories,
                products,
                users,
                errors : errors.mapped(),
                old : req.body
            })
        }
    },
    editProduct : (req, res) => {
        const products = readJson('products.json');

        const {id} = req.params
        const productToEdit = products.find(product => product.id === +id);


        return res.render("admin/dashboard_edit",{
            title: "HyperStore | edit",
            categories,
            ...productToEdit
        })
    },
    saveEditProduct : (req, res) => {
        const products = readJson('products.json');
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            const {id} = req.params;
            const {code, name, price, discount, discountAmount, description, subDescription, category} = req.body

            let productsEdited = products.map((product) => {
                if (product.id === +id){
                    let productEdited = {
                    id : +id,
                    code : code,
                    name : name,
                    price : price,
                    discount : discount,
                    discountAmount : discountAmount,
                    description : description,
                    subDescription : subDescription,
                    category : category,
                    Image : null
                    };
                    return productEdited
                }
                return product
            })
            writeJson('products.json', productsEdited)

            res.redirect("/admin/dashboard");
        }else{
            const products = readJson('products.json');

            const {id} = req.params
            const productToEdit = products.find(product => product.id === +id);
    
            return res.render("admin/dashboard_edit",{
                title: "HyperStore | edit",
                categories,
                ...productToEdit,
                errors : errors.mapped(),
                old : req.body
            })
        }
    }
}