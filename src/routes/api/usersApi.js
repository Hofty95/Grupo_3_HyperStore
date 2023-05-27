const express = require('express');
const router = express.Router();
const registerValidation = require("../../validations/registerValidation")
const {list,detail,destroy, registerProcess, update, verifyEmail} = require('../../controllers/api/userApiController');
const localsUserCheck = require('../../middlewares/localsUserCheck');
const loginValidation = require('../../validations/loginValidation');
const checkUserLogin = require('../../middlewares/checkUserLogin');
const checkUser = require('../../middlewares/checkUser');
const profileValidation = require('../../validations/profileValidation');
const { uploadUserImage } = require('../../middlewares/uploadIMG');


/* /api/users */
router
  .get('/lista', list)
  .get('/detail/:id', detail)
  .put('/:id', update)
  .delete('/:id', destroy)
  .get('/verificar', verifyEmail)
  .post('/register',registerValidation ,registerProcess)

module.exports = router;