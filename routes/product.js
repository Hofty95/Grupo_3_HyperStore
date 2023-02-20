const express = require('express');
/* const { confirmRemove } = require('../controllers/adminController'); */
const router = express.Router();

const {busqueda, carrito, category, detalle, confirmRemove, remove} = require('../controllers/productController')
/* product */

router.get('/busqueda', busqueda)
router.get('/carrito', carrito)
router.get('/category', category)
router.get('/detalle/:id', detalle)
router.get('/remove/:id', confirmRemove)
router.delete('/remove/:id', remove)

module.exports = router;
