const db = require("../database/models");
const {Op} = require('sequelize')

module.exports = mtd = {
    getOrder : async ({userId}) => {

        if (!userId) {
            throw{
                ok:false,
                message: 'Debes Ingresar el userId'
            }
        }

        const [order, isCreated] = await db.Order.findOrCreate({
            where:{
                [Op.and] : [
                    {
                        userId : userId
                    },
                    {
                        status : 'pending'
                    }
                ]
            },
            defaults:{
                userId : userId
            },
            include: {
                association: 'cart',
                include: ['images']
            }
        })

        return [order, isCreated]
    },
    createProductInCart : async ({userId, productId}) => {
        if (!userId || !productId) {
            throw{
                ok:false,
                message: 'Debes Ingresar el userId'
            }
        }

        const [order, isCreated] = await mtd.getOrder({userId})

        await mtd.createCart({orderId: order.id, productId})
    },
    createCart : async ({orderId, productId}) => {
        return await db.Cart.create({orderId,productId})
    },
}