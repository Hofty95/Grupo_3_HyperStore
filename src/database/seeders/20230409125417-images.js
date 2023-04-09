'use strict';

/** @type {import('sequelize-cli').Migration} */
const productImages = [
  {
    name: "22766_800.jpg",
    productId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "22766_801.jpg",
    productId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "22766_802.jpg",
    productId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "22766_803.jpg",
    productId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "22766_804.jpg",
    productId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "1.png",
    productId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "4_XLR8-RTX-3070-Ti-EPIC-X-Triple-Fan-P-la-2.png",
    productId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "4_XLR8-RTX-3070-Ti-EPIC-X-Triple-Fan-P-la-3.png",
    productId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "2543537-n0.jpg",
    productId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "XLR8-RTX-3070-EPIC-X-Triple-Fan-P-ra-4.png",
    productId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', productImages, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
