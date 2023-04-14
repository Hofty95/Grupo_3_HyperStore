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

            db.Address.create()
                .then(address => {
                    db.User.create({
                        name: name.trim(),
                        surname: surname.trim(),
                        email: email.trim(),
                        pass: hashSync(password, 10),
                        rolId: 2,
                        addressId: address.id
                    }).then(({ id, name, rolId }) => {
                        req.session.userLogin = {
                            id,
                            name,
                            rol: rolId
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
        const { id } = req.session.userLogin;

        db.User.findByPk(req.session.userLogin.id, {
            attributes: ['name', 'surname', 'email', /* 'image' */],
            include: [
                {
                    association: 'address',
                    attributes: ['street', 'location', 'province', 'postcode']
                }
            ]
        }).then(user => {
            return res.render('users/usuario', {
                title: "HyperStore | Perfil de usuario",
                user,
                old: req.body
            })
        }).catch(error => console.log(error))

    },
    changeInfo: (req, res) => {

        const { name, surname, street, postcode, province, location } = req.body;
        const { id } = req.session.userLogin;

        db.User.findByPk(id)
            .then(user => {
                const addressUpdate = db.Address.update(
                    {
                        street: street ? street.trim() : null,
                        postcode: postcode ? postcode : null,
                        province: province ? province.trim() : null,
                        location: location ? location.trim() : null
                    },
                    {
                        where: {
                            id: user.addressId
                        }
                    }
                )
                const userUpdate = db.User.update(
                    {
                        name: name,
                        surname: surname,
                        image: req.file ? req.file.filename : user.images
                    },
                    {
                        where: {
                            id
                        }
                    }
                )
                /* return res.send(userUpdate) */

                Promise.all(([addressUpdate, userUpdate]))
                    .then(() => {

                        (req.file && FileSystem.existSync('public/images/users/' + user.image)) && FileSystem.unlinkSync()

                        req.session.message = "Datos actualizados"
                        return res.redirect('/')
                    }).catch(error => console.log(error))
            })
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
    },
    removeUser: (req, res) => {

        const id = req.params.id

        db.User.findByPk(id)
        .then((user) => {
            db.User.destroy({
                where: {
                    id
                }
            }).then(() => {
                db.Address.destroy({
                    where: {
                        id: user.addressId
                    }
                }).then(() => res.redirect('/admin/dashboard'))
            }).catch(error => console.log(error))
        })
    }
}

