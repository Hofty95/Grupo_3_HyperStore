const { getAllUsers, getOneUser, destroyUser } = require('../../services/userServices');
const createResponseError = require('../../helpers/createResponseError');

module.exports = {
    
    list : async (req, res) => {

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
        } catch(error) {
            return createResponseError(res, error)
        }
    }
}

