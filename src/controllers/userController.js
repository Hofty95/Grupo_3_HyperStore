const {validationResult} = require("express-validator")
const {hashSync} = require('bcryptjs')
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
    registerProcess : (req,res) =>{

        const errors = validationResult(req)

        if (errors.isEmpty()) {
            const users = readJson('users.json')
            const {name, surname, email, password} = req.body

            const newUser = {
                id: users.length ? users[users.length - 1].id + 1 : 1,
                rol:"user",
                email,
                name,
                surname,
                password : hashSync(password,10),
                phone: null,
                dni: null,
                street: null,
                streetNumber: null,
                floor: null,
                dept: null,
                ref: null,
                postcode : null,
                province: null,
                location: null
            }
            users.push(newUser)

            writeJson('users.json', users)

            return res.redirect("/user/login")

        }else{
        return res.render('users/register',{
            title: 'Hyper Store | Register',
            errors : errors.mapped(),
            old : req.body
        });            
        }
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
        const users = readJson('users.json');
        
/*         

        return res.render('users/confirmRemoveUser', {
            title: "HyperStore | confirm",
            ...user
        }) */
    },
    removeUser : (req, res) => {
        const users = readJson('users.json');
        const id = req.params.id;
        const deleteUser = users.filter(user => user.id !== +id);

        writeJson('users.json', deleteUser);
        res.redirect(`/admin/dashboard`)
        return res.render('users/cambioContraseña',{
            title: 'Hyper Store | Cambio Contraseña'
        })
    }
}