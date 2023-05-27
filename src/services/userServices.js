const db = require('../database/models');
const { hashSync } = require('bcryptjs');
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
                    where: { id: id }
                })

            return userUpdated

        } catch (error) {
            throw {
                status: 500,
                message: error.message
            }
        }
    },

    verifyUserByEmail: async (email) => {
        try {

            let user = await db.User.findOne({
                where: {
                    email
                }
            })
            return user ? true : false

        } catch (error) {
            console.log(error);
            throw {
                status: 500,
                message: error.message
            }
        }
    },

    /* addressCreate: async () => {
        try {
            const newAddress = await db.Address.create({
                street: null,
                postcode: null,
                province: null,
                location: null
            })

            return newAddress

        } catch (error) {
            throw {
                status: 500,
                message: error.message
            }
        }
    }, */

    registerUser: async (userData) => {
        try {

            const { name, surname, email, password } = userData
            const address = await db.Address.create()
            const newUser = await db.User.create({
                name: name,
                surname: surname,
                email: email,
                pass: hashSync(password, 10),
                rolId: 2,
                addressId: address.id
            })
            return newUser

        } catch (error) {
            throw new Error(error.message);
        }
    }
}