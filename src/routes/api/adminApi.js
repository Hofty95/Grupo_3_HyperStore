const express = require("express")
const router = express.Router()
const {Admin,storeProduct,editProduct,saveEditProduct, metrics} = require('../../controllers/api/adminApiController')
const checkUserAdmin = require("../../middlewares/checkUserAdmin");
const { uploadProductImages } = require("../../middlewares/uploadIMG");
const addProductValidation = require("../../validations/addProductValidation");
const editProductValidation = require("../../validations/editProductValidation");
const checkUserLogin = require("../../middlewares/checkUserLogin");


/* /api/Admin */

router.get("/dashboard", Admin);
router.get('/metrics',metrics)
router.post("/dashboard", uploadProductImages.array('images'), addProductValidation,storeProduct)
router.get("/dashboard/edit/:id", editProduct)
router.put("/dashboard/edit/:id", uploadProductImages.array('images'),editProductValidation,saveEditProduct)

module.exports = router