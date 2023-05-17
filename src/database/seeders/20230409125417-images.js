'use strict';

/** @type {import('sequelize-cli').Migration} */
const productImages = [
  {
    name: "placa1.jpg",
    productId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "placa2.jpg",
    productId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "placa3.jpg",
    productId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "placa4.jpg",
    productId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "placa5.jpg",
    productId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "ryzen1.jpg",
    productId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "ryzen2.jpg",
    productId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "ryzen3.jpg",
    productId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "ryzen4.jpg",
    productId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "amd6800xt1.png",
    productId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "amd6800xt2.png",
    productId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "amd6800xt3.png",
    productId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "amd6800xt4.png",
    productId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  }, 
  {
    name: "amd6800xt5.png",
    productId: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  }, 
  {
    name : "auricularHS801.png",
    productId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "auricularHS802.png",
    productId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "auricularHS803.png",
    productId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "auricularHS804.png",
    productId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "auricularHS805.png",
    productId: 4,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "teclado-corsair-k70-1.png",
    productId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "teclado-corsair-k70-2.png",
    productId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "teclado-corsair-k70-3.jpg",
    productId: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "gabinete-corsair-delta1.png",
    productId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "gabinete-corsair-delta2.jpg",
    productId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "gabinete-corsair-delta3.jpg",
    productId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "gabinete-corsair-delta4.jpg",
    productId: 6,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "monitor-gigabyte1.png",
    productId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "monitor-gigabyte2.png",
    productId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "monitor-gigabyte3.png",
    productId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "monitor-gigabyte4.png",
    productId: 7,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "monitor-gigabyte-g27f-1.png",
    productId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "monitor-gigabyte-g27f-2.png",
    productId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "monitor-gigabyte-g27f-3.png",
    productId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "monitor-gigabyte-g27f-4.png",
    productId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "monitor-gigabyte-g27f-5.png",
    productId: 8,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "notebook-gigabyte-aero16-1.jpg",
    productId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "notebook-gigabyte-aero16-2.jpg",
    productId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "notebook-gigabyte-aero16-3.jpg",
    productId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "notebook-gigabyte-aero16-4.png",
    productId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "notebook-gigabyte-aero16-5.png",
    productId: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "mouse-logitech-g203-1.jpg",
    productId: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "mouse-logitech-g203-2.png",
    productId: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "mouse-logitech-g203-3.jpg",
    productId: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "mouse-logitech-g203-4.jpg",
    productId: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "mouse-logitech-g203-5.jpg",
    productId: 10,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "auricular-inalambrico-logitech-g435-1.png",
    productId: 11,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "auricular-inalambrico-logitech-g435-2.jpg",
    productId: 11,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "auricular-inalambrico-logitech-g435-3.jpg",
    productId: 11,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "auricular-inalambrico-logitech-g435-4.jpg",
    productId: 11,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "teclado-bluetooth-logitech-1.png",
    productId: 12,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "teclado-bluetooth-logitech-2.png",
    productId: 12,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "teclado-bluetooth-logitech-3.png",
    productId: 12,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "teclado-bluetooth-logitech-4.png",
    productId: 12,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "placa-de-video-nvidia-colourful-1.png",
    productId: 13,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "placa-de-video-nvidia-colourful-2.png",
    productId: 13,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "placa-de-video-nvidia-colourful-3.png",
    productId: 13,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "placa-de-video-nvidia-colourful-4.png",
    productId: 13,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: "placa-de-video-nvidia-colourful-5.png",
    productId: 13,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "placa-de-video-asus-1.png",
    productId : 14,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "placa-de-video-asus-2.png",
    productId : 14,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "placa-de-video-asus-3.png",
    productId : 14,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "placa-de-video-asus-4.png",
    productId : 14,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "placa-de-video-asus-5.png",
    productId : 14,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "placa-de-video-nvidia-colourful-2060-1.jpg",
    productId : 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "placa-de-video-nvidia-colourful-2060-2.jpg",
    productId : 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "placa-de-video-nvidia-colourful-2060-3.jpg",
    productId : 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "placa-de-video-nvidia-colourful-2060-4.jpg",
    productId : 15,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "teclado-gamer-razer-bluetooth-1.jpg",
    productId : 16,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "teclado-gamer-razer-bluetooth-2.jpg",
    productId : 16,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "teclado-gamer-razer-bluetooth-3.jpg",
    productId : 16,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "teclado-gamer-razer-bluetooth-4.jpg",
    productId : 16,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "auriculares-in-ear-razer-1.jpg",
    productId : 17,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "auriculares-in-ear-razer-2.jpg",
    productId : 17,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "auriculares-in-ear-razer-3.jpg",
    productId : 17,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "auriculares-in-ear-razer-4.jpg",
    productId : 17,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "auriculares-in-ear-razer-5.jpg",
    productId : 17,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "mousepad-razer-1.jpg",
    productId : 18,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "mousepad-razer-2.jpg",
    productId : 18,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "mousepad-razer-3.jpg",
    productId : 18,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "mousepad-razer-4.jpg",
    productId : 18,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "fuente-de-alimentacion-redragon-800w-1.jpg",
    productId : 19,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "fuente-de-alimentacion-redragon-800w-2.jpg",
    productId : 19,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "fuente-de-alimentacion-redragon-800w-3.jpg",
    productId : 19,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "fuente-de-alimentacion-redragon-800w-4.jpg",
    productId : 19,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "fuente-de-alimentacion-redragon-800w-5.jpg",
    productId : 19,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "mouse-redragon-m607-1.png",
    productId : 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "mouse-redragon-m607-2.png",
    productId : 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "mouse-redragon-m607-3.png",
    productId : 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "mouse-redragon-m607-4.png",
    productId : 20,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "joystick-inalambrico-redragon-1.jpg",
    productId : 21,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "joystick-inalambrico-redragon-2.jpg",
    productId : 21,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "joystick-inalambrico-redragon-3.jpg",
    productId : 21,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "joystick-inalambrico-redragon-4.jpg",
    productId : 21,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "notebook-asus-rog-strix-1.jpg",
    productId : 22,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "notebook-asus-rog-strix-2.jpg",
    productId : 22,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "notebook-asus-rog-strix-3.jpg",
    productId : 22,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "notebook-asus-rog-strix-4.jpg",
    productId : 22,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "notebook-asus-rog-strix-5.jpg",
    productId : 22,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "ultrabook-asus-rog-1.jpg",
    productId : 23,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "ultrabook-asus-rog-2.jpg",
    productId : 23,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "ultrabook-asus-rog-3.jpg",
    productId : 23,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "ultrabook-asus-rog-4.jpg",
    productId : 23,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "ultrabook-asus-rog-5.jpg",
    productId : 23,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "auriculares-asus-rog-in-ear-1.jpeg",
    productId : 24,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "auriculares-asus-rog-in-ear-2.jpg",
    productId : 24,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "auriculares-asus-rog-in-ear-3.jpg",
    productId : 24,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name : "auriculares-asus-rog-in-ear-4.jpg",
    productId : 24,
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
