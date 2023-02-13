const users = require("../data/users.json");
const {readJson, writeJson} = require("../data/readWrite")

module.exports = {
    login : (req,res) =>{
        return res.render('users/login',{
            title: 'Hyper Store | Login'
        });
    },
    register : (req,res) =>{
        return res.render('users/register',{
            title: 'Hyper Store | Register'
        });
    },
    usuario : (req,res) =>{
        return res.render('users/usuario',{
            title: "HyperStore | user"
        })
    },
    changepass : (req,res) =>{
        return res.render('users/cambioContraseña',{
            title: "HyperStore | cambio pass",
        })
    },
    confirmRemoveUser : (req, res) => {
        const id = req.params.id;
        const user = users.find(user => user.id === +id);
        

        return res.render('users/confirmRemoveUser', {
            title: "HyperStore | confirm",
            ...user
        })
    },
    removeUser : (req, res) => {
        const id = req.params.id;
        const deleteUser = users.filter(user => user.id !== +id);

        writeJson('users.json', deleteUser);
        res.redirect(`/admin/dashboard`)
        return res.render('users/cambioContraseña',{
            title: 'Hyper Store | Cambio Contraseña'
        })
    }
}