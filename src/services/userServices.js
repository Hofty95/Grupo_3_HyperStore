const db = require('../database/models');
const {hashSync} = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    },

    updateUser: async (id, userData, file) => {
        try {
            const userUpdated = await db.User.update({
                name: userData.name,
                surname: userData.surname,
                image: file ? file.filename : "user.png"
            },
            {
                where: {id: id}
            })

            return userUpdated

        } catch (error) {
            throw {
                status: 500,
                message: error.message
            }
        }
    },

    verifyUserByEmail : async (email) => {
        try {

            let user = await db.User.findOne({
                where : {
                    email
                }
            })
            /* return console.log(user) */
            return user
            
        } catch (error) {
            console.log(error);
            throw{
                status : 500,
                message : error.message
            }
        }
    },

    registerUser: async (userData) => {
        try {
            const newUser = await db.User.create({
                name: userData.name,
                surname: userData.surname,
                email: userData.email,
                pass: hashSync(userData.pass, 10),
                rolId: 2
            })
            return newUser
        } catch (error) {
            throw new Error(error.message);
        }
    },
}