const express = require('express');
/* const { confirmRemove } = require('../controllers/adminController'); */
const router = express.Router();

const {busqueda, carrito, category, detalle, remove} = require('../../controllers/api/productApiController');
const checkUserLogin = require('../../middlewares/checkUserLogin');
/* /api/product */

router.get('/', busqueda)
router.get('/',checkUserLogin, carrito)
router.get('/category', category)
router.get('/:id', detalle)
router.delete('/:id', remove)

module.exports = router;
