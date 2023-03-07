module.exports = (req,res,next) => {
    if(!req.session.userLogin){
        next() //podría acceder al registro y/o login
    }

    return res.redirect('/')    
}