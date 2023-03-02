const express = require('express');
const router = express.Router();
const registerValidation = require("../validations/registerValidation")
const {login, register, usuario,changepass, confirmRemoveUser, removeUser, registerProcess} = require('../controllers/userController')

/* /user */
router
  .get('/login',login)
  .get('/register',register)
  .post('/register',registerValidation  ,registerProcess)
  .get('/usuario',usuario)
  .get('/changepass',changepass)
  .get('/remove/:id', confirmRemoveUser)
  .delete('/remove/:id', removeUser)

module.exports = router;