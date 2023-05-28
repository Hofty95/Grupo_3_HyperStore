const createResponseError = require("../../helpers/createResponseError");
const sendSucessResponse = require("../../helpers/sendSucessResponse");
const { getUserWithFavorites } = require("../../services/favoritesServices");

module.exports = {
  getFavorites: async (req, res) => {
    try {
        /* const {id}  = req.session.userLogin; */
        const user = await getUserWithFavorites({ userId: 1 });
        sendSucessResponse(res, { data: user });
    } catch (error) {
      createResponseError(res, error);
    }
  },
  toggleProductFavorite: async (req, res) => {
    try {
        
    } catch (error) {
      createResponseError(res, error);
    }
  },
};
