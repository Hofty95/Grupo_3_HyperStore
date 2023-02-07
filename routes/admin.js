const { render } = require("ejs")
const express = require("express")
const router = express.Router()
const {Admin} = require("../controllers/adminController")

/* /Admin */

router.get("/dashboard", Admin);

module.exports = router