'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Brands', 
        [
          {
            name : "AMD",
            createdAt : new Date(),
            updatedAt : new Date ()
          },
          {
            name : "Corsair",
            createdAt : new Date(),
            updatedAt : new Date ()
          },
          {
            name : "Gigabyte",
            createdAt : new Date(),
            updatedAt : new Date ()
          },
          {
            name : "Logitech",
            createdAt : new Date(),
            updatedAt : new Date ()
          },
          {
            name : "Nvidia",
            createdAt : new Date(),
            updatedAt : new Date ()
          },
          {
            name : "Razer",
            createdAt : new Date(),
            updatedAt : new Date ()
          },
          {
            name : "Redragon",
            createdAt : new Date(),
            updatedAt : new Date ()
          },
          {
            name : "Rog",
            createdAt : new Date(),
            updatedAt : new Date ()
          },
          {
            name : "Other",
            createdAt : new Date(),
            updatedAt : new Date ()
          },
        ],
      {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Brands', null, {});
     
  }
};
