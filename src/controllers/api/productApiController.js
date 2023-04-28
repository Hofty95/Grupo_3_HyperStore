const db = require("../../database/models");
const { Op } = require("sequelize");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
  Home: async (req, res) => {
    try {
      const products = await getAllProducts();
      return res.send(req.json)
      return res.status(200).json({
        ok : true,
        data : products,
        meta : {
          status : 200,
          total : products.length
        }
      })
      } catch (error) {
      console.log(error.message)
      }
  },
busqueda: async (req, res) => {
    const { keywords, gama, brand, category} = req.query;
    const categories = await db.Category.findAll()
    const brands = await db.Brand.findAll()


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
        brands,
        toThousand
      }); 
    })
  },
  carrito: (req, res) => {
    const categories =  db.Category.findAll();
    const brands =  db.Brand.findAll();

    Promise.all([categories,brands])
    .then(([categories,brands])=>{
        return res.render("product/carrito", {
             title : "Hyper Store | Carrito",
            categories,
            brands,
        });            
    })
  },
  category: (req, res) => {
    const categories =  db.Category.findAll();
    const brands =  db.Brand.findAll();

    Promise.all([categories,brands])
    .then(([categories,brands])=>{
        return res.render("product/category", {
            title: "Hyper Store | Category",
            categories,
            brands,
        });
    })
  },
  detalle: (req, res) => {
    const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const categories =  db.Category.findAll();
    const brands =  db.Brand.findAll();

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
    Promise.all([product,ofertProducts,categories,brands])
    .then(([product,ofertProducts,categories,brands]) =>{
      return res.render('product/detalle',{
        title : 'Hyper Store | Detalle de producto',
        ...product.dataValues,
        toThousand,
        ofertProducts,
        categories,
        brands
      })
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