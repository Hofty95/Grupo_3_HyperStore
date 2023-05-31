const express = require('express');
/* const { confirmRemove } = require('../controllers/adminController'); */
const router = express.Router();

const {busqueda, carrito, category, detalle, confirmRemove, remove, showAllProducts} = require('../controllers/productController');
const checkUserLogin = require('../middlewares/checkUserLogin');
/* product */

router.get('/busqueda', busqueda)
router.get('/todos', showAllProducts)
router.get('/carrito',checkUserLogin, carrito)
router.get('/category', category)
router.get('/detalle/:id', detalle)
router.get('/remove/:id',checkUserLogin,confirmRemove)
router.delete('/remove/:id', remove)

module.exports = router;
