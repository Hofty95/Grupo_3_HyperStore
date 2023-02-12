const { render } = require("ejs")
const express = require("express")
const router = express.Router()
const {Admin, storeProduct, editProduct, saveEditProduct} = require("../controllers/adminController")

/* /Admin */

router.get("/dashboard", Admin);
router.post("/dashboard", storeProduct)
router.get("/dashboard/edit/:id", editProduct)
router.put("/dashboard/edit/:id", saveEditProduct)

module.exports = router