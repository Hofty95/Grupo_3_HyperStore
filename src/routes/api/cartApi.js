const router  = require('express').Router();
const { getOrderPending, addProduct, removeProduct, moreAmount, lessAmount, clearCart, statusOrder } = require('../../controllers/api/cartApiController');


/* /api/cart */

router
    .get('/getOrderPending',getOrderPending)
    .post('/addProduct',addProduct)
    .delete('/removeProduct',removeProduct)
    .put('/moreAmount',moreAmount)
    .put('/lessAmount',lessAmount)
    .delete('/clearCart',clearCart)
    .put('/statusOrder',statusOrder)
   

module.exports = router;