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

const productsMidGama = db.Product.findAll({

  include : [
    {
      association: "images",
      attributes: ["name"],
    },
    {
      association: "gama",
      attributes: ["id","name"]
    }
  ],  
  where : {
    gamaId : 2
  },
})

    Promise.all([products, categoryPc,productsMidGama])
      .then(([products, categoryPc, productsMidGama]) => {
        console.log(productsMidGama)
      //return res.send(productsMidGama)
      
        return res.render("home", {
          title: "HyperStore | Home",
          products,
          productsPc : categoryPc.products,
          productsMidGama
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
