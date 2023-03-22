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
    loginProcess : (req,res) => {

        const errors = validationResult(req);

        if(errors.isEmpty()){

            const {id, name, rol,email} = readJson('users.json').find(user => user.email === req.body.email);

            req.session.userLogin = {
                id,
                name,
                rol,
                email
            };

           if(req.body.remember){
                res.cookie('hyperStoreUser',req.session.userLogin,{maxAge: 1000*60} )
           }

            return res.redirect('/')
        }else{
            return res.render('users/login',{
                title : "Inicio de sesión",
                errors : errors.mapped()
            })
        }
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
        const users = readJson('users.json');
        const {id} = req.session.userLogin;
        
        const user = users.find((user) => user.id === +id)

        return res.render('users/usuario',{
            title: "HyperStore | Perfil de usuario",
            ...user,
            old: req.body
        })
    },  
    changeInfo : (req,res) =>{
        const users = readJson('users.json');
        const {id, name, email} = req.session.userLogin;
        const {phone,dni,surname,street,streetNumber,floor,dept,ref,postcode,province,location} = req.body;
        const errors = validationResult(req)

        if (errors.isEmpty()) {

            let usersModified = users.map((user) => {
                if (user.id === id){
                    let userEdited = {
                    id : +id,
                    rol: user.rol,
                    email: email,
                    name : name,
                    surname: surname,
                    password: user.password,
                    phone: +phone,
                    dni: +dni,
                    street,
                    streetNumber: +streetNumber,
                    floor,
                    dept,
                    ref,
                    postcode: +postcode,
                    province,
                    location

                    };
                    return userEdited
                }
                return user
            })
            writeJson('users.json', usersModified)
            return res.redirect('/')
        }else{

            const {id} = req.session.userLogin;
            
            const user = users.find((user) => user.id === +id)
    
            return res.render('users/usuario',{
                title: "HyperStore | Perfil de usuario",
                ...user,
                old: req.body,
                errors : errors.mapped()
            })
        }
    },
    changepass : (req,res) =>{
        return res.render('users/cambioContraseña',{
            title: "HyperStore | cambio de contraseña",
        })
    },
    logout : (req,res) => {
        req.session.destroy();
        res.clearCookie("hyperStoreUser");
        return res.redirect('/')
    },
    confirmRemoveUser : (req, res) => {
        const id = req.params.id;
        const user = users.find(user => user.id === +id);
        const users = readJson('users.json');
        
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