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
            const product = await db.Product.findByPk(id);
            return product
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    }
}