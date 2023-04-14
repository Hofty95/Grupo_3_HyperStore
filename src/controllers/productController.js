const db = require('../database/models');
const { Op } = require("sequelize");
const { readJson, writeJson } = require("../data/readWrite");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
/* const Swal = require('sweetalert2') */

module.exports = {
  busqueda: (req, res) => {

    if (!req.query.keywords && !req.query.state && !req.query.category) {
      writeJson("queriesSearch.json" ,{})
    }
    
    let queries = readJson("queriesSearch.json")

    writeJson("queriesSearch.json" ,{ ...queries, ...req.query })

    queries = readJson("queriesSearch.json")

    const { keywords, gama, brand } = queries;

    let productsFound = db.Product.findAll();

    if (keywords) {
      productsFound = db.Product.findAll({
        where : {
          [Op.or]: [
          {
            name: {
              [Op.substring]: `%${keyword}%`,
            },
          },
          {
            description: {
              [Op.substring]: `%${keyword}%`,
            },
          }
        ]
      }
    });
  }

    if (gama) {
      productsFound = db.findAll({
        where : {gamaID : gama}
      })
    }

    if (brand) {
      productsFound = db.findAll({
        where : {brandId : brand}
      })
    }


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
    const product = db.Product.findByPk(id)

    Promise.all(product)
    .then((product) => {
      return res.render("product/confirmRemove", {
        title: "HyperStore | remove",
        ...product.dataValues
      });
    })
  },
  remove: (req, res) => {
    const {id} = req.params
    db.productCategories.destroy({where : {productId : id}})
    .then(async () => {
      await db.Product.destroy({where: {id : id}})
      return res.redirect(`/admin/dashboard`);
    })
  },
};
