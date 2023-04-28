const db = require('../database/models')

module.exports = {
    getAllUsers : async ()  => {
        try {
            const users = await db.User.findAll();
            return users
        } catch (error) {
            throw {
                status : 500,
                message : error.message
            }
        }
    }
}