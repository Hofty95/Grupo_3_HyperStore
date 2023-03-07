const {check, body} = require("express-validator")
const {readJson} = require('../data/readWrite')

module.exports = [
    check("name")
        .notEmpty().withMessage("El Nombre es obligatorio").bail()
        .isLength({min:2}).withMessage("El nombre debe tener un minimo de dos caracteres").bail()
        .isAlpha("es-ES",{
            ignore : " "
        }).withMessage("Solo se admiten caracteres alfabeticos"),
    check("surname")
        .notEmpty().withMessage("El Apellido es obligatorio").bail()
        .isLength({min:2}).withMessage("El apellido debe tener un minimo de dos caracteres").bail()
        .isAlpha().withMessage("Solo se admiten caracteres alfabeticos"),
    check("email")
        .notEmpty().withMessage("El Email es obligatorio").bail()
        .isEmail().withMessage("Debes ingresar un email valido")
        .custom((value, {req}) => {
            let user = readJson('users.json').find(user => user.email === value)
            return user ? false : true
        }),
    check("password")
        .notEmpty().withMessage("La contraseña es obligatoria").bail()
        .isLength({min:6}).withMessage("La contraseña debe tener un minimo de 6 caracteres"),
    body("password2")
        .notEmpty().withMessage("Debes confirmar tu contraseña").bail()
        .custom((value,{req}) => {
            if (value !== req.body.password) {
                return false
            }
            return true
        }).withMessage("Las contraseñas no coinciden!")
]