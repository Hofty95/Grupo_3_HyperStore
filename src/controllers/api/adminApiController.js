const createResponseError = require("../../helpers/createResponseError");
const { getAllProducts, getAllCategories, getAllGamas, getAllBrands, createNewProduct, createImagesForProduct, createCategoriesForProduct, editAProduct, editAProductCategory, editAProductImage, productToEdit, getTotalProducts, getTotalOrderCompleted } = require("../../services/productServices");
const { getAllUsers, getTotalUsers } = require("../../services/userServices");
const { validationResult } = require("express-validator");

module.exports = {
  Admin: async (req, res) => {
    try {
    const products = await getAllProducts();
    const categories = await getAllCategories();
    const users = await getAllUsers();
    const gamas = await getAllGamas();
    const brands = await getAllBrands();

    return res.status(200).json({
      ok : true,
      meta : {
        status : 200,
        total : {
          products : products.length,
          categories : categories.length,
          users : users.length,
          gamas : gamas.length,
          brands : brands.length
        },
        url: 'api/admin/dashboard'
      },
      data : {
        products : products,
        categories : categories,
        users : users,
        gamas : gamas,
        brands : brands
      }
    })
    } catch (error) {
      return createResponseError(res,error)
    }
  },
  storeProduct: async (req, res) => {
    try {
    const errors = validationResult(req);

    if(!errors.isEmpty()) throw {
      status : 400,
      message : errors.mapped()
    }

    const newProduct = await createNewProduct(req.body)
    const imagesNewProduct = await createImagesForProduct(req.files,newProduct.id)
    const categoryForProduct = await createCategoriesForProduct(req.body,newProduct.id)

    return res.status(200).json({
      ok : true,
      meta : {
        status : 200,
        total : 1,
        url : `/api/product/detalle/${newProduct.id}`
      },
      data : {
        newProduct : newProduct,
        categories : categoryForProduct,
        images : imagesNewProduct
      }
    })

    } catch (error) {
      return createResponseError(res,error)
    }
  },
  editProduct : async (req, res) => {
    try {
      const product = await productToEdit(req.params.id)

      return res.status(200).json({
        ok : true,
        data : product,
        meta : {
          status : 200,
          total : 1
        }
      })
    } catch (error) {
      return createResponseError(res,error)
    }
  },
  saveEditProduct: async (req, res) => {
    try {
      const errors = validationResult(req);
      const {id} = req.params
      console.log(id)

      if(!errors.isEmpty()) throw {
        status : 400,
        message : errors.mapped()
      }

      const editProduct = await editAProduct(req.body,id)
      const editCategory = await editAProductCategory(req.body,id)
      const editImages = await editAProductImage(req.files,id)

      return res.status(200).json({
        ok : true,
        meta : {
          status : 200,
          total : 1,
          url : `/api/product/detalle/${id}`
        },
        data : {
          editedProduct : editProduct,
          categories : editCategory,
          images : editImages
        }
      })
    } catch (error) {
      return createResponseError(res,error)
    }
  },
  metrics : async (req,res) => {
    try {
      const totalProducts = await getTotalProducts()
      const totalOrders = await getTotalOrderCompleted()
      const totalUsers = await getTotalUsers()

      return res.status(200).json({
        ok : true,
        meta : {
          status : 200,
          url : `/api/admin/metrics`
        },
        data : {
          totalProducts,
          totalOrders,
          totalUsers
        }
      })
    } catch (error) {
      return createResponseError(res,error)
    }
  }
};
