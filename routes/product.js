const express = require('express');
const router = express.Router();

const {busqueda, carrito, category, detalle} = require('../controllers/productController')
/* product */

router.get('/busqueda', busqueda)
router.get('/carrito', carrito)
router.get('/category', category)
router.get('/detalle', detalle)

module.exports = router;
