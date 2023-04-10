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
    name: "placa-1.png",
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
  }, 
  {
    name: "monitor-daewoo-19-dw-mon19.jpg",
    productId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "D_NQ_NP_788824-MLA48691141141_122021-O.jpg",
    productId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "D_NQ_NP_705243-MLA49023731800_022022-O.jpg",
    productId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "25958_25.jpg",
    productId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  }, 
  {
    name: "25958_5.jpg",
    productId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  }, 
  {
    name : "descarga.jpg",
    productId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "g203-black-gallery-1.png",
    productId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "g203-black-gallery-2.png",
    productId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "g203-black-gallery-3.png",
    productId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "maxresdefault.jpg",
    productId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "1.png",
    productId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "2.png",
    productId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "3.png",
    productId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "4.png",
    productId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "5.png",
    productId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "parlante-1.png",
    productId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "parlante-2.png",
    productId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "parlante-3.png",
    productId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "parlante-4.png",
    productId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "parlante-5.jpg",
    productId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "escritorio-1.png",
    productId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "escritorio-2.png",
    productId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "escritorio-3.png",
    productId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "escritorio-4.png",
    productId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "escritorio-5.png",
    productId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "camara-1.png",
    productId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "camara-2.png",
    productId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "camara-3.png",
    productId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "camara-4.png",
    productId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "camara-5.png",
    productId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', productImages, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
