const db = require("../../database/models");
const createResponseError = require("../../helpers/createResponseError");
const { getAllProducts } = require("../../services/productServices");

module.exports = {
  Home: async (req, res) => {
    try {

      const products = await getAllProducts();

      return res.status(200).json({
        ok : true,
        data : products,
        meta : {
          status : 200,
          total : products.length
        }
      })
      
    } catch (error) {
      return createResponseError(res, error);
    }
  },
};
