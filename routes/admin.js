const { render } = require("ejs")
const express = require("express")
const router = express.Router()
const {Admin, storeProduct, editProduct, remove} = require("../controllers/adminController")

/* /Admin */

router.get("/dashboard", Admin);
router.post("/dashboard", storeProduct);

module.exports = router