const db = require("../../database/models");
const { getAllProducts } = require("../../services/productServices");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
      console.log(error.message)
      }
  },
};
