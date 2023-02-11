const users = require("../data/users.json");
const {readJson, writeJson} = require("../data/readWrite")

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
    },
    confirmRemoveUser : (req, res) => {
        const id = req.params.id;
        const user = users.find(user => user.id === +id);
        

        return res.render('users/confirmRemoveUser', {
            ...user
        })
    },
    removeUser : (req, res) => {
        const id = req.params.id;
        const deleteUser = users.filter(user => user.id !== +id);

        writeJson('users.json', deleteUser);
        res.redirect(`/admin/dashboard`)
    }
}