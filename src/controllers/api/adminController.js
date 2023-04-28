const createResponseError = require("../../helpers/createResponseError");
const { getAllProducts, getAllCategories, getAllGamas, getAllBrands, createNewProduct, createImagesForProduct, createCategoriesForProduct } = require("../../services/productServices");
const { getAllUsers } = require("../../services/userServices");
const { validationResult } = require("express-validator");

module.exports = {
  Admin: async (req, res) => {
    try {
    const products = await getAllProducts();
    const categories = await getAllCategories();
    const users = await getAllUsers();
    const gamas = await getAllGamas();
    const brands = await getAllBrands();

    return res.status(200).json({
      ok : true,
      meta : {
        status : 200,
        total : {
          products : products.length,
          categories : categories.length,
          users : users.length,
          gamas : gamas.length,
          brands : brands.length
        },
        url: 'api/admin/dashboard'
      },
      data : {
        products : products,
        categories : categories,
        users : users,
        gamas : gamas,
        brands : brands
      }
    })
    } catch (error) {
      return createResponseError(res,error)
    }
  },
  storeProduct: async (req, res) => {
    try {
    const errors = validationResult(req);

    if(!errors.isEmpty()) throw {
      status : 400,
      message : errors.mapped()
    }

    const newProduct = await createNewProduct(req.body)
    const imagesNewProduct = await createImagesForProduct(req.files,newProduct.id)
    const categoryForProduct = await createCategoriesForProduct(req.body,newProduct.id)

    return res.status(200).json({
      ok : true,
      meta : {
        status : 200,
        total : 1,
        url : `/api/product/detalle/${newProduct.id}`
      },
      data : {
        newProduct : newProduct,
        categories : categoryForProduct,
        images : imagesNewProduct
      }
    })

    } catch (error) {
      return createResponseError(res,error)
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
        categories,
        gama,
        brand,
      } = req.body;

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
        .then(() => {
          categories.forEach(async (category) => {
            await db.productCategories.update(
              {
                categoryId: category,
              },
              {
                where: {
                  productId: id,
                },
              }
            );
          });
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
