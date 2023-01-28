const express = require('express');
const router = express.Router();

/* /user */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
q