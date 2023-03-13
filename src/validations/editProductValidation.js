const {check, body} = require('express-validator')

module.exports = [
    check('code')
        .notEmpty().withMessage('Debe ingresar un codigo de producto'),
    check('name')
        .notEmpty().withMessage('El Nombre del producto es obligatorio').bail()
        .isLength({min:5,max:150}).withMessage('El nombre debe tener como minimo 5 caracteres y un maximo de 150'),
    check('price')
        .notEmpty().withMessage("debes ingresar un precio para el producto").bail()
        .isNumeric().withMessage('solo se admiten caracteres numericos').bail()
        .isInt({min:1}).withMessage('Solo números positivos'),
    check('description')
        .notEmpty().withMessage('Debes ingresar una descripcon para el producto').bail()
        .isLength({min:20,max:500}).withMessage('la descripcion debe tener como minimo 20 caracteres y un maximo de 500'),
    check('category')
        .notEmpty().withMessage('debes seleccionar a que categoria pertenece el producto')
]