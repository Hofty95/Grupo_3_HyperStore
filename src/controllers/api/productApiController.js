const db = require("../../database/models");
const { Op } = require("sequelize");
const { getOneProduct, deleteProduct, getProductsByCategoryById } = require("../../services/productServices");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
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
  category: (req,res) => {
    try {
      const {id} = req.params
      const category = getProductsByCategoryById(id);
      return res.status(200).json({
        ok : true,
        data : category,
        meta : {
          status : 200,
          total : 1
        }
      })
    } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg : error.message
    })
    }
    
  },
  detalle: async (req,res) => {
  try {
    const {id} = req.params
    const product = await getOneProduct(id);
    return res.status(200).json({
      ok : true,
      data : product,
      meta : {
        status : 200,
        total : 1,
      }
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg : error.message
    })
  }
  },
  remove: async (req, res) => {
    try {
        const {id} = req.params
        const result = await deleteProduct(id);
        return res.json(result);

    } catch (error) {
      return res.status(500).json({
        msg : error.message
      })
    }
 
  },
};
