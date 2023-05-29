const createResponseError = require("../../helpers/createResponseError");
const sendSucessResponse = require("../../helpers/sendSucessResponse");
const {
  getUserWithFavorites,
  addOrRemoveToFavorite,
} = require("../../services/favoritesServices");

module.exports = {
  getFavorites: async (req, res) => {
    try {
      const { id } = req.session.userLogin;
      const user = await getUserWithFavorites({ userId: id });
      sendSucessResponse(res, { data: user });
    } catch (error) {
      createResponseError(res, error);
    }
  },
  toggleProductFavorite: async (req, res) => {
    try {
      const { id } = req.session.userLogin;
      const { productId } = req.body;
      const user = await addOrRemoveToFavorite({ userId: id, productId });
      sendSucessResponse(res, { data: user.productsFavorite });
    } catch (error) {
      createResponseError(res, error);
    }
  },
};
