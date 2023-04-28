const express = require('express');
/* const { confirmRemove } = require('../controllers/adminController'); */
const router = express.Router();

<<<<<<< HEAD
const {busqueda, carrito, category, detalle, confirmRemove, remove} = require('../../controllers/api/productApiController');
const checkUserLogin = require('../../middlewares/checkUserLogin');
/* /api/product */

router.get('/busqueda', busqueda)
router.get('/carrito',checkUserLogin, carrito)
router.get('/category', category)
router.get('/detalle/:id', detalle)
router.get('/remove/:id',checkUserLogin,confirmRemove)
router.delete('/remove/:id', remove)
=======
const {busqueda, carrito, category, detalle, remove} = require('../../controllers/api/productApiController');
const checkUserLogin = require('../../middlewares/checkUserLogin');
/* /api/product */

router.get('/', busqueda)
router.get('/',checkUserLogin, carrito)
router.get('/category', category)
router.get('/:id', detalle)
router.delete('/:id', remove)
>>>>>>> develop

module.exports = router;
