'use strict';
const {
  Model, DatabaseError
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsToMany(models.Product,{
        foreignKey : 'orderId',
        otherKey : 'productId',
        through : 'Cart',
        as : 'cart'
       });

       Order.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
        onDelete: 'cascade'
      });
    }
  }
  Order.init({
    date: {type:DataTypes.DATE, defaultValue: new Date()},
    total: {type:DataTypes.INTEGER, defaultValue:0},
    status: {
      type: DataTypes.STRING,
      defaultValue:'pending',
      validate : {
        isIn:{
          args:[['pending','completed','canceled']],
          msg:'Los valores validos son pending, completed o canceled'
        }
      }
    },

    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};