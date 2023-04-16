"use strict";

/** @type {import('sequelize-cli').Migration} */

const products = require("../../data/productsSeeders");
const productsSeeders = products.map(({ categories, ...product }) => product);

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", productsSeeders, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
