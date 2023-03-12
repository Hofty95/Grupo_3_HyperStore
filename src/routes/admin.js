const { render } = require("ejs")
const express = require("express")
const router = express.Router()
const {Admin, storeProduct, editProduct, saveEditProduct} = require("../controllers/adminController");
const { uploadProductImages } = require("../middlewares/uploadIMG");
const addProductValidation = require("../validations/addProductValidation");
const editProductValidation = require("../validations/editProductValidation");


/* /Admin */

router.get("/dashboard", Admin);
router.post("/dashboard", uploadProductImages.array('images'), addProductValidation,storeProduct)
router.get("/dashboard/edit/:id", editProduct)
router.put("/dashboard/edit/:id", editProductValidation, saveEditProduct)

module.exports = router