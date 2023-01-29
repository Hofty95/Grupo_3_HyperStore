const express = require('express');
const router = express.Router();
const {login, register} = require('../controllers/userController')

/* /user */
router
  .get('/login',login)
  .get('/register',register)

module.exports = router;