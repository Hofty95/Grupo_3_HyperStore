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
         await db.Category.findOne({
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
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }

    }
}