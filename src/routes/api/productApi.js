const express = require('express');
/* const { confirmRemove } = require('../controllers/adminController'); */
const router = express.Router();

const {busqueda, carrito, category, detalle, remove, gama, brand, withPagination} = require('../../controllers/api/productApiController');
const checkUserLogin = require('../../middlewares/checkUserLogin');
/* /api/product */

router.get('/search', busqueda);
router.get('/results',withPagination);
router.get('/',checkUserLogin, carrito)
router.get('/category', category)
router.get('/gama', gama)
router.get('/brand', brand)
router.get('/:id', detalle)
router.delete('/:id', remove)

module.exports = router;
