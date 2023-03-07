const express = require('express');
const router = express.Router();
const registerValidation = require("../validations/registerValidation")
const {login, register, usuario,changepass, confirmRemoveUser, removeUser, registerProcess, loginProcess} = require('../controllers/userController');
const localsUserCheck = require('../middlewares/localsUserCheck');
const loginValidation = require('../validations/loginValidation');


/* /user */
router
  .get('/login',localsUserCheck, login)
  .post('/login',loginValidation, loginProcess)
  .get('/register',register)
  .post('/register',registerValidation  ,registerProcess)
  .get('/usuario',usuario)
  .get('/changepass',changepass)
  .get('/remove/:id', confirmRemoveUser)
  .delete('/remove/:id', removeUser)

module.exports = router;