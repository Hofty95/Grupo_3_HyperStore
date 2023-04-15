"use strict";

/** @type {import('sequelize-cli').Migration} */

const {getRandomDiscount} = require('../../tools/randomNum')


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        name : "Notebook Hyundai 14.1 Hybook Intel Celeron N4020 4GB Ram 128GB SSD W10",
        price : 130000,
        discount : getRandomDiscount(10,75),
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
        discount : getRandomDiscount(10,65),
        description : "Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.",
        specifications : "Conectividad 3 DisplayPort 1.4, HDMI 2.1, Cantidad máxima de monitores 4 Resolución máxima 7680x4320",
        gamaId : null,
        brandId : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Monitor Daewoo DW-MON19 led 19 negro 100V/240V",
        price : 34.832,
        discount : getRandomDiscount(10,75),
        description : "Disfrutá de todas las cualidades que el monitor Daewoo DW-MON19 tiene para ofrecerte. Percibí las imágenes de una manera completamente diferente y complementá cualquier espacio ya sea en tu casa u oficina.",
        specifications : "Tamaño de pantalla : 19'', Resolución de la pantalla 1366 px x 768 px, Frecuencia de actualización recomendada 60 Hz",
        gamaId : null,
        brandId : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Mouse gamer Logitech G Series Lightsync G203 negro",
        price : 9999,
        discount : getRandomDiscount(10,60),
        description : "Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.",
        specifications : "Sistemas operativos compatibles Windows 7, macOS 10.13, Chrome OS,Con conexión USB Sí, Cantidad de botones 6 Interfaces USB Alcance máximo 2.1 m",
        gamaId : null,
        brandId : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Teclado bluetooth Logitech K380 QWERTY español color grafito",
        price : 18150,
        discount : getRandomDiscount(10,50),
        description : "Innovadores en diseño y tecnología, Logitech se encarga de brindar la mejor experiencia de uso para sus usuarios. Sus teclados resaltan por ser resistentes y muy de buena calidad, por lo que podrás disfrutarlos por un largo tiempo. ",
        specifications : "Marca : Logitech, Modelo : K380 , Color del teclado : Grafito, Layout : QWERTY, Idioma : Español",
        gamaId : null,
        brandId : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Parlante Logitech S150 black",
        price : 8000,
        discount : getRandomDiscount(3,60),
        description : "Logitech S150 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.",
        specifications : "Potencia de salida (RMS) 1.2 W, Tipos de filtros del parlante Pasivo, Respuesta mínima en frecuencia - Respuesta máxima en frecuencia 90 Hz - 20 kHz" ,
        gamaId : null,
        brandId : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Escritorio Mesa Pc Gamer Con Alzada 140cm Porta Auriculares",
        price : 9999,
        discount : getRandomDiscount(10,40),
        description : "¡Eleva tu juego con nuestro escritorio gamer con alzada de Delos! Con estantes, espacio para CPU y accesorios porta auriculares y pasa cables, este escritorio es resistente y duradero. Su diseño moderno y atractivo complementa cualquier decoración de interiores, y su alzada te brinda un espacio adicional para colocar tus dispositivos de manera ordenada.",
        specifications : "Materiales del escritorio: Melamina, Con cajones: No, Es flotante: No,  Es en forma de L: No, Con luces LED: No, Requiere ensamblado: Sí, Peso: 39.6 kg",
        gamaId : null,
        brandId : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Cámara web Logitech C922 Pro Full HD 30FPS color negro",
        price : 9999,
        discount : getRandomDiscount(10,60),
        description : "Logitech es una empresa suiza con alcance internacional que diseña productos y experiencias para acompañar las actividades cotidianas de las personas que la eligen. Cuando crear tecnología, se enfoca en la manera como sus clientes se conectan e interactúan con el mundo digital. Es por ello que esta cámara puede ser de gran utilidad en tu día a día.",
        specifications : "Resolución máxima de video: 1920 px x 1080 px Tipo de resolución máxima de video: Full HD Resolución de imagen de la cámara: 3 Mpx Con micrófono: Sí Interfaces: USB-A 2.0 Funciones: Auto-foco, Micrófono con cancelación de ruido, Corrección de luz, Luz indicadora",
        gamaId : null,
        brandId : null,
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ],
   {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
