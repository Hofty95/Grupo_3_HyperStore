"use strict";

/** @type {import('sequelize-cli').Migration} */

const {getRandomDiscount} = require('../../tools/randomNum')


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("ProductCategories", [
      {
        productId : 1,
        categoryId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 2,
        categoryId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 3,
        categoryId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 4,
        categoryId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 5,
        categoryId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 6,
        categoryId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 7,
        categoryId : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 8,
        categoryId : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 9,
        categoryId : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 10,
        categoryId : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 11,
        categoryId : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 12,
        categoryId : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 13,
        categoryId : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 14,
        categoryId : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 15,
        categoryId : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 16,
        categoryId : 6,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 17,
        categoryId : 6,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 18,
        categoryId : 6,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 19,
        categoryId : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 20,
        categoryId : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        productId : 21,
        categoryId : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ],
   {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("ProductCategories", null, {});
  },
};
