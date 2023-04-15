const {check} = require("express-validator")

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
    check('phone')
        .notEmpty().withMessage('Debes ingresar un telefono de contacto').bail()
        .isNumeric().withMessage('Solo puedes ingresar caracteres numericos'),
   /*  check('dni')
        .notEmpty().withMessage('Debes ingresar tu dni').bail()
        .isNumeric().withMessage('Solo puedes ingresar caracteres numericos'), */
    check('street')
        .notEmpty().withMessage('Debes ingresar una calle'),
    /* check('streetNumber')
        .notEmpty().withMessage('Debes ingresar el numero de la direccion').bail()
        .isNumeric().withMessage('Solo puedes ingresar caracteres numericos'), */
    check('postcode')
        .notEmpty().withMessage('Debes ingresar tu codigo postal').bail()
        .isNumeric().withMessage('Solo puedees ingresar caracteres numericos'),
    check('province')
        .notEmpty().withMessage('Debes ingresar una provincia').bail()
        .isAlpha("es-ES",{
            ignore : " "
        }).withMessage("Solo se admiten caracteres alfabeticos"),
    check('location')
        .notEmpty().withMessage('Debe ingresar su localidad')

]