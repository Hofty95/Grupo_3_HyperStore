const db = require("../database/models");

module.exports = {
  getUserWithFavorites: async ({userId}) => {

    try {
        if (!userId) {
        throw {
            status : 400,
            message : 'Es necesario enviar el userId'
        }
    }
    return await db.User.findByPk(userId,{
        include : [
            {
                association : 'productFavorites'
            }
        ]
    })

    } catch (error) {
        throw {
            status: 500,
            message: error.message,
          };
    }



  },
};
