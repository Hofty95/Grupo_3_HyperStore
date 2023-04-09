'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     

    }
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    specifications: DataTypes.STRING,
    gamaId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'Product',
  });
  return Products;
};