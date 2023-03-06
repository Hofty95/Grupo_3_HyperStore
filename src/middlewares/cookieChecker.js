module.exports= (req, res, next) => {
    if (req.cookies.hyperStoreUser) {
        req.session.userLogin = req.cookies.hyperStoreUser
    }
    next ()
}