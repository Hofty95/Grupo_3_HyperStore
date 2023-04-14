const db = require('../database/models');
const { Op } = require("sequelize");
const { readJson, writeJson } = require("../data/readWrite");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
busqueda: async (req, res) => {
  let lowGama; 
  if(req.query.gama === 'low'){
     lowGama = {
      include : [
        {
          association: "images",
          attributes: ["name"],
        },
        {
          association: "gama",
          attributes: ["id","name"]
        },
        {
        as:'categories',
        model:db.Category,
        include:{all:true}
        }
      ],  
      where : {
        gamaId : 1
      },
    }
  }

  let midGama;

  if(req.query.gama === 'mid'){
    midGama = {
     include : [
       {
         association: "images",
         attributes: ["name"],
       },
       {
         association: "gama",
         attributes: ["id","name"]
       },
       {
       as:'categories',
       model:db.Category,
       include:{all:true}
       }
     ],  
     where : {
       gamaId : 2
     },
   }
 }

 let highGama;
 if(req.query.gama === 'high'){
  highGama = {
   include : [
     {
       association: "images",
       attributes: ["name"],
     },
     {
       association: "gama",
       attributes: ["id","name"]
     },
     {
     as:'categories',
     model:db.Category,
     include:{all:true}
     }
   ],  
   where : {
     gamaId : 3
   },
 }
}

    const keyword = req.query.keywords;
    const categories = await db.Category.findAll()
    const productsGamas = await db.Product.findAll( lowGama || midGama || highGama,{
      include: [{
        as:'categories',
        model:db.Category,
      },
      {
        association: "images",
        attributes: ["name"],
      }],
    });

 /*    const productsFound = await db.Product.findAll({
      include: [{
        as:'categories',
        model:db.Category,
        include:{all:true}
      }],
      where: {
        [Op.or]: [
          {
            name: {
              [Op.substring]: keyword,
            },
          },
          {
            description: {
              [Op.substring]: keyword,
            },
          }
        ],
      },
    }); */

    const categoriesProducts = await db.Product.findAll({
      attributes : ["id","name","price","discount","description","specifications","gamaId","brandId"],
      include : [
        {
          association: "images",
          attributes: ["name"],
        },
        {
        as:'categories',
        model:db.Category,
        attributes : ["id","name"]
        }
      ],
      where: {
        [Op.or]: [
          {
            name: {
              [Op.substring]: keyword,
            },
          },
          {
            description: {
              [Op.substring]: keyword,
            },
          }
        ],
      },
    })
    
return res.send(categoriesProducts)
    return res.render("product/busqueda", {
      title: "Search",
      productsGamas,
      categoriesProducts,
      categories,
      numSearched: productsGamas.length || categoriesProducts.length,
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
