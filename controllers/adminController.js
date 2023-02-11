const fs = require("fs");
const path = require("path")

const categories = require("../data/categories.json");
const products = require("../data/products.json");
const users = require("../data/users.json");

const {readJson, writeJson} = require("../data/readWrite")

module.exports = {
    Admin : (req, res) => {
        return res.render("admin/dashboard",{
            categories,
            products,
            users
        })
    },
    storeProduct : (req, res) => {
        const products = readJson('products.json')
        const {code, name, price, discount, discountAmount, description, subDescription, category} = req.body
        const newProduct = {
            id : products[products.length - 1].id + 1,
            code : code,
            name : name,
            price : price,
            discount : discount,
            discountAmount : discountAmount,
            description : description,
            subDescription : subDescription,
            category : category,
            Image : null
        }

        products.push(newProduct)

        writeJson('products.json', products)

        res.redirect("/admin/dashboard");
    },
    editProduct : (req, res) => {

    },
}