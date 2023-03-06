const express = require('express');
const router = express.Router();
const {login, register, usuario,changepass, confirmRemoveUser, removeUser} = require('../controllers/userController')

/* /user */
router
  .get('/login',login)
  .get('/register',register)
  .get('/usuario',usuario)
  .get('/changepass',changepass)
  .get('/remove/:id', confirmRemoveUser)
  .delete('/remove/:id', removeUser)

module.exports = router;