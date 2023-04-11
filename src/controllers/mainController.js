const db = require("../database/models");
const product = require("../database/models/product");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
  Home: (req, res) => {
    const products = db.Product.findAll({
      include: [
        {
          association: "images",
          attributes: ["name"],
        },
      ],
    });

    const categoryPc = db.Category.findOne({
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

    Promise.all([products, categoryPc])
      .then(([products, categoryPc]) => {
      //return res.send(categoryPc)
      
        return res.render("home", {
          title: "HyperStore | Home",
          products,
          productsPc : categoryPc.products,
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
