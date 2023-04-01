'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.STRING,
    specifications: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'product',
  });
  return products;
};