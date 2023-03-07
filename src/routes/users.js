const express = require('express');
const router = express.Router();
const registerValidation = require("../validations/registerValidation")
const {login, register, usuario,changepass, confirmRemoveUser, removeUser, registerProcess, loginProcess, logout} = require('../controllers/userController');
const localsUserCheck = require('../middlewares/localsUserCheck');
const loginValidation = require('../validations/loginValidation');
const checkUserLogin = require('../middlewares/checkUserLogin');
const checkUser = require('../middlewares/checkUser');


/* /user */
router
  .get('/login',checkUser, login)
  .post('/login',loginValidation, loginProcess)
  .get('/register',checkUser ,register)
  .post('/register',registerValidation  ,registerProcess)
  .get('/usuario',checkUserLogin ,usuario)
  .get('/changepass',checkUserLogin,changepass)
  .get('/remove/:id',checkUserLogin,confirmRemoveUser)
  .get('/logout', checkUserLogin, logout)
  .delete('/remove/:id', removeUser)

module.exports = router;