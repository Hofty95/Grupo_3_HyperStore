"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        name : "Notebook Hyundai 14.1 Hybook Intel Celeron N4020 4GB Ram 128GB SSD W10",
        price : 130000,
        discount : 15,
        description : "Con un veloz procesador Intel de doble núcleo, una pantalla vibrante de 14.1' y 128 GB de almacenamiento ultrarrápido, el Hyundai Hybook está diseñado para satisfacer tus necesidades. Su diseño elegante, liviano y portátil de 14.1' fue hecho para todos y cada uno.",
        specifications : "Resolución de la pantalla 1366 x 768, Memoria RAM 4 GB",
        gamaId : null,
        brandId : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Placa de Video PNY Nvidia Geforce RTX 3070 Ti XLR8 REVEL EPIC-X RGB 8GB GDDR6 LHR",
        price : 245000,
        discount : 25,
        description : "Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.",
        specifications : "Conectividad 3 DisplayPort 1.4, HDMI 2.1, Cantidad máxima de monitores 4 Resolución máxima 7680x4320",
        gamaId : null,
        brandId : null,
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ],
   {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
