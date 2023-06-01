const db = require("../database/models");
const mappedFavoritesProducts = require("../helpers/mappedFavoritesProducts");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
  Home: async (req, res) => {
    try {
      const categories = await db.Category.findAll();

      const brands = await db.Brand.findAll();

      let products = await db.Product.findAll({
        include: [
          {
            association: "images",
            attributes: ["name"],
          },
          {
            association: "usersFavorites",
          },
        ],
        limit: 10,
      });

      let categoryPc = await db.Category.findOne({
        where: {
          name: "Pc",
        },
        include: [
          {
            association: "products",
            include: ["images", "usersFavorites"],
          },
        ],
      });

      let productsOrder = await db.Product.findAll({
        order: [["name", "ASC"]],
        limit: 6,
        include: [
          {
            association: "images",
            attributes: ["name"],
          },
          {
            association: "usersFavorites",
          },
        ],
      });

      const userInSession = req.session.userLogin;
      products = mappedFavoritesProducts({
        arrProducts: products,
        userInSession,
      });

      categoryPcProducts = mappedFavoritesProducts({
        arrProducts: categoryPc.products,
        userInSession,
      });

      productsOrder = mappedFavoritesProducts({
        arrProducts: productsOrder,
        userInSession,
      });

      return res.render("home", {
        title: "HyperStore | Home",
        products,
        productsPc: categoryPcProducts,
        productsOrder,
        categories,
        brands,
        toThousand,
      });
    } catch (error) {
      console.log(error.message);
    }
  },
  Help: (req, res) => {
    const categories = db.Category.findAll();
    const brands = db.Brand.findAll();

    Promise.all([categories, brands]).then(([categories, brands]) => {
      return res.render("help", {
        title: "Help",
        categories,
        brands,
      });
    });
  },
  p404: (req, res) => {
    return res.render("404");
  },
};
