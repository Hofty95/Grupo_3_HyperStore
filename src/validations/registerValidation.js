const {check, body} = require("express-validator");
const db = require('../database/models');
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/; //mayuscula, numero y 6 a 12 caracteres


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
            return db.User.findOne({
                where : {
                    email : value
                }
            }).then(user => {
                if(user){
                    return Promise.reject()
                }
            }).catch((error) => {
                console.log(error)
                return Promise.reject('El email ya se encuentra registrado')
            })
        }),
    check("password")
        .notEmpty().withMessage("La contraseña es obligatoria").bail()
        .custom((value,{req})=>{
            if(!regExPass.test(value.trim())){
                return false
            }
            return true
        }).withMessage("Debe tener una mayuscula, una minuscula, y un numero. Y un min: 6, max: 12"),
    body("password2")
        .notEmpty().withMessage("Debes confirmar tu contraseña").bail()
        .custom((value,{req}) => {
            if (value !== req.body.password) {
                return false
            }
            return true
        }).withMessage("Las contraseñas no coinciden!")
]