const db = require("../database/models");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
      limit : 10
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
          brands,
          toThousand,
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
