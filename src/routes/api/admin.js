const express = require("express")
const router = express.Router()
const {Admin, storeProduct, editProduct, saveEditProduct} = require("../../controllers/api/adminApiController");
const checkUserAdmin = require("../../middlewares/checkUserAdmin");
const { uploadProductImages } = require("../../middlewares/uploadIMG");
const addProductValidation = require("../../validations/addProductValidation");
const editProductValidation = require("../../validations/editProductValidation");
const checkUserLogin = require("../../middlewares/checkUserLogin");


/* /Aapi/admin */

router.get("/",checkUserAdmin, Admin);
router.post("/", uploadProductImages.array('images'), addProductValidation,storeProduct)
router.get("/:id",checkUserAdmin, editProduct)
router.put("/:id", editProductValidation,saveEditProduct)

module.exports = router