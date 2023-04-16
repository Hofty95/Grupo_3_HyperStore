"use strict";

/** @type {import('sequelize-cli').Migration} */

const products = require("../../data/productsSeeders");
const categories = require("../../data/categories.json");

const categoriesProductsSeeders = products.reduce(
  (seeders, product, index) => {
    categories.forEach((category) => {
      product.categories.forEach((idCategory) => {
        if (category.id === idCategory) {
          const newSeed = {
            productId: index + 1,
            categoryId: idCategory,
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          seeders = [...seeders, newSeed];
        }
      });
    });
    return seeders
  },
  []
);

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "productCategories",
      categoriesProductsSeeders,
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("productCategories", null, {});
  },
};
