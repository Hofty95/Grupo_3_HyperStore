'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING(1000)
      },
      specifications: {
        type: Sequelize.STRING(1000)
      },
      gamaId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName : "Gamas"
          },
          key : 'id'
        },
      },
      brandId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName : "Brands"
          },
          key : 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};