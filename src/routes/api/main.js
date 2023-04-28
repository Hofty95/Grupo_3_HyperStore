const express = require('express');
const router = express.Router();
const {Home} = require("../../controllers/api/mainApiController")

/* /api/product */
router.get('/index', Home);
    

module.exports = router;
