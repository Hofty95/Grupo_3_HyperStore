const express = require('express');
const router = express.Router();
/* const registerValidation = require("../validations/registerValidation")
const {login, register, usuario,changepass, confirmRemoveUser, removeUser, registerProcess, loginProcess, logout, changeInfo, removeSelf } = require('../controllers/userController');
const localsUserCheck = require('../middlewares/localsUserCheck');
const loginValidation = require('../validations/loginValidation');
const checkUserLogin = require('../middlewares/checkUserLogin');
const checkUser = require('../middlewares/checkUser');
const profileValidation = require('../validations/profileValidation');
const { uploadUserImage } = require('../middlewares/uploadIMG'); */
const { list, detail } = require('../../controllers/api/userApiController');


/* api/user */
router
  .get('/', list)
  .get('/:id', detail)

module.exports = router;