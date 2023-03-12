module.exports = (req,res,next) => {
    if(req.session.userLogin){
        next() //podría acceder al perfil de usuario
    }

    return res.redirect('/user/login')    
}