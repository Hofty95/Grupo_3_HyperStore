const { render } = require("ejs")
const express = require("express")
const router = express.Router()
const {Admin, storeProduct, editProduct, saveEditProduct} = require("../controllers/adminController");
const checkUserAdmin = require("../middlewares/checkUserAdmin");
const { uploadProductImages } = require("../middlewares/uploadIMG");
const addProductValidation = require("../validations/addProductValidation");
const editProductValidation = require("../validations/editProductValidation");
const checkUserLogin = require("../middlewares/checkUserLogin");


/* /Admin */

router.get("/dashboard",/* checkUserAdmin, */ Admin);
router.post("/dashboard", uploadProductImages.array('images'), addProductValidation,storeProduct)
router.get("/dashboard/edit/:id",/* checkUserAdmin, */ editProduct)
router.put("/dashboard/edit/:id", editProductValidation,saveEditProduct)

module.exports = router