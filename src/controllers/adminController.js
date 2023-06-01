const db = require("../database/models");
const { validationResult } = require("express-validator");

module.exports = {
  Admin: (req, res) => {
    const products = db.Product.findAll();
    const categories = db.Category.findAll();
    const users = db.User.findAll();
    const gamas = db.Gama.findAll();
    const brands = db.Brand.findAll();

    Promise.all([products, users, categories, gamas, brands])
      .then(([products, users, categories, gamas, brands]) => {
        return res.render("admin/dashboard", {
          title: "HyperStore | dashboard",
          categories,
          products,
          users,
          gamas,
          brands,
        });
      })
      .catch((error) => console.log(error));
  },
  storeProduct: (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      const {
        name,
        price,
        discount,
        description,
        specifications,
        gama,
        brand,
      } = req.body;

      let categories = new Array(req.body.categories).flat();


      console.log(categories)

      db.Product.create({
        name: name.trim(),
        price: +price,
        discount: +discount,
        description: description.trim(),
        specifications: specifications.trim(),
        gamaId: +gama,
        brandId: +brand,
      })
        .then((product) => {
          req.files.forEach(async (image) => {
            await db.Image.create({
              name: image.filename,
              productId: product.id,
            });
          });
          categories.forEach(async (category) => {
            await db.productCategories.create({
              productId: product.id,
              categoryId: category,
            });
          });

          return res.redirect("/admin/dashboard");
        })
        .catch((error) => console.log(error));
    } else {
      const products = db.Product.findAll();
      const categories = db.Category.findAll();
      const users = db.User.findAll();
      const gamas = db.Gama.findAll();
      const brands = db.Brand.findAll();

      Promise.all([products, users, categories, gamas, brands])
        .then(([products, users, categories, gamas, brands]) => {
          return res.render("admin/dashboard", {
            title: "HyperStore | dashboard",
            categories,
            products,
            users,
            gamas,
            brands,
            errors: errors.mapped(),
            old: req.body,
          });
        })
        .catch((error) => console.log(error));
    }
  },
  editProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const productToEdit = await db.Product.findByPk(id, {
        include: [
          {
            association: "categories",
            attributes: ["id", "name"],
          },
        ],
      });

      const allCategories = await db.Category.findAll();
      const gamas = await db.Gama.findAll();
      const brands = await db.Brand.findAll();

      return res.render("admin/dashboard_edit", {
        title: "HyperStore | edit",
        allCategories,
        ...productToEdit.dataValues,
        gamas,
        brands,
      });
    } catch (error) {
      console.log(error);
    }
  },
  saveEditProduct: (req, res) => {
    const errors = validationResult(req);
  
    if (errors.isEmpty()) {
      const { id } = req.params;
      const {
        name,
        price,
        discount,
        description,
        specifications,
        gama,
        brand,
      } = req.body;

      let categories = new Array(req.body.categories).flat();

      console.log(categories);

      db.Product.update(
        {
          name: name.trim(),
          price: +price,
          discount: +discount,
          description: description.trim(),
          specifications: specifications.trim(),
          gamaId: +gama,
          brandId: +brand,
        },
        {
          where: {
            id: id,
          },
        }
      )
        .then( async (product) => {
          categories.forEach(async (category) => {
            await db.productCategories.update(
              {
                categoryId: category,
              },
              {
                where: {
                  productId: id,
                }
              }
            );
          })
          req.files.length && 
          await db.Image.destroy({
            where : {
              productId: id
            }
          })
          req.files.forEach(async (image) => {
            await db.Image.create(
            {
              name: image.filename,
              productId: id
            });
          });
          return res.redirect("/admin/dashboard");
        })
        .catch((error) => console.log(error));
    } else {
      const { id } = req.params;
      const productToEdit = db.Product.findByPk(id, {
        include: [
          {
            association: "categories",
            attributes: ["id", "name"],
          },
        ],
      });
      const allCategories = db.Category.findAll();
      const gamas = db.Gama.findAll();
      const brands = db.Brand.findAll();

      Promise.all([productToEdit, allCategories, gamas, brands])
        .then(([productToEdit, allCategories, gamas, brands]) => {
          return res.render("admin/dashboard_edit", {
            title: "HyperStore | edit",
            allCategories,
            ...productToEdit.dataValues,
            gamas,
            brands,
          });
        })
        .catch((error) => console.log(error));
    }
  },
};
