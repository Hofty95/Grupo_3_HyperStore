const db = require("../../database/models");
const createResponseError = require("../../helpers/createResponseError");
const { getAllProducts } = require("../../services/productServices");

module.exports = {
  Home: async (req, res) => {
    try {

      const { withPaginate = "true", page = 1, limit = 6 } = req.query;
      const { count, products, pages } = await getAllProducts(req, {
        withPaginate,
        page,
        limit,
      });

      let data = {
        count,
        products,
      }

      if(withPaginate === "true"){
        data = {
          ...data,
          pages,
          currentPage : page
        }
      }

      return res.status(200).json({
        ok: true,
        data
      });
    } catch (error) {
      return createResponseError(res, error);
    }
  },
};
