const db = require('../database/models');

module.exports = {
    getAllUsers: async () => {
        try {

            const users = await db.User.findAll({
                attributes: {
                    exclude: ["pass", "addressId", "rolId"]
                }
            });

            return users

        } catch (error) {
            throw {
                status: 500,
                message: error.message
            }
        }
    },

    getOneUser: async (id) => {
        try {

            const user = await db.User.findByPk(id, {
                attributes: {
                    exclude: ["pass", "addressId", "rolId"]
                }
            });

            return user
            
        } catch (error) {
            throw {
                status: 500,
                message: error.message
            }
        }
    },

    destroyUser: async (id) => {
        try {

            const userDestroy = await db.User.destroy({
                where: {
                    id: id
                },
                force: true
            })

            return userDestroy
        } catch (error) {
            throw {
                status: 500,
                message: error.message
            }
        }
    }
}