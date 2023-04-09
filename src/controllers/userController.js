const { validationResult } = require("express-validator")
const { hashSync } = require('bcryptjs')
const { readJson, writeJson } = require("../data/readWrite")
const db = require('../database/models')

module.exports = {
    login: (req, res) => {
        return res.render('users/login', {
            title: 'Hyper Store | Login'
        });
    },
    loginProcess: (req, res) => {

        const errors = validationResult(req);
        
        if (errors.isEmpty()) {

            db.User.findOne({
                where: {
                    email: req.body.email
                }
            }).then(({ id, name, rolId }) => {
                req.session.userLogin = {
                    id,
                    name,
                    rol: rolId,
                    /* email */
                };

                if (req.body.remember) {
                    res.cookie('hyperStoreUser', req.session.userLogin, { maxAge: 1000 * 60 })
                }

                return res.redirect('/')
            }).catch(error => console.log(error))

        } else {
            return res.render('users/login', {
                title: "Inicio de sesión",
                errors: errors.mapped()
            })
        }
    },
    register: (req, res) => {
        return res.render('users/register', {
            title: 'Hyper Store | Register'
        });
    },
    registerProcess: (req, res) => {

        const errors = validationResult(req)

        if (errors.isEmpty()) {
            const { name, surname, email, password } = req.body

            db.address.create()
                .then( address => {
                    db.user.create({
                        name : name.trim(),
                        surname : surname.trim(),
                        email : email.trim(),
                        password : hashSync(password, 10),
                        rolId : 2,
                        addressId : address.id
                    }).then(({id, name, rolId}) => {
                        req.session.userLogin = {
                            id,
                            name,
                            rol : rolId
                        };
                        return res.redirect("/")
                    })
                }).catch(error => console.log(error))

        } else {
            return res.render('users/register', {
                title: 'Hyper Store | Register',
                errors: errors.mapped(),
                old: req.body
            });
        }
    },
    usuario: (req, res) => {
        const users = readJson('users.json');
        const { id } = req.session.userLogin;

        const user = users.find((user) => user.id === +id)

        return res.render('users/usuario', {
            title: "HyperStore | Perfil de usuario",
            ...user,
            old: req.body
        })
    },
    changeInfo: (req, res) => {
        const users = readJson('users.json');
        const { id, name, email } = req.session.userLogin;
        const { phone, dni, surname, street, streetNumber, floor, dept, ref, postcode, province, location } = req.body;
        const errors = validationResult(req)

        if (errors.isEmpty()) {

            let usersModified = users.map((user) => {
                if (user.id === id) {
                    let userEdited = {
                        id: +id,
                        rol: user.rol,
                        email: email,
                        name: name,
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
        } else {

            const { id } = req.session.userLogin;

            const user = users.find((user) => user.id === +id)

            return res.render('users/usuario', {
                title: "HyperStore | Perfil de usuario",
                ...user,
                old: req.body,
                errors: errors.mapped()
            })
        }
    },
    changepass: (req, res) => {
        return res.render('users/cambioContraseña', {
            title: "HyperStore | cambio de contraseña",
        })
    },
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie("hyperStoreUser");
        return res.redirect('/')
    },
    confirmRemoveUser: (req, res) => {
        const id = req.params.id;
        const user = users.find(user => user.id === +id);
        const users = readJson('users.json');

    },
    removeUser: (req, res) => {
        const users = readJson('users.json');
        const id = req.params.id;
        const deleteUser = users.filter(user => user.id !== +id);

        writeJson('users.json', deleteUser);
        res.redirect(`/admin/dashboard`)
        return res.render('users/cambioContraseña', {
            title: 'Hyper Store | Cambio Contraseña'
        })
    }
}