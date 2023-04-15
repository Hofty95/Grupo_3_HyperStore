const db = require("../database/models");
const product = require("../database/models/product");

module.exports = {
  Home: async (req, res) => {
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
          model : db.Product,
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
//return res.send(productsOrder)
    Promise.all([products, categoryPc,productsOrder])
      .then(([products, categoryPc,productsOrder]) => {
        return res.render("home", {
          title: "HyperStore | Home",
          products,
          productsPc : categoryPc.products,
          productsOrder
        });
      })
      .catch((error) => console.log(error));
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
