module.exports = {
    login : (req,res) =>{
        return res.render('login');
    },
    register : (req,res) =>{
        return res.render('register');
    },
    usuario : (req,res) =>{
        return res.render('usuario')
    },
    cambioContraseña : (req,res) =>{
        return res.render('cambioContraseña')
    }
}