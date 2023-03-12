const { render } = require("ejs")
const express = require("express")
const router = express.Router()
const {Admin, storeProduct, editProduct, saveEditProduct} = require("../controllers/adminController");
const checkUserAdmin = require("../middlewares/checkUserAdmin");
const { uploadProductImages } = require("../middlewares/uploadIMG");
const addProductValidation = require("../validations/addProductValidation");
const editProductValidation = require("../validations/editProductValidation");


/* /Admin */

<<<<<<< HEAD
router.get("/dashboard", Admin);
router.post("/dashboard", uploadProductImages.array('images'), addProductValidation,storeProduct)
router.get("/dashboard/edit/:id", editProduct)
router.put("/dashboard/edit/:id", editProductValidation, saveEditProduct)
=======
router.get("/dashboard",checkUserAdmin, Admin);
router.post("/dashboard", uploadProductImages.array('images'),storeProduct)
router.get("/dashboard/edit/:id",checkUserAdmin, editProduct)
router.put("/dashboard/edit/:id", saveEditProduct)
>>>>>>> develop

module.exports = router