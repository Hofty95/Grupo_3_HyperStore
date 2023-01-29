const express = require('express');
const router = express.Router();
const {Home, Help} = require("../controllers/mainController")

/* / */
router.get('/', Home);
router.get("/help", Help);
    

module.exports = router;
