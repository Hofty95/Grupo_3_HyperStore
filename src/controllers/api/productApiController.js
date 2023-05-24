const db = require("../../database/models");
const createResponseError = require("../../helpers/createResponseError");
const { getOneProduct, deleteProduct, getAllCategories, deleteProductCategories, searchProduct, searchByGama, searchByBrand, getAllProducts } = require("../../services/productServices");

module.exports = {
busqueda: async (req, res) => {
  try {
    const result = await searchProduct(req.query.keyword);

    return res.status(200).json({
      ok : true, 
      data : result,
      meta : {
        status : 200,
        total : result.length,
        keyword : req.query.keyword
      },
    })
    
  } catch (error) {
    return createResponseError(res,error)
  }
  },
  withPagination : async (req,res) =>{
    try {
      const {withPagination = "true", page = 1, limit = 6} = req.query;
      const { count, products, pages } = await getAllProducts(req, { withPagination, page, limit });
    
  
    let data = {
      count,
      products,
    }

    if(withPagination === "true"){
      data = {
        ...data,
        pages,
        currentPage : +page,
      }
    }  

    return res.status(200).json({
      ok : true,
      data,
      meta : {
        status : 200,
        total : products.length,
      }
    })
    } catch (error) {
      return createResponseError(res,error)
    }
  },
  carrito: (req, res) => {
    const categories =  db.Category.findAll();
    const brands =  db.Brand.findAll();

    Promise.all([categories,brands])
    .then(([categories,brands])=>{
        return res.render("product/carrito", {
             title : "Hyper Store | Carrito",
            categories,
            brands,
        });            
    })
  },
  category: (req,res) => {
    try {
      const category = getAllCategories();
      return res.status(200).json({
        ok : true,
        data : category.dataValues,
        meta : {
          status : 200,
          total : 1
        }
      })
    } catch (error) {
    console.log(error);
    return createResponseError(res,error)
    }
    
  },
  detalle: async (req,res) => {
  try {
    const {id} = req.params
    const product = await getOneProduct(id);
    return res.status(200).json({
      ok : true,
      data : product,
      meta : {
        status : 200,
        total : 1,
      }
    })
  } catch (error) {
    console.log(error);
    return createResponseError(res,error)
  }
  },
  remove: async (req, res) => {
    try {
      const {id} = req.params
      const deleteCategory = await deleteProductCategories(id);
      const deletedProduct = await deleteProduct(id);

      return res.status(200).json({
        ok : true,
        meta : {
          status : 200,
          total : 1,
        },
        data : {
          category : deleteCategory,
          product : deletedProduct
        }
      })
    } catch (error) {
      return createResponseError(res,error)
    }
 
  },
  gama : async (req,res) => {
    try {
      const products = await searchByGama(req.query.gama)
      return res.status(200).json({
        ok : true,
        data : products,
        meta : {
          status : 200,
          total : products.length,
        }
      })
    } catch (error) {
      return createResponseError(res,error)
    }
  },
  brand : async (req,res) => {
    try {
      const products = await searchByBrand(req.query.brand)
      return res.status(200).json({
        ok : true,
        data : products,
        meta : {
          status : 200,
          total : products.length,
        }
      })
    } catch (error) {
      return createResponseError(res,error)
    }
  }
};
