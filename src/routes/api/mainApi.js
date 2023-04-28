const express = require('express');
const router = express.Router();
const {Home, Help, p404} = require("../../controllers/api/mainApiController")

/* /api */
router.get('/', Home);
router.get("/help", Help);
router.get("/404", p404);
    

module.exports = router;
