'use strict';

/** @type {import('sequelize-cli').Migration} */

const addressJSON = require('../../data/address.json');
const addresess = addressJSON.map(address=> {
  return {
    ...address,
    createdAt : new Date(),
    updatedAt : new Date(),
  }
})


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Addresses",
      addresess,
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});

  }
};