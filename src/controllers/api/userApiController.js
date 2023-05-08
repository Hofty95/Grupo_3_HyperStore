const { validationResult } = require('express-validator')
const { getAllUsers, getOneUser, destroyUser, registerUser, updateUser, verifyUserByEmail } = require('../../services/userServices');
const createResponseError = require('../../helpers/createResponseError');

module.exports = {

    list: async (req, res) => {

        try {

            const users = await getAllUsers();

            return res.status(200).json({
                ok: true,
                data: users,
                meta: {
                    status: 200,
                    total: users.length,
                    url: '/api/user'
                }

            })
        } catch {
            return createResponseError(res, error)
        }
    },

    detail: async (req, res) => {
        try {

            const id = req.params.id

            const user = await getOneUser(id)

            if (!user) {
                return res.status(404).json({
                    ok: false,
                    error: {
                        status: 404,
                        message: `Usuario con el id ${id} no encontrado`
                    }
                })
            }

            return res.status(200).json({
                ok: true,
                data: user,
                meta: {
                    status: 200,
                    total: 1,
                    url: `/api/user/${id}`
                }
            })
        } catch {
            /* return res.send(req.json) */
            return createResponseError(res, error)
        }
    },

    update: async (req, res) => {
        try {
            const errors = validationResult(req)

            if(!errors.isEmpty()) throw{
                status:400,
                message:errors.mapped()
            }

            const user = await updateUser(req.params.id, req.body, req.file)
            return res.status(200).json({
                ok: true,            
                data : {
                    message : "Usuario modificado satisfactoriamente",
                    user: {
                        id: user.id,
                        name:user.name,
                        surname:user.surname,
                        email:user.email
                    }    
                },
                meta : {
                    status: 200,
                    total : 1,
                    url : `/api/users/${req.params.id}` 
                }
            })
        } catch (error) {
            return createResponseError(res, error)
        }
    },

    destroy: async (req, res) => {
        try {

            const id = req.params.id
            const userDeleted = await destroyUser(id)
            return res.status(200).json({
                ok: true,
                data: userDeleted,
                meta: {
                    status: 200,
                    total: 1,
                    url: `/api/user/${id}`
                }
            })
        } catch (error) {
            return createResponseError(res, error)
        }
    },

    verifyEmail : async (req,res) => {
        try {

            let existUser = await verifyUserByEmail(req.body.email);

            return res.status(200).json({
                ok : true,
                data : {
                    existUser
                }
            })

        } catch (error) {
            console.log(error)
            return createResponseError(res, error)
        }
    },

    registerProcess: async (req, res) => {
        try {

            const errors = validationResult(req)

            if (!errors.isEmpty()) throw {
                status: 400,
                message: errors.mapped()
            }

            const newUser = await registerUser(req.body)
            return res.status(200).json({
                ok: true,
                data: {
                    message: "Usuario registrado satisfactoriamente",
                    newUser: {
                        id: newUser.id,
                        name: newUser.name,
                        surname: newUser.surname,
                        email: newUser.email,
                        addressId: address.id
                    }
                },
                meta: {
                    status: 200,
                    total: 1
                },
            })

        } catch (error) {
            return createResponseError(res, error)
        }
    },
}

