const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const {Home, Help, p404} = require("../../controllers/api/mainApiController")

/* /api */
router.get('/', Home);
router.get("/help", Help);
router.get("/404", p404);
=======
const {Home} = require("../../controllers/api/mainApiController")

/* /api/product */
router.get('/index', Home);
>>>>>>> develop
    

module.exports = router;
