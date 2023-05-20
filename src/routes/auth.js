const express = require('express');
const { loginRegisterGoogle } = require('../controllers/authController');
const passport = require('passport');
const router = express.Router();

passport.serializeUser((user, done) =>done(null, user))
passport.deserializeUser((user, done) =>done(null, user))

/* /auth */
router.get('/login/google', passport.authenticate('google'));
router.get('/google/callback', passport.authenticate('google',{failureRedirect : 'user/login'}), loginRegisterGoogle);


module.exports = router;
