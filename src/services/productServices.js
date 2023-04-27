const db = require('../database/models')

module.exports = {
    getAllProducts : async () => {
        try {
            const products = await db.Product.findAll();

            return products
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    },
    getOneProduct : async (id) => {
        try {
            const product = await db.Product.findByPk(id, {
                include: [
                  {
                    association: "categories",
                    attributes: ["id", "name"]
                  },
                  {
                    association: "images",
                    attributes: ["name"]
                  }
                ]
              });

              return product
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    },
    getProductsByCategory : async () => {
        try {
         const productsByCategory = await db.Category.findOne({
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

          return productsByCategory
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }

    },
    getAllCategories : async () => {
        try {
            const categories = await db.Category.findAll();

            return categories
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    },
    getAllBrands : async () => {
        try {
            const brands = await db.Brand.findAll();

            return brands
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    },
    getAllGamas : async () => {
        try {
            const gamas = await db.Gama.findAll();

            return gamas
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    }
}