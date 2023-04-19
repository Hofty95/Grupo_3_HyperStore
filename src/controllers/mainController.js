const db = require("../database/models");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
  Home: async (req, res) => {
    try {
      
    
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
          toThousand,
        });
      } catch (error) {
      console.log(error.message)
      }
  },
  Help: (req, res) => {
    return res.render("help", {
      title: "Help",
    });
  },
  p404: (req, res) => {
    return res.render("404");
  },
};
