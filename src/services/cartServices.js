const db = require("../database/models");
const { Op } = require('sequelize')

module.exports = mtd = {
    getOrder: async ({ userId }) => {

        if (!userId) {
            throw {
                ok: false,
                message: 'Debes Ingresar el userId'
            }
        }

        const [order, isCreated] = await db.Order.findOrCreate({
            where: {
                [Op.and]: [
                    {
                        userId
                    },
                    {
                        status: 'pending'
                    }
                ]
            },
            defaults: {
                userId
            },
            include: [{
                association: 'cart',
                through: {
                    attributes: ['amount']
                },
                include: ['images']
            }]
        })

        return [order, isCreated]
    },
    createProductInCart: async ({ userId, productId }) => {
        if (!userId || !productId) {
            throw {
                ok: false,
                message: 'Debes Ingresar el userId y el productId'
            }
        }

        const [order] = await mtd.getOrder({ userId })

        await mtd.getCart({ orderId: order.id, productId })

        const orderReload = await order.reload({ include: { all: true } })
        order.total = mtd.calcTotal(orderReload)
        await order.save()
    },
    removeCart: async ({ orderId, productId }) => {
        return await db.Cart.destroy({
            where: {
                [Op.and]: [
                    {
                        orderId
                    },
                    {
                        productId
                    }
                ]
            }
        })
    },
    getCart: async ({ orderId, productId }) => {
        if (!orderId || !productId) {
            throw {
                ok: false,
                message: 'Debes ingresar el orderId y el productId'
            }
        }

        return await db.Cart.findOrCreate({
            where: {
                orderId: orderId,
                productId: productId
            },
            defaults: {
                orderId: orderId,
                productId: productId
            }
        })
    },
    removeProductInCart: async ({ userId, productId }) => {
        if (!userId || !productId) {
            throw {
                ok: false,
                message: 'Debes Ingresar el userId y el productId'
            }
        }

        const [order] = await mtd.getOrder({ userId });
        await mtd.removeCart({ orderId: order.id, productId })

        const orderReload = await order.reload({ include: { all: true } });
        order.total = mtd.calcTotal(orderReload);
        await order.save();
    },
    moreOrLessAmountProduct: async ({ userId, productId, action = "more" }) => {
        if (!userId || !productId) {
            throw {
                ok: false,
                message: 'Debes Ingresar el userId y el productId'
            }
        }
        const [order] = await mtd.getOrder({ userId });

        const [cart, cartIsCreated] = await mtd.getCart({ orderId: order.id, productId })

        if (!cartIsCreated) {
            if (action === "more") {
                cart.amount++
            } else {
                cart.amount--
            }
            await cart.save()
        }

        const orderReload = await order.reload({ include: { all: true } })
        order.total = mtd.calcTotal(orderReload)
        await order.save()
    },
    calcTotal: ({ cart }) => {
        return cart.reduce((acum, product) => {
            const priceCalc = product.price.discount ? product.price - (product.price * product.discount / 100) : product.price
            acum += priceCalc * product.Cart.amount

            return acum
        }, 0)
    },
    clearAllProductFromCart: async ({ userId }) => {
        if (!userId) {
            throw {
                ok: false,
                message: 'Debes Ingresar el userId'
            }
        }
        const [order] = await mtd.getOrder({ userId });

        await db.Cart.destroy({
            where: {
                orderId: order.id
            }
        })

        const orderReload = await order.reload({ include: { all: true } })
        order.total = mtd.calcTotal(orderReload)
        await order.save()
    },
    modifyStatusFromOrder: async ({ userId, status }) => {
        if (!userId || !status) {
            throw {
                ok: false,
                message: 'Debes Ingresar el userId y status'
            }
        }

        const [order] = await mtd.getOrder({ userId });

        order.status = status
        await order.save()
        return order
    }
}