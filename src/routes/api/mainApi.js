const express = require('express');
const router = express.Router();
const {Home} = require("../../controllers/api/mainApiController")

/* /api/main */
router.get('/index', Home);
    

module.exports = router;
