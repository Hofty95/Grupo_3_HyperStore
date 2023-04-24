module.exports = (req,res,next) => {
    if(!req.session.userLogin){
        return next() //podría acceder al registro y/o login
    }

    return res.redirect('/')    
}