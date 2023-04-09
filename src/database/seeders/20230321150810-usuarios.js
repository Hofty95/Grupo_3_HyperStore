"use strict";

/** @type {import('sequelize-cli').Migration} */

const bcryptjs = require('bcryptjs')
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name : "Admin",
          surname : "Test",
          email : "admin@test.com",
          pass : bcryptjs.hashSync('123123',10),
          rolId : 1,
          addressId : 1,
          createdAt : new Date(),
          updatedAt : new Date(),
        },
        {
          name : "User",
          surname : "Test",
          email : "user@test.com",
          pass : bcryptjs.hashSync('123123',10),
          rolId : 2,
          addressId : 2,
          createdAt : new Date(),
          updatedAt : new Date(),
        },
      
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
