const db = require("../database/models");

module.exports = {
  Home: async (req, res) => {
    try {
      
      const categories = await db.Category.findAll();

      const brands = await db.Brand.findAll();
    
    const products = await db.Product.findAll({
      include: [
        {
          association: "images",
          attributes: ["name"],
        },
      ],
    });

    const categoryPc = await db.Category.findOne({
      where: {
        name: "Pc",
      },
      include: [
        {
          association: "products",
          include: ["images"],
        },
      ],
    });

    const productsOrder = await db.Product.findAll({
      order : [
        ['name', 'ASC']
      ],
      limit : 6,
      include: [
        {
          association: "images",
          attributes: ["name"],
        },
      ],
    })

        return res.render("home", {
          title: "HyperStore | Home",
          products,
          productsPc : categoryPc.products,
          productsOrder,
          categories,
          brands
        });
      } catch (error) {
      console.log(error.message)
      }
  },
  Help: (req, res) => {
    const categories =  db.Category.findAll();
    const brands =  db.Brand.findAll();

    Promise.all([categories,brands])
    .then(([categories,brands])=>{
        return res.render("help", {
        title: "Help",
        categories,
        brands
      })
    })

  },
  p404: (req, res) => {
    return res.render("404");
  },
};
