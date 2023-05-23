const createResponseError = require("../../helpers/createResponseError");
const sendSuccessResponse = require("../../helpers/sendSuccessResponse");
const { getOrder, createProductInCart, removeProductInCart, moreOrLessAmountProduct, clearAllProductFromCart, modifyStatusFromOrder } = require("../../services/cartServices");

module.exports = {
  getOrderPending: async (req, res) => {
    try {
      const { id } = req.session.userLogin;
      /* const id = req.body.id */

      const [order, isCreated] = await getOrder({ userId: id })
      const totalProducts = order.cart.length

      return res.status(isCreated ? 201 : 200).json({
        ok: true,
        data: order
      })
    } catch (error) {
      createResponseError(res, error)
    }
  },
  addProduct: async (req, res) => {
    try {
      const { productId } = req.body;
      const { id } = req.session.userLogin;

      await createProductInCart({ userId: id, productId })
      sendSuccessResponse(res);
    } catch (error) {
      createResponseError(res, error)
    }
  },
  removeProduct: async (req, res) => {
    try {
      const { productId } = req.body;
      /* const { id } = req.session.userLogin; */

      await removeProductInCart({ userId: 1, productId })
      sendSuccessResponse(res);
    } catch (error) {
      createResponseError(res, error)
    }
  },
  moreAmount: async (req, res) => {
    try {
      const { productId } = req.body;
      const { id } = req.session.userLogin;

      await moreOrLessAmountProduct({ userId: id, productId })
      sendSuccessResponse(res);
    } catch (error) {
      createResponseError(res, error)
    }
  },
  lessAmount: async (req, res) => {
    try {
      const { productId } = req.body;
      const { id } = req.session.userLogin;

      await moreOrLessAmountProduct({ userId: id, productId, action: "less" })
      sendSuccessResponse(res);
    } catch (error) {
      createResponseError(res, error)
    }
  },
  clearCart: async (req, res) => {
    try {
      const { id } = req.session.userLogin
      await clearAllProductFromCart({ userId: id })
      sendSuccessResponse(res);
    } catch (error) {
      createResponseError(res, error)
    }
  },
  statusOrder: async (req, res) => {
    try {
      const { status } = req.body
      const { id } = req.session.userLogin
      await modifyStatusFromOrder({ userId: id, status })
      sendSuccessResponse(res);
    } catch (error) {
      createResponseError(res, error)
    }
  },
};
