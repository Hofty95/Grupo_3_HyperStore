module.exports = {
    login : (req,res) =>{
        return res.render('users/login');
    },
    register : (req,res) =>{
        return res.render('users/register');
    },
    usuario : (req,res) =>{
        return res.render('users/usuario')
    },
    changepass : (req,res) =>{
        return res.render('users/cambioContraseña')
    }
}