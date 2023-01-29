const express = require('express');
const router = express.Router();
const {login, register, usuario,cambioContraseña} = require('../controllers/userController')

/* /user */
router
  .get('/login',login)
  .get('/register',register)
  .get('/usuario',usuario)
  .get('/cambioContraseña',cambioContraseña)

module.exports = router;