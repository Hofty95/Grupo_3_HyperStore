const fs = require("fs");
const path = require("path")

const categories = require("../data/categories.json");
const products = require("../data/products.json");
const users = require("../data/users.json");

const readJson = (json) => { return JSON.parse(fs.readFileSync(path.resolve(__dirname,json)))};
const writeJson = (json, array) => { return fs.writeFileSync(path.resolve(__dirname, json), JSON.stringify(array, null ,3), "utf-8")};

module.exports = {
    Admin : (req, res) => {
        return res.render("admin/dashboard",{
            categories,
            products,
            users
        })
    },
    storeProduct : (req, res) => {
        return res.send(req.body)
    },
    editProduct : (req, res) => {

    }
}