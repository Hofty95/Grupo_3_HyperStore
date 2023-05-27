const db = require("../../database/models");
const createResponseError = require("../../helpers/createResponseError");
const { getAllProducts } = require("../../services/productServices");

module.exports = {
  Home: async (req, res) => {
    try {

      const products = await getAllProducts();
<<<<<<< HEAD
      /* return res.send(req.json) */
=======

>>>>>>> 0d0ddd7b5be88b6dc9ba3474e2d37ad4aae524e3
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
