const products = require("../data/products.json");
const db = require('../database/models');
const { Op } = require("sequelize");
const { readJson, writeJson } = require("../data/readWrite");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
/* const Swal = require('sweetalert2') */

module.exports = {
  busqueda: (req, res) => {
    const products = readJson("products.json");
    const categories = readJson("categories.json");

    if (!req.query.keywords && !req.query.state && !req.query.category) {
      writeJson("queriesSearch.json" ,{})
    }
    
    let queries = readJson("queriesSearch.json")

    writeJson("queriesSearch.json" ,{ ...queries, ...req.query })

    queries = readJson("queriesSearch.json")

    const { keywords, state, category } = queries;

    let productsFound = products;

    if (keywords) {
      productsFound = productsFound.filter(
        (product) =>
          product.name.toLowerCase().includes(keywords.toLowerCase()) ||
          product.description.toLowerCase().includes(keywords.toLowerCase()) ||
          product.category.toLowerCase().includes(keywords.toLowerCase())
      );
    }

    if (state) {
      productsFound = productsFound.sort((before, after) => {
        if (state === "asc") {
          return before.price - after.price;
        } else {
          return after.price - before.price;
        }
      });
    }

    if (category) {
      productsFound = productsFound.filter((product) => {
        return product.category === category;
      });
    }

    let numSearched = productsFound.length

    return res.render("product/busqueda", {
      title: "Search",
      productsFound,
      categories,
      numSearched
    });
  },
  carrito: (req, res) => {
    return res.render("product/carrito", {
      title: "Hyper Store | Carrito",
    });
  },
  category: (req, res) => {
    return res.render("product/category", {
      title: "Hyper Store | Category",
    });
  },
  detalle: (req, res) => {

    const product = db.Product.findByPk(req.params.id,{
      include : [
        {
          association : 'images',
          attributes : ['name']
        }
      ]
    })
    

    const ofertProducts = db.Product.findAll({
      include : [
        {
          association : 'images',
          attributes : ['name']
        }
      ],
      limit : 6,
      where: {
        discount: {
          [Op.ne]: 25,
        },
      },
    })
    Promise.all([product,ofertProducts])
    .then(([product,ofertProducts]) =>{
      return res.render('product/detalle',{
        title : 'Hyper Store | Detalle de producto',
        ...product.dataValues,
        toThousand,
        ofertProducts
      })
    }) 
  },
  confirmRemove: (req, res) => {
    const id = req.params.id;
    const product = products.find((product) => product.id === +id);

    return res.render("product/confirmRemove", {
      title: "HyperStore | remove",
      ...product,
    });
  },
  remove: (req, res) => {
    const id = req.params.id;
    const deleteProduct = products.filter((product) => product.id !== +id);

    writeJson("products.json", deleteProduct);
    res.redirect(`/admin/dashboard`);
  },
};
