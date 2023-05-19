const createResponseError = require("../../helpers/createResponseError");
const { getOrder, createProductInCart } = require("../../services/cartServices");

module.exports = {
  getOrderPending: async (req, res) => {
    try {
      const {id}  = req.session.userLogin;

      const [order, isCreated] = await getOrder({userId : id})

      return res.status(isCreated ? 201 : 200).json({
        ok:true,
        data:order
      })
    } catch (error) {
        createResponseError(res,error)
    }
  },
  addProduct: async (req, res) => {
    try {
    const {productId,userId} = req.body;
    /* const {id}  = req.session.userLogin; */

    await createProductInCart({userId, productId})

    res.status(200).json({
        ok:true
    })
    } catch (error) {
        createResponseError(res,error)
    }
  },
  removeProduct: async (req, res) => {},
  moreAmount: async (req, res) => {},
  lessAmount: async (req, res) => {},
  clearCart: async (req, res) => {},
  statusOrder: async (req, res) => {},
};
