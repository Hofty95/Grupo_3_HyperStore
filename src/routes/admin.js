const { render } = require("ejs")
const express = require("express")
const router = express.Router()
const {Admin, storeProduct, editProduct, saveEditProduct} = require("../controllers/adminController");
const checkUserAdmin = require("../middlewares/checkUserAdmin");
const { uploadProductImages } = require("../middlewares/uploadIMG");

/* /Admin */

router.get("/dashboard",checkUserAdmin, Admin);
router.post("/dashboard", uploadProductImages.array('images'),storeProduct)
router.get("/dashboard/edit/:id",checkUserAdmin, editProduct)
router.put("/dashboard/edit/:id", saveEditProduct)

module.exports = router