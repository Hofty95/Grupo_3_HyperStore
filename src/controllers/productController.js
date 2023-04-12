const products = require("../data/products.json");
const db = require("../database/models");
const { Op } = require("sequelize");
const { readJson, writeJson } = require("../data/readWrite");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
/* const Swal = require('sweetalert2') */

module.exports = {
  busqueda: async (req, res) => {
    /*  const products = readJson("products.json");
    const categories = readJson("categories.json"); */
    const keyword = req.query.keyword;
    const order = [[state || "asc"]];
    const state = req.query.state;
    const categoryId = req.query.category
    const categories = await db.categories.findAll()
    const products = await db.Product.findAll({
      include: [{
        as:'categories',
        model:db.Category,
        include:{all:true}
      }],
      order,
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
          } /* ,
          ['categories']:{

          } */,
        ],
      },
    });

    if (!keywords && !state && !categoryId) {
      writeJson("queriesSearch.json", {});
    }

    let queries = readJson("queriesSearch.json");

    writeJson("queriesSearch.json", { ...queries, ...req.query });

    queries = readJson("queriesSearch.json");

    let productsFound = products;

 /*    if (keywords) {
      productsFound = productsFound.filter(
        (product) =>
          product.name.toLowerCase().includes(keywords.toLowerCase()) ||
          product.description.toLowerCase().includes(keywords.toLowerCase()) ||
          product.category.toLowerCase().includes(keywords.toLowerCase())
      );
    } */

 /*    if (state) {
      productsFound = productsFound.sort((before, after) => {
        if (state === "asc") {
          return before.price - after.price;
        } else {
          return after.price - before.price;
        }
      });
    } */

    if (queries.category) {
      productsFound = products.categories.filter((category) => {
        return category.id === queries.category;
      })
      .map(category => category.products)
      .flat(3)
      console.log(productsFound)
    }
/* [[{},{}],[{},{}]] */ /* [{},{},{},{}] */
    let numSearched = productsFound.length;

    return res.render("product/busqueda", {
      title: "Search",
      productsFound,
      categories,
      numSearched,
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
    const product = db.Product.findByPk(req.params.id, {
      include: [
        {
          association: "images",
          attributes: ["name"],
        },
      ],
    });

    const ofertProducts = db.Product.findAll({
      include: [
        {
          association: "images",
          attributes: ["name"],
        },
      ],
      limit: 6,
      where: {
        discount: {
          [Op.ne]: 25,
        },
      },
    });
    Promise.all([product, ofertProducts]).then(([product, ofertProducts]) => {
      //console.log(product)
      //console.log(ofertProducts)
      return res.render("product/detalle", {
        title: "Hyper Store | Detalle de producto",
        ...product.dataValues,
        toThousand,
        ofertProducts,
      });
    });
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
