const fs = require('fs');
const { validationResult } = require("express-validator")
const { hashSync } = require('bcryptjs')
const db = require('../../database/models')

module.exports = {
    login: (req, res) => {
        const categories =  db.Category.findAll();
        const brands =  db.Brand.findAll();

        Promise.all([categories,brands])
        .then(([categories,brands])=>{
            return res.render('users/login', {
                title: 'Hyper Store | Login',
                categories,
                brands
            });            
        })
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
            console.log(errors)
        } else {
            const categories =  db.Category.findAll();
            const brands =  db.Brand.findAll();
    
            Promise.all([categories,brands])
            .then(([categories,brands])=>{
                return res.render('users/login', {
                    title: 'Hyper Store | Login',
                    categories,
                    brands,
                    errors: errors.mapped()
                });            
            })
        }
    },
    register: (req, res) => {
        const categories =  db.Category.findAll();
        const brands =  db.Brand.findAll();

        Promise.all([categories,brands])
        .then(([categories,brands])=>{
            return res.render('users/register', {
                title: 'Hyper Store | Register',
                categories,
                brands
            });            
        })
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
            const categories =  db.Category.findAll();
            const brands =  db.Brand.findAll();
    
            Promise.all([categories,brands])
            .then(([categories,brands])=>{
                return res.render('users/register', {
                    title: 'Hyper Store | Register',
                    categories,
                    brands,
                    errors: errors.mapped(),
                    old: req.body
                });            
            })
        }
    },
    usuario: (req, res) => {
        const { id } = req.session.userLogin;
        const categories =  db.Category.findAll();
        const brands =  db.Brand.findAll();

        const user = db.User.findByPk(id, {
            attributes: ['name', 'surname', 'email', 'image'],
            include: [
                {
                    association: 'address',
                    attributes: ['street', 'location', 'province', 'postcode']
                }
            ]
        });

        Promise.all([user,id,categories,brands])
        .then(([user,id,categories,brands])=>{
            return res.render('users/usuario', {
                title: "HyperStore | Perfil de usuario",
                user,
                old: req.body,
                id,
                categories,
                brands
            })
        })
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
                        image: req.file ? req.file.filename : user.image
                    },
                    {
                        where: {
                            id
                        }
                    }
                )
                /* return res.send(req.body) */
                
                Promise.all(([addressUpdate, userUpdate]))
                .then(() => {
                    
                    (req.file && fs.existsSync('public/images/User-img' + user.image)) && fs.unlinkSync()
                    
                    req.session.message = "Datos actualizados"
                    return res.redirect('/')
                }).catch(error => console.log(error))
            })
    },
    changepass: (req, res) => {
        const categories =  db.Category.findAll();
        const brands =  db.Brand.findAll();

        Promise.all([categories,brands])
        .then(([categories,brands])=>{
            return res.render('users/cambioContraseña', {
                title: "Hyper Store | Change Password",
                categories,
                brands,
            });            
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
    },
    removeSelf: (req, res) => {

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
                }).then(() => req.session.destroy(),
                res.clearCookie("hyperStoreUser")),
                res.redirect('/user/login')
            }).catch(error => console.log(error))
        })
    }
}

