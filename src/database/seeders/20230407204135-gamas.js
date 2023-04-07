'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Gamas',
     [
      {
        name : "Low",
        createdAt : new Date(),
        updatedAt : new Date ()
      },
      {
        name : "Mid",
        createdAt : new Date(),
        updatedAt : new Date ()
      },
      {
        name : "High",
        createdAt : new Date(),
        updatedAt : new Date ()
      },
     ],
     {});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Gamas', null, {});
    
  }
};
