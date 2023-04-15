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
        const gamas = db.Gama.findAll()
        const brands = db.Brand.findAll()
        
        Promise.all([products,users,categories,gamas,brands])
            .then(([products,users,categories,gamas,brands])=>{
                return res.render("admin/dashboard",{
                    title: "HyperStore | dashboard",
                    categories,
                    products,
                    users,
                    gamas,
                    brands
                })
            })
            .catch(error => console.log(error))

    },
    storeProduct : (req, res) => {
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            const {name, price, discount, description, specifications, category, gama, brand} = req.body

            db.Product.create({
                name : name.trim(),
                price : +price,
                discount : +discount,
                description : description.trim(),
                specifications : specifications.trim(),
                gamaId : +gama,
                brandId : +brand
            })
            .then((product) => {
             req.files.forEach( async (image) => {
                    await db.Image.create({
                        name : image.filename,
                        productId : product.id
                    })
                });
                
                return res.redirect("/admin/dashboard");
            })
            .catch(error => console.log(error))

        }else{

            const products = db.Product.findAll()
            const categories = db.Category.findAll()
            const users = db.User.findAll()
            const gamas = db.Gama.findAll()
            const brands = db.Brand.findAll()
            
            Promise.all([products,users,categories,gamas,brands])
                .then(([products,users,categories,gamas,brands])=>{
                    return res.render("admin/dashboard",{
                        title: "HyperStore | dashboard",
                        categories,
                        products,
                        users,
                        gamas,
                        brands,
                        errors : errors.mapped(),
                        old : req.body
                    })
                })
                .catch(error => console.log(error))
        }
    },
    editProduct : (req, res) => {

        const {id} = req.params
        const productToEdit = db.Product.findByPk(id);
        const categories = db.Category.findAll();
        const gamas = db.Gama.findAll();
        const brands = db.Brand.findAll();

        Promise.all([productToEdit,categories,gamas,brands])
        .then(([productToEdit,categories,gamas,brands])=>{
            return res.render("admin/dashboard_edit",{
                title: "HyperStore | edit",
                categories,
                ...productToEdit.dataValues,
                gamas,
                brands
            })            
        })
        .catch(error => console.log(error));
    },
    saveEditProduct : (req, res) => {
        const errors = validationResult(req)

        if (errors.isEmpty()) {
            const {id} = req.params;
            const {name, price, discount, description, specifications, category, gama, brand} = req.body

            db.Product.update(
            {
                name : name.trim(),
                price : +price,
                discount : +discount,
                description : description.trim(),
                specifications : specifications.trim(),
                gamaId : +gama,
                brandId : +brand
            },
            {
                where : {
                    id
                }
            }
            )
            .then(() =>{
                return res.redirect("/admin/dashboard");                
            })
            .catch(error => console.log(error))

        }else{

            const {id} = req.params
            const productToEdit = db.Product.findByPk(id);
            const categories = db.Category.findAll();
            const gamas = db.Gama.findAll();
            const brands = db.Brand.findAll();
    
            Promise.all([productToEdit,categories,gamas,brands])
            .then(([productToEdit,categories,gamas,brands])=>{
                return res.render("admin/dashboard_edit",{
                    title: "HyperStore | edit",
                    categories,
                    ...productToEdit.dataValues,
                    gamas,
                    brands,
                    errors : errors.mapped(),
                    old : req.body
                })            
            })
            .catch(error => console.log(error));

        }
    }
}