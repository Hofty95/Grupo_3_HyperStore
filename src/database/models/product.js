'use strict';
const {
  Model
} = require('sequelize');
const sequelizePaginate = require('sequelize-paginate')
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
     Product.hasMany(models.Image,{
      as : 'images',
      foreignKey : 'productId',
      onDelete : 'cascade'
     })
     
     Product.belongsTo(models.Gama,{
      foreignKey : 'gamaId',
      as : 'gama'
     })
     
     Product.belongsTo(models.Brand, {
      foreignKey: 'brandId',
      as: 'brand'
    });
    
 
     Product.belongsToMany(models.Category,{
      foreignKey : 'productId',
      otherKey : 'categoryId',
      through : 'productCategories',
      as : 'categories'
     });

     Product.belongsToMany(models.Order,{
      foreignKey : 'productId',
      otherKey : 'orderId',
      through : 'Cart',
      as : 'cart'
     });
     
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    specifications: DataTypes.TEXT,
    gamaId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Product',
  });
  sequelizePaginate.paginate(Product)
  return Product;
};