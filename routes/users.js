const express = require('express');
const router = express.Router();
const {login, register, usuario,changepass} = require('../controllers/userController')

/* /user */
router
  .get('/login',login)
  .get('/register',register)
  .get('/usuario',usuario)
  .get('/changepass',changepass)

module.exports = router;