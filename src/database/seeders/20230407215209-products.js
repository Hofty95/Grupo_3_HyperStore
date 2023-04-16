"use strict";

/** @type {import('sequelize-cli').Migration} */

const {getRandomDiscount} = require('../../tools/randomNum')


module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Products", [
      {
        name : "Placa de video AMD MSI Aero ITX Radeon RX 6400 Series RX 6400 Radeon RX 6400 AERO ITX 4G 4GB",
        price : 149999,
        discount : getRandomDiscount(10,55),
        description : `Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.
        AMD es un fabricante estadounidense de placas de video, por su tecnología se ha destacado en crear procesadores de alta gama que permiten un excelente funcionamiento del motor gráfico de tu computadora.
        Velocidad en cada lectura
        Como cuenta con 768 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU.
        Calidad de imagen
        Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración.`,
        specifications : `Interfaz PCI-Express 4.0.
        Bus de memoria: 64bit.
        Cantidad de núcleos: 768.
        Frecuencia boost del núcleo de 2321MHz.
        Resolución máxima: 7680x4320.
        Compatible con directX y openGL.
        Requiere de 350W de alimentación.
        Permite la conexión de hasta 2 pantallas simultáneas.
        Formatos de conexión: DisplayPort 1.4a, HDMI 2.1.
        Ideal para trabajar a alta velocidad.`,
        gamaId : 2,
        brandId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Procesador Amd Gamer Ryzen 7 5700x 8 Core 16 Hilos 4.6ghz",
        price : 161500,
        discount : getRandomDiscount(10,35),
        description : `AMD Ryzen 7 5700X Nuevo en caja sellada con garantia oficial AMD`,
        specifications : `Generación
        5°
        Zócalos compatibles
        AM4
        Arquitectura
        x86-64
        Aplicación
        Computadoras de escritorio
        Cantidad de núcleos de CPU
        8
        Es gamer
        Sí
        Está desbloqueado
        Sí
        Potencia de diseño térmico
        65 W
        Es OEM
        No
        Con hyper-threading
        No
        Cantidad de hilos de CPU
        16`,
        gamaId : 3,
        brandId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Placa De Video Amd Asrock Phantom Gaming Rx 6800xt 16gb Express 4.0 X16 Gddr6",
        price : 403000,
        discount : getRandomDiscount(10,45),
        description : `Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.

        AMD es un fabricante estadounidense de placas de video, por su tecnología se ha destacado en crear procesadores de alta gama que permiten un excelente funcionamiento del motor gráfico de tu computadora.
        
        Velocidad en cada lectura
        Como cuenta con 4608 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU.
        
        Calidad de imagen
        Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración.`,
        specifications : `Interfaz PCI-Express 4.0.
        Bus de memoria: 256bit.
        Frecuencia boost del núcleo de 2190MHz y base de 1850MHz.
        Resolución máxima: 7680x4320.
        Requiere de 700W de alimentación.
        Permite la conexión de hasta 4 pantallas simultáneas.
        Formatos de conexión: 3 DisplayPort 1.4, HDMI 2.1.
        Incluye: Guía rápida.
        Ideal para trabajar a alta velocidad.`,
        gamaId : 3,
        brandId : 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Auriculares Gamer Corsair Hs80 Rgb Usb Black Surround 7.1",
        price : 60000,
        discount : getRandomDiscount(10,50),
        description : `MARCA: Corsair
        MODELO: HS80 RGB USB
        
        Auriculares para juegos con cable HS80 RGB USB, carbón
        Los auriculares para juegos CORSAIR HS80 RGB USB ofrecen un sonido increíblemente rico en matices a través de los transductores de audio de neodimio de 50 mm de ajuste personalizado con sonido envolvente Dolby Audio 7.1.`,
        specifications : `Audio CUE Software: Yes
        Surround Sound: Yes
        Detachable Microphone: No
        Rechargble Battery: Yes
        Weight: 0.371
        Headset Frequency Response: 20Hz - 40 kHz
        Headset Battery Life: N/A
        Headphone Sensitivity: 116dB (+/-3dB)
        Headset Wireless Range: N/A
        Impedance: 32k Ohms @ 1 kHz
        Headset Type: Wired
        Headset Drivers: 50mm
        Cable Length: 1.8m
        Color: BLACK
        Audio: Dolby Audio
        Lighting: RGB
        Platform: PC
        Microphone Impedance: 2.2k Ohms
        Microphone Type: Omni-directional
        Microphone Frequency Response: 100Hz to 10kHz
        Microphone Sensitivity: -40dB (+/-3dB)`,
        gamaId : 2,
        brandId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Teclado gamer Corsair Champion Series K70 RGB TKL QWERTY Cherry MX RGB Speed inglés US color negro con luz RGB",
        price : 60000,
        discount : getRandomDiscount(10,49),
        description : `Corsair es un fabricante mundial de equipos y tecnología de alto rendimiento. Sus productos van dirigidos a jugadores, creadores de contenido y diseñadores. A su vez, con sus teclados podrás conseguir un óptimo desempeño al darle un uso intensivo.
        Distinción a todo color
        Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.`,
        specifications : `Función antighosting incorporada.
        Tipo de teclado: mecánico.
        Tecla cilíndrica.
        Con conector USB-C.
        Con cable removible.
        Indispensable para tus actividades.
        Las imágenes pueden ser ilustrativas.`,
        gamaId : 2,
        brandId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Gabinete Corsair Carbide Spec Delta Rgb Black Midtower 3xfan",
        price : 40000,
        discount : getRandomDiscount(3,50),
        description : `GABINETE CORSAIR CARBIDE SPEC DELTA RGB
        El Carbide Series SPEC-DELTA RGB es un gabinete ATX Mid-Tower con vidrio templado con un estilo angular llamativo, un potente flujo de aire y tres ventiladores RGB de refrigeración incluidos.
        DISEÑO ANGULAR: Los elementos angulares y oscuros del panel frontal del SPEC-DELTA RGB se vuelven transparentes gracias a la retroiluminación, creando una ventana única en su sistema.`,
        specifications : `Incluye fuente de alimentación: No
        Altura x Ancho x Largo: 45 cm x 21 cm x 44 cm. Es gamer: Sí`,
        gamaId : 2,
        brandId : 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : `Monitor gamer curvo Gigabyte G34WQC A LCD 34" negro 100V/240V`,
        price : 364000,
        discount : getRandomDiscount(10,40),
        description : `Una experiencia visual de calidad
        Este monitor de 34" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 3440 x 1440 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Una de sus virtudes es que posee pantalla antirreflejo, de esta manera no verás reflejado lo que está detrás de vos y vas a evitar forzar tu vista para enfocar el contenido. Su tiempo de respuesta de un milisegundo lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.`,
        specifications : `Pantalla LCD de 34".
        Curvo.
        Tiene una resolución de 3440px-1440px.
        Relación de aspecto de 21:9.
        Panel VA.
        Su brillo es de 350cd/m².
        Tipos de conexión: 2 HDMI 2.0, 2 DisplayPort 1.4, Jack 3.5 mm.
        Altavoces incluidos.
        Es reclinable.
        Comodidad visual en todo momento.`,
        gamaId : 3,
        brandId : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Monitor 27'' 165hz 1ms 1080p Led Ips Gigabyte G27f 2 Gaming",
        price : 140000,
        discount : getRandomDiscount(10,45),
        description : `Orientado para el gaming en su estado más puro, competitivo e inmersivo, con resoluciones Full HD y tasa de refresco de 165hz, vas a llevar tus juegos a otro nivel de calidad, fluidez, rendimiento profesional e increíble versatilidad con una experiencia inigualable.

        Los monitores para juegos de GIGABYTE ofrecen las mejores especificaciones y calidad, los usuarios pueden disfrutar realmente de un rendimiento de primer nivel sin necesidad de extravagancias.`,
        specifications : `Marca: Gigabyte
        Modelo: G27F 2 (G27F 2 AR)
        -Tipo de Panel: IPS
        -Tipo de retroiluminación: LED
        -Tamaño de Pantalla: 27"
        -Resolución Máxima: 1920 x 1080 (Full HD)
        -Curvatura: No
        -Relación de Aspecto: 16:9
        -Angulo de Visión: 178° / 178° (H / V)
        -Colores Desplegables: 16.7 millones de Colores
        -Contraste: 1000:1
        -Brillo: 400 cd/m²
        -Tiempo de Respuesta: 1ms (MPRT)
        -Frecuencia de Actualización: 165Hz
        -HDR: Si
        -Free-Sync: Si
        -G-Sync: No
        -Puertos: 2x HDMI / 1x DisplayPort / 1x Jack / 2x USB 3.2
        -Altavoces: No
        -Soporte VESA: Si (100x100mm)
        -Inclinación: -5° ~ +20°
        -Giro: N/A
        -Pivot: N/A
        -Ajuste de altura: 0 ~ 130 mm
        -Voltaje: AC 100V - 240V
        -Dimensiones con base: 615.11 x 535.66 x 193.63 mm
        -Dimensiones sin base: 615.11 x 367.35 x 42.21 mm
        -Peso: 5.2 Kg
        SKU 27221441`,
        gamaId : 3,
        brandId : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Notebook Gigabyte Aero16 Oled I7 12700h 16gb 1tb Rtx 3060p",
        price : 999999,
        discount : getRandomDiscount(10,45),
        description : `Frecuencia de actualización de la pantalla
        60 Hz
        Resolución de la pantalla
        3840 px x 2400 px
        Con pantalla táctil
        No
        Tamaño de la pantalla
        16 "`,
        specifications : `Tarjeta gráfica
        rtx 3060
        Marca del procesador
        Intel
        Línea del procesador
        Core i7
        Cantidad de núcleos
        6`,
        gamaId : 3,
        brandId : 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Mouse gamer Logitech G Series Lightsync G203 blanco",
        price : 9999,
        discount : getRandomDiscount(10,45),
        description : `Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.`,
        specifications : `Plug And Play
        Solo debés colocar el receptor en un puerto USB de la computadora y ya podés empezar a usarlo. No hace falta emparejar el mouse ni descargar software para utilizarlo.
        
        Apto para fácil traslado
        Navegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.`,
        gamaId : 1,
        brandId : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Auriculares gamer inalámbricos Logitech G Series G435 negro y amarillo fluorescente",
        price : 40000,
        discount : getRandomDiscount(10,45),
        description : `¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Logitech G435 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.

        El formato perfecto para vos
        El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.`,
        specifications : `Alcance inalámbrico de 10 m.
        La batería dura 18 h.
        Modo manos libres incluido.
        Con micrófono incorporado.
        Sonido superior y sin límites.
        Cómodos y prácticos.
        La duración de la batería depende del uso que se le dé al producto.
        Tamaño del altavoz: 40mm.`,
        gamaId : 2,
        brandId : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Teclado bluetooth Logitech K380 QWERTY español color grafito",
        price : 18000,
        discount : getRandomDiscount(10,45),
        description : `Innovadores en diseño y tecnología, Logitech se encarga de brindar la mejor experiencia de uso para sus usuarios. Sus teclados resaltan por ser resistentes y muy de buena calidad, por lo que podrás disfrutarlos por un largo tiempo.`,
        specifications : `Conectividad con múltiples dispositivos.
        Ergonómico y apto para diversos usos.
        Resiste a salpicaduras.
        Tipo de teclado: tijera.
        Tecla plana.
        Medidas: 279mm de ancho, 124mm de alto y 16mm de profundidad.
        Indispensable para tus actividades.
        Las imágenes pueden ser ilustrativas.`,
        gamaId : 2,
        brandId : 4,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Placa de video Nvidia Colorful Colorful GeForce GTX 16 Series GTX 1660 SUPER GEFORCE GTX 1660 SUPER NB 6G-V 6GB",
        price : 160000,
        discount : getRandomDiscount(10,45),
        description : `Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.

        Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero.`,
        specifications : `Interfaz PCI-Express 3.0.
        Bus de memoria: 192bit.
        Cantidad de núcleos: 1408.
        Frecuencia boost del núcleo de 1785MHz y base de 1530MHz.
        Requiere de 450W de alimentación.
        Con ventiladores duales de 90 mm que mantienen la temperatura equilibrada.
        Preparada para realidad virtual.
        Formatos de conexión: DisplayPort, HDMI, DVI.
        Incluye: Manual.
        Ideal para trabajar a alta velocidad.`,
        gamaId : 2,
        brandId : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Placa de video Nvidia Asus Phoenix GeForce GTX 16 Series GTX 1650 PH-GTX1650-O4GD6 OC Edition 4GB",
        price : 130000,
        discount : getRandomDiscount(10,45),
        description : `Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.

        Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero.
        `,
        specifications : `Interfaz PCI-Express 3.0.
        Bus de memoria: 128bit.
        Cantidad de núcleos: 896.
        Resolución máxima: 7680x4320.
        Requiere de 300W de alimentación.
        Permite la conexión de hasta 3 pantallas simultáneas.
        Formatos de conexión: HDMI 2.0b, DL-DVI-D, DisplayPort 1.4.
        Incluye: Guía rápida.
        Ideal para trabajar a alta velocidad.`,
        gamaId : 2,
        brandId : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Placa De Video Colorful Geforce Rtx 2060 12gb Ddr6 Rtx2060",
        price : 9999,
        discount : getRandomDiscount(10,45),
        description : "Colorful RTX2060 NB DUO 12G-V",
        specifications : `- Chip Series: GeForce® RTX 2060
        - GPU Code Name: TU106
        - Manufacturing Process: 12nm
        - CUDA Cores: 2176
        - Core Clock: Base: 1470 Mhz; Boost: 1650 Mhz
        - Memory Speed Grade: 14 Gbps
        - Memory Size: 12 Gb
        - Memory Bus Width: 192 bit
        - Memory Type: GDDR6
        - Memory Bandwidth: 336Gb/s
        - Power Connector: 8 pin
        - Power Supply: 6+2
        - TDP: 184 W
        - Display Ports: DP + HDMI + DVI
        - Fans Type: FAN
        - DirectX: 12.1 / 4.5
        - NV technology Support: Real-Time Ray Tracing, Ansel, GPU Boost
        - Product Size: 253.5 x 131.5 x 41.5mm`,
        gamaId : 2,
        brandId : 5,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Teclado gamer Razer BlackWidow QWERTY Green inglés US color negro con luz RGB",
        price : 100000,
        discount : getRandomDiscount(10,45),
        description : `Hablar de Razer dentro del mundo gamer es palabra mayor. Esta compañía ofrece productos de muy alta calidad a sus usuarios. Su línea de teclados es reconocida por haber recibido distintos galardones y premios internacionales por su alto desempeño.

        Distinción a todo color
        Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.`,
        specifications : `Contiene teclado numérico.
        Función antighosting incorporada.
        Tipo de teclado: mecánico.
        Tecla cilíndrica.
        Con conector USB 2.0.
        Indispensable para tus actividades.
        Las imágenes pueden ser ilustrativas.`,
        gamaId : 3,
        brandId : 6,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Auriculares in-ear gamer inalámbricos Razer Hammerhead True Wireless X negro con luz verde LED",
        price : 35000,
        discount : getRandomDiscount(10,45),
        description : `¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Razer Hammerhead True Wireless X no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.

        El formato perfecto para vos
        Al ser in-ear, mejoran la calidad del audio y son de tamaño pequeño para poder insertarse en tu oreja. Son ideales para acompañarte a la hora de hacer ejercicio mientras te sumergís en el mejor sonido envolvente.`,
        specifications : `Cuenta con tecnología True Wireless.
        Alcance inalámbrico de 10 m.
        La batería dura 6 h.
        Modo manos libres incluido.
        Con cancelación de ruido.
        Con estuche de carga.
        Con micrófono incorporado.
        Resistentes al agua.
        Su clasificación IP es IPX4.
        Uso apto para deporte.
        Sonido superior y sin límites.
        Cómodos y prácticos.
        La duración de la batería depende del uso que se le dé al producto.
        Tamaño del altavoz: 13mm.`,
        gamaId : 2,
        brandId : 6,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Mousepad Gamer Razer Sphex V3 Small Plastico Delgado 27x21 F",
        price : 6500,
        discount : getRandomDiscount(10,45),
        description : `Obtén la ventaja ganadora con la Razer Sphex V3, la última versión de nuestra alfombrilla dura para ratón más fina, ahora un 20 % más fina y disponible en tamaño grande. Actualizada con un aspecto elegante y negro y una superficie más suave que se ancla gracias a su base adhesiva para un control estable`,
        specifications : `Su superficie dura y más suave ofrece un seguimiento preciso optimizado para los sensores ópticos, mientras que su perfil un 20 % más fino hace que se convierta en una parte más de tu escritorio. Disponible en tamaño grande y pequeño.
        1. La Razer Sphex V3 tiene 0,4 mm de grosor, un 20 % más fina que su predecesora, la Razer Sphex V2.
        2. Actualizada con un aspecto elegante y negro, además de una superficie más suave, la Sphex V3 es un 50 % más grande que la Sphex V2 estándar.`,
        gamaId : 2,
        brandId : 6,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Fuente De Alimentación Para Pc Redragon Gc Series Gc-ps011 800w Black 100v/240v 80 Plus Bronze Modular",
        price : 37000,
        discount : getRandomDiscount(10,45),
        description : `Diseñada para ganar espacio.
        Sus cables desmontables y flexibles permiten optimizar espacio utilizando sólo los necesarios. Si eres de los que prefieren prolijidad por fuera y también por dentro, esta fuente te encantará.
        Calidad 80 Plus Bronze. Puedes estar seguro de que la eficiencia de la energía consumida siempre será superior al 80%. ¡Lo certificamos!`,
        specifications : `Tipo de fuente de alimentación para PC: ATX
        Tipo de refrigeración: Por aire
        Con protección de bajo voltaje: Sí
        Con iluminación RGB: No
        Cantidad de conectores HDD: 3
        Cantidad de conectores SATA: 6
        Cantidad de conectores PCI-E: 4
        Certificación de eficiencia: 80 Plus Bronze
        Diámetro del ventilador: 120 mm
        Altura de la fuente de alimentación para PC x Ancho de la fuente de alimentación para PC: 160 mm x 150 mm
        Largo de la fuente de alimentación para PC: 86 mm
        Frecuencia: 47/63hz`,
        gamaId : 3,
        brandId : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Mouse gamer Redragon Griffin M607 negro",
        price : 6500,
        discount : getRandomDiscount(10,45),
        description : `Con más de 20 años de experiencia en fabricación de productos, Redragon innova día a día en diseño y calidad. Su objetivo es producir equipamiento de alta gama para jugadores, con excelentes prestaciones y a un precio accesible. Los mouses Redragon son adecuados para todas las ocasiones, ya sea para entretenerse en el hogar o usarlo en el trabajo. Experimentá el diseño cómodo y elegante de este dispositivo.`,
        specifications : `Tipo de sensor Óptico, Tecnología del sensor PixArt P3212 Resolución del sensor 7200 dp`,
        gamaId : 2,
        brandId : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Joystick inalámbrico Redragon Harrow G808 negro",
        price : 13000,
        discount : getRandomDiscount(10,45),
        description : `Control preciso
        Este mando combina funciones revolucionarias mientras conserva precisión, comodidad y exactitud en cada movimiento. Gracias a su ergonomía especialmente pensada para la posición de tu mano, podés pasar horas jugando con total confort.`,
        specifications : `Mando inalámbrico. Compatible con: Computadoras y PlayStation 3. Incluye un control. Con sistema de vibración incorporado.
        Cuenta con 1 dongle usb 2.0, 1 cable micro-usb, sticker redragon y 1 manual. Diversión garantizada con tu joystick Redragon. Diseño ergonómico.`,
        gamaId : 2,
        brandId : 7,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : `Notebook gamer Asus ROG Strix G15(2022) gray 15.6", AMD Ryzen 7 6800H 16GB de RAM 512GB SSD, NVIDIA GeForce RTX 3050 144 Hz 1920x1080px Windows 11 Home`,
        price : 630000,
        discount : getRandomDiscount(10,45),
        description : `Disfrutá de la perfecta combinación de rendimiento y diseño con esta notebook Asus ROG Strix G15(2022). Encontrarás en ella una excelente herramienta para tus trabajos de todos los días y para tus momentos de entretenimiento. Aprovechá la experiencia extraordinaria que la marca tiene para ofrecerte y optimizá la calidad de tus imágenes y videos.
        Pantalla con gran impacto visual. Su pantalla de 15.6" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.`,
        specifications : `Procesador AMD Ryzen 7.
        Memoria RAM de 16GB.
        Resolución de 1920x1080 px.
        Es antirreflejo.
        Placa de video NVIDIA GeForce RTX 3050.
        Conexión wifi y bluetooth.
        Cuenta con 4 puertos USB y puerto HDMI.
        Modo de sonido Dolby Atmos, Stereo.
        Con teclado retroiluminado.
        La duración de la batería depende del uso que se le dé al producto.`,
        gamaId : 3,
        brandId : 8,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : `Ultrabook gamer Asus ROG Zephyrus G14 GA402RK moonlight white 14", AMD Ryzen 9 6900HS 16GB de RAM 1 TB SSD, AMD Radeon RX 6800S 120 Hz 2560x1600px Windows 11 Home`,
        price : 1200000,
        discount : getRandomDiscount(10,45),
        description : `Disfrutá de la perfecta combinación de rendimiento y diseño con esta notebook Asus ROG Zephyrus G14 GA402RK. Encontrarás en ella una excelente herramienta para tus trabajos de todos los días y para tus momentos de entretenimiento. Aprovechá la experiencia extraordinaria que la marca tiene para ofrecerte y optimizá la calidad de tus imágenes y videos.
        Pantalla con gran impacto visual
        Su pantalla de 14" y 2560x1600 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.`,
        specifications : `Procesador AMD Ryzen 9.
        Memoria RAM de 16GB.
        Resolución de 2560x1600 px.
        Es antirreflejo.
        Placa de video AMD Radeon RX 6800S.
        Conexión wifi y bluetooth.
        Cuenta con 4 puertos USB y puerto HDMI.
        Incluye lector de tarjeta de memoria.
        Modo de sonido Smart Amp, Dolby Atmos, Quad, AI noise-canceling.
        Con teclado retroiluminado.
        La duración de la batería depende del uso que se le dé al producto.`,
        gamaId : 3,
        brandId : 8 ,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name : "Auricular Gamer Asus Rog Cetra In-ear Noice Cancelling Usb-c",
        price : 55000,
        discount : getRandomDiscount(10,45),
        description : `Auriculares de Alta Gama ROG Cetra RGB con Noice Cancellig Activa
        Auriculares internos para juegos ROG Cetra RGB con cancelación activa de ruido (ANC), controladores ASUS Essence de 10 mm y conector USB-C para PC, dispositivos móviles y Nintendo Switch, e iluminación Aura Sync`,
        specifications : `La tecnología de cancelación activa de ruido elimina el ruido ambiental para brindar experiencias de juego inmersivas en cualquier lugar.
        Los controladores ASUS Essence de gran tamaño de 10 mm ofrecen unos graves increíblemente potentes y un audio de juego optimizado.
        El modo ambiental permite que entren los sonidos del mundo exterior para los momentos en los que necesitas escuchar lo que sucede a tu alrededor.
        Un diseño ergonómico, tres tamaños de geles y aletas para los oídos y un par de almohadillas de espuma garantizan un ajuste seguro y cómodo.
        El conector USB-C proporciona compatibilidad multiplataforma para teléfonos móviles, PC, Mac y Nintendo Switch.
        La iluminación RGB circular multicolor y personalizable le permite brillar con estilo`,
        gamaId : 2,
        brandId : 8,
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
