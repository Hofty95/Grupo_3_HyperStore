const db = require('../database/models');
const { Op } = require("sequelize");
const { readJson, writeJson } = require("../data/readWrite");
/* const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."); */

module.exports = {
busqueda: async (req, res) => {
    const { keywords, gama, brand, category} = req.query;
    const categories = await db.Category.findAll()


    let productsFound = db.Product.findAll({
      include : {
        association: "images",
        attributes: ["name"],
      },
    });

    if (keywords) {
      productsFound = db.Product.findAll({
        include : {
          association: "images",
          attributes: ["name"],
        },
        where : {
          [Op.or]: [
          {
            name: {
              [Op.substring]: `%${keywords}%`,
            },
          },
          {
            description: {
              [Op.substring]: `%${keywords}%`,
            },
          }
        ]
      }
    });
  }

    if (gama) {
      productsFound = db.Product.findAll({
        include : {
          association: "images",
          attributes: ["name"],
        },
        where : {gamaId : gama}
      })
    }

    if (brand) {
      productsFound = db.Product.findAll({
        include : {
          association: "images",
          attributes: ["name"],
        },
        where : {brandId : brand}
      })
    }

    if (category) {
      productsFound = db.Product.findAll({
        include: [
          {
            model: db.Category,
            as: 'categories',
            where: {
              name: {
                [Op.substring]: `%${category}%`,
              },
            },
            attributes: ['id', 'name'],
          },
          {
            model: db.Image,
            as: 'images',
            attributes: ['name'],
          },
        ],
      });
    }
//return res.send(productsFound)
    Promise.all([productsFound])
    .then(([productsFound])=>{
      return res.render("product/busqueda", {
        title: "Search",
        productsFound,
        categories,
        numSearched: productsFound.length,
      }); 
    })
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
    const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
