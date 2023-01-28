const express = require('express');
const router = express.Router();
const {Home} = require("../controllers/mainController")

/* / */
router.get('/', Home);

module.exports = router;
