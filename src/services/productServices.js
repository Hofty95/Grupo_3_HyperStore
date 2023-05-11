const db = require("../database/models");
const fs = require('fs');
const { Op } = require("sequelize");


module.exports = {
  getAllProducts: async () => {
    try {
      const products = await db.Product.findAll({
        include: [
          {
            association: "categories",
            attributes: ["name"],
          },
          {
            association: "images",
            attributes: ["name"],
          },
        ],
      });

      return products;
    } catch (error) {
      throw {
        status: 500,
        message: error.message,
      };
    }
  },
  getOneProduct: async (id) => {
    try {
      const product = await db.Product.findByPk(id, {
        include: [
          {
            association: "categories",
            attributes: ["id", "name"],
          },
          {
            association: "images",
            attributes: ["name"],
          },
        ],
      });

      return product;
    } catch (error) {
      throw {
        status: 500,
        message: error.message,
      };
    }
  },
  getProductsByCategory: async () => {
    try {
      const productsByCategory = await db.Product.findAll({
        include: [
          {
            association: "images",
            attributes: {
              include : [
                "name"
              ]
            }
          },
          {
            association : 'categories',
            attributes : {
              include : [
                'name','id','categoryId'
              ]
            }
          }
        ],
      });
console.log(productsByCategory)
      return productsByCategory;
    } catch (error) {
     console.log(error)
    }
  },
  getAllCategories: async () => {
    try {
      const categories = await db.Category.findAll();

      return categories;
    } catch (error) {
      throw {
        status: 500,
        message: error.message,
      };
    }
  },
  getAllBrands: async () => {
    try {
      const brands = await db.Brand.findAll();

      return brands;
    } catch (error) {
      throw {
        status: 500,
        message: error.message,
      };
    }
  },
  getAllGamas: async () => {
    try {
      const gamas = await db.Gama.findAll();

      return gamas;
    } catch (error) {
      throw {
        status: 500,
        message: error.message,
      };
    }
  },
  createNewProduct: async (body) => {
    try {
      const {
        name,
        price,
        discount,
        description,
        specifications,
        gama,
        brand,
      } = body;



      const newProduct = await db.Product.create({
        name: name.trim(),
        price: +price,
        discount: +discount,
        description: description.trim(),
        specifications: specifications.trim(),
        gamaId: +gama,
        brandId: +brand,
      });



      return newProduct;
    } catch (error) {
      throw {
        status: 500,
        message: error.message,
      };
    }
  },
  createCategoriesForProduct: async (body,id) => {
    try {
        let categories = new Array(body.categories);

        categories.flat(3);
        
      const category = categories.forEach(async (category) => {
        await db.productCategories.create({
          productId: id,
          categoryId: category,
        });
      });

      return category
    } catch (error) {
        throw {
            status: 500,
            message: error.message,
          };
    }
  },
  createImagesForProduct : async (files,id) => {
    try {
        const images = files.forEach(async (image) => {
        await db.Image.create({
          name: image.filename,
          productId: id,
        });
      });

      return images
    } catch (error) {
        throw {
            status: 500,
            message: error.message,
        };
    }
  },
  productToEdit : async (id) => {
    try {
      const product = await db.Product.findByPk(id, {
        include: [
          {
            association: "categories",
            attributes: ["id", "name"],
          },
          {
            association: "images",
            attributes: ["name"],
          },
        ],
      });

      return product;
    } catch (error) {
      throw {
        status: 500,
        message: error.message,
    };
    }
  },
  editAProduct : async (body,id) => {
    try {
        const {
            name,
            price,
            discount,
            description,
            specifications,
            gama,
            brand
          } = body
          
          const editedProduct = await db.Product.update(
            {
              name: name,
              price: +price,
              discount: +discount,
              description: description,
              specifications: specifications,
              gamaId: +gama,
              brandId: +brand
            },
            {
              where: {
                id: id
              }
            }
          );

          return editedProduct
    } catch (error) {
        throw {
            status: 500,
            message: error.message
        };
    }
  },
  editAProductCategory : async (body,id) => {
    try {
        let categories = new Array(body.categories);

        categories.flat(3);

        const category = categories.forEach(async (category) => {
            await db.productCategories.update(
              {
                categoryId: category
              },
              {
                where: {
                  productId: id
                },
              }
            );
          });

        return category
    } catch (error) {
        throw {
            status: 500,
            message: error.message,
        };
    }
  },
  editAProductImage : async (files,id) => {
    try {
        const images = files.forEach(async (image) => {
            await db.Image.update({
              name: image.filename,
            },
            {
                where : {productId: id}
            }
            );
            (files && fs.existsSync(`public/images/Productos-img/${image.filename}`)) && fs.unlinkSync(`public/images/Productos-img/${image.filename}`)
          });
          return images
    } catch (error) {
        
    }
  },
  deleteProductCategories : async (id) =>{
    try {
      await db.productCategories.destroy({where : {productId : id}})
    } catch (error) {
      throw {
        status: 500,
        message: error.message,
    };
    }
  },
  deleteProduct : async (id)  =>{
    try {
      await db.Product.destroy({where : {id : id}})
    } catch (error) {
      throw {
        status: 500,
        message: error.message,
    };
    }
  },
  searchProduct : async (keyword) => {
    try {
      const product = await db.Product.findAll({
        include : [
          {
            association: "images",
            attributes: ["name"]
          },
        ],
        where : {
          [Op.or]: [
          {
            name: {
              [Op.substring]: `%${keyword}%`,
            },
          },
          {
            description: {
              [Op.substring]: `%${keyword}%`,
            },
          }
        ]
      }
    })
    return product
    } catch (error) {
      throw {
        status: 500,
        message: error.message,
    }
    }
  },
  searchByGama : async (gama) => {
    try {
      const products = db.Product.findAll({
        include : {
          association: "images",
          attributes: ["name"],
        },
        where : {gamaId : gama}
      })
      return products
    } catch (error) {
      throw {
        status: 500,
        message: error.message,
    }
    }
  },
  searchByBrand : async (brand) => {
    try {
      const products = db.Product.findAll({
        include : {
          association: "images",
          attributes: ["name"],
        },
        where : {brandId : brand}
      })
      return products
    } catch (error) {
      throw {
        status: 500,
        message: error.message,
    }
    }
  }
};
