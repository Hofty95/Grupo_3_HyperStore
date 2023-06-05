'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Address,{
        foreignKey : 'addressId',
        as : 'address',
        onDelete : 'cascade'
      });

      User.belongsTo(models.Rol,{
        foreignKey : 'rolId',
        as : 'rol'
      });

      User.hasMany(models.Order,{
        foreignKey:'userId',
        as:'orders',
        onDelete : 'cascade'
      });

/*       User.hasMany(models.Cart, {
        foreignKey: 'userId',
        as: 'carts',
        onDelete: 'cascade'
      }); */

      User.belongsToMany(models.Product,{
        foreignKey : 'userId',
        otherKey : 'productId',
        through : 'favorites',
        as : 'productFavorites',
        onDelete : 'cascade'
      })
    }
  }
  User.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    pass: DataTypes.STRING,
    image: DataTypes.STRING,
    socialId: DataTypes.STRING,
    provider: DataTypes.STRING,
    addressId: DataTypes.INTEGER,
    rolId: {type: DataTypes.INTEGER, defaultValue:2}
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};