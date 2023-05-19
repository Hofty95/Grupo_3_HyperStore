'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      pass: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      socialId: {
        type: Sequelize.STRING
      },
      provider: {
        type: Sequelize.STRING
      },
      addressId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName : "Addresses"
          },
          key : 'id'
        },
      },
      rolId: {
        type: Sequelize.INTEGER,
        references : {
          model :{
            tableName : "Rols"
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
    await queryInterface.dropTable('Users');
  }
};