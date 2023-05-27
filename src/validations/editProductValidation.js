const {check, body} = require('express-validator')

module.exports = [
    check('name')
        .notEmpty().withMessage('El Nombre del producto es obligatorio').bail()
        .isLength({min:5,max:150}).withMessage('El nombre debe tener como minimo 5 caracteres y un maximo de 150'),
    check('price')
        .notEmpty().withMessage("Debes ingresar un precio para el producto").bail()
        .isNumeric().withMessage('Solo se admiten caracteres numericos').bail()
        .isInt({min:1}).withMessage('Solo números positivos'),
    check('description')
        .notEmpty().withMessage('Debes ingresar una descripcon para el producto').bail()
        .isLength({min:20,max:500}).withMessage('la descripcion debe tener como minimo 20 caracteres y un maximo de 500'),
    check('specifications')
        .notEmpty().withMessage('Debes ingresar las especificaciones para el producto').bail()
        .isLength({min:20,max:500}).withMessage('las especificaciones deben tener como minimo 20 caracteres y un maximo de 500'),
    check('discount')
        .notEmpty().withMessage("Debes ingresar un descuento para el producto, de lo contrario ingresar cero").bail()
        .isNumeric().withMessage('Solo se admiten caracteres numericos').bail()
        .isLength({min:2}).withMessage('Solo un maximo de dos caracteres, una oferta no puede exceder el 99%').bail()
        .isInt({min:0}).withMessage('Solo números positivos o cero'),
    check('categories')
        .notEmpty().withMessage('Debes seleccionar al menos una categoria que pertenece el producto'),
    check('gama')
        .notEmpty().withMessage('Debes seleccionar a que gama pertenece el producto'),
    check('brand')
        .notEmpty().withMessage('Debes seleccionar a que marca pertenece el producto'),
]