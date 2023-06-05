const db = require("../database/models");
const { Op } = require("sequelize");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = {
  busqueda: async (req, res) => {
    const { keywords, gama, brand, category, state } = req.query;
    const categories = await db.Category.findAll();
    const brands = await db.Brand.findAll();

    let productsFound = await db.Product.findAll({
      include: [
        {
          model: db.Category,
          as: "categories",
          attributes: ["id", "name"],
        },
        {
          model: db.Image,
          as: "images",
          attributes: ["name"],
        },
        {
          association: "usersFavorites",
        },
      ],
    });

    let filteredProducts = productsFound;

    if (!keywords) {
      productsFound = [];
    }

    if (keywords) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.includes(keywords) ||
          product.description.includes(keywords)
      );
    }

    if (gama) {
      filteredProducts = filteredProducts.filter(
        (product) => product.gamaId == gama
      );
    }

    if (brand) {
      filteredProducts = filteredProducts.filter(
        (product) => product.brandId == brand
      );
    }

    if (category) {
      filteredProducts = filteredProducts.filter((product) =>
        product.categories.some((cat) => cat.name.includes(category))
      );
    }

    if (state === "desc" || state === "asc") {
      const order = state === "desc" ? "DESC" : "ASC";
      filteredProducts.sort(
        (a, b) => (a.price - b.price) * (order === "ASC" ? 1 : -1)
      );
    }

    filteredProducts = filteredProducts.map((product) => {
      const productMap = {
        ...product.dataValues,
        isFavorite: false,
      };
      if (
        product.usersFavorites.some(
          (user) => user.id === req.session.userLogin?.id
        )
      ) {
        productMap.isFavorite = true;
      }
      return productMap;
    });

    console.log("filteredProducts",filteredProducts)

    const categoryFilter = category ? `category=${category}` : "";
    const brandFilter = brand ? `brand=${brand}` : "";

    Promise.all([productsFound]).then(([productsFound]) => {
      return res.render("product/busqueda", {
        title: "Search",
        productsFound: filteredProducts,
        categories,
        numSearched: filteredProducts.length,
        brands,
        toThousand,
        keywords,
        categoryFilter,
        brandFilter,
        category,
        brand,
      });
    });
  },
  showAllProducts: async (req, res) => {
    const categories = db.Category.findAll();
    const brands = db.Brand.findAll();

    let allProducts = db.Product.findAll({
      include: {
        association: "images",
        attributes: ["name"],
      },
    });

    Promise.all([allProducts, categories, brands]).then(
      ([allProducts, categories, brands]) => {
        return res.render("product/allProducts", {
          title: "Productos",
          allProducts,
          categories,
          brands,
          toThousand,
        });
      }
    );
  },
  carrito: (req, res) => {
    const categories = db.Category.findAll();
    const brands = db.Brand.findAll();

    Promise.all([categories, brands]).then(([categories, brands]) => {
      return res.render("product/carrito", {
        title: "Hyper Store | Carrito",
        categories,
        brands,
      });
    });
  },
  category: (req, res) => {
    const categories = db.Category.findAll();
    const brands = db.Brand.findAll();

    Promise.all([categories, brands]).then(([categories, brands]) => {
      return res.render("product/category", {
        title: "Hyper Store | Category",
        categories,
        brands,
      });
    });
  },
  detalle: (req, res) => {
    const toThousand = (n) =>
      n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const categories = db.Category.findAll();
    const brands = db.Brand.findAll();

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
    Promise.all([product, ofertProducts, categories, brands]).then(
      ([product, ofertProducts, categories, brands]) => {
        return res.render("product/detalle", {
          title: "Hyper Store | Detalle de producto",
          ...product.dataValues,
          toThousand,
          ofertProducts,
          categories,
          brands,
        });
      }
    );
  },
  confirmRemove: (req, res) => {
    const id = req.params.id;
    const product = db.Product.findByPk(id);
    const categories = db.Category.findAll();
    const brands = db.Brand.findAll();

    Promise.all(product).then((product) => {
      return res.render("product/confirmRemove", {
        title: "HyperStore | remove",
        ...product.dataValues,
        categories,
        brands,
      });
    });
  },
  remove: (req, res) => {
    const { id } = req.params;
    db.productCategories
      .destroy({ where: { productId: id } })
      .then(async () => {
        await db.Cart.destroy({ where: { productId: id } });
        await db.Product.destroy({ where: { id: id } });
        return res.redirect(`/admin/dashboard`);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
