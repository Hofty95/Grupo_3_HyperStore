const db = require("../database/models")

module.exports = {
    loginRegisterGoogle : async (req,res) => {
        const {provider,_json:{sub, given_name, family_name, picture, email}} = req.session.passport.user

        try {
        const address = await db.Address.create()
        const [user, isCreate] = await db.User.findOrCreate({
            where: {
                socialId: sub
            },
            defaults:{
                email: email,
                name: given_name,
                surname: family_name,
                image: picture,
                socialId: sub,
                provider: provider,
                addressId: address.id ,
            }
        })

        if (!isCreate) {
            await address.destroy()
        }

        req.session.userLogin = {
            id : user.id,
            name : user.name,
            rol: user.rolId,
        }
        
        res.cookie('hyperStoreUser', req.session.userLogin, { maxAge: 1000 * 60 })

        res.redirect('/')
        } catch (error) {
            console.log(error);
        }

    }
}