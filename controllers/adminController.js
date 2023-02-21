const fs = require("fs");
const path = require("path")

const categories = require("../data/categories.json");
const products = require("../data/products.json");
const users = require("../data/users.json");

const {readJson, writeJson} = require("../data/readWrite")

module.exports = {
    Admin : (req, res) => {
    const products = readJson("../data/products.json")
        return res.render("admin/dashboard",{
            title: "HyperStore | dashboard",
            categories,
            products,
            users
        })
    },
    storeProduct : (req, res) => {
        const products = readJson('products.json')
        const {code, name, price, discount, discountAmount, description, subDescription, category,image} = req.body
        const newProduct = {
            id : products[products.length - 1].id + 1,
            code : code,
            name : name,
            price : +price,
            discount : discount ? true : false,
            discountAmount : +discountAmount,
            description : description.trim(),
            subDescription : subDescription.trim(),
            category : category,
            images : req.files.map(file=> file.filename),
        }
       // return res.send(newProduct)
 
        products.push(newProduct)

        writeJson('products.json', products)

        res.redirect("/admin/dashboard");
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

    }
}