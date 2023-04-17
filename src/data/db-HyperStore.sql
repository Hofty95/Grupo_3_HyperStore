CREATE DATABASE  IF NOT EXISTS `hyperstore_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hyperstore_db`;
-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: hyperstore_db
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `street` varchar(255) DEFAULT NULL,
  `postcode` int DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'8th Floor',2948,'New York','Jamaica','2023-04-16 17:14:38','2023-04-16 17:14:38'),(2,'Room 1493',6249,'Illinois','Chicago','2023-04-16 17:14:38','2023-04-16 17:14:38'),(3,'Room 827',9360,'Virginia','Manassas','2023-04-16 17:14:38','2023-04-16 17:14:38'),(4,'PO Box 996',1498,'Colorado','Denver','2023-04-16 17:14:38','2023-04-16 17:14:38'),(5,'Suite 31',2632,'Florida','Naples','2023-04-16 17:14:38','2023-04-16 17:14:38');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'AMD','2023-04-16 17:14:38','2023-04-16 17:14:38'),(2,'Corsair','2023-04-16 17:14:38','2023-04-16 17:14:38'),(3,'Gigabyte','2023-04-16 17:14:38','2023-04-16 17:14:38'),(4,'Logitech','2023-04-16 17:14:38','2023-04-16 17:14:38'),(5,'Nvidia','2023-04-16 17:14:38','2023-04-16 17:14:38'),(6,'Razer','2023-04-16 17:14:38','2023-04-16 17:14:38'),(7,'Redragon','2023-04-16 17:14:38','2023-04-16 17:14:38'),(8,'Rog','2023-04-16 17:14:38','2023-04-16 17:14:38'),(9,'Other','2023-04-16 17:14:38','2023-04-16 17:14:38');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Pc','2023-04-16 17:14:38','2023-04-16 17:14:38'),(2,'Monitores','2023-04-16 17:14:38','2023-04-16 17:14:38'),(3,'Mouse','2023-04-16 17:14:38','2023-04-16 17:14:38'),(4,'Teclado','2023-04-16 17:14:38','2023-04-16 17:14:38'),(5,'Audio','2023-04-16 17:14:38','2023-04-16 17:14:38'),(6,'Mobiliario','2023-04-16 17:14:38','2023-04-16 17:14:38'),(7,'Periféricos','2023-04-16 17:14:38','2023-04-16 17:14:38');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gamas`
--

DROP TABLE IF EXISTS `gamas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gamas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gamas`
--

LOCK TABLES `gamas` WRITE;
/*!40000 ALTER TABLE `gamas` DISABLE KEYS */;
INSERT INTO `gamas` VALUES (1,'Low','2023-04-16 17:14:38','2023-04-16 17:14:38'),(2,'Mid','2023-04-16 17:14:38','2023-04-16 17:14:38'),(3,'High','2023-04-16 17:14:38','2023-04-16 17:14:38');
/*!40000 ALTER TABLE `gamas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'placa1.jpg',1,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(2,'placa2.jpg',1,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(3,'placa3.jpg',1,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(4,'placa4.jpg',1,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(5,'placa5.jpg',1,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(6,'ryzen1.jpg',2,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(7,'ryzen2.jpg',2,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(8,'ryzen3.jpg',2,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(9,'ryzen4.jpg',2,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(10,'amd6800xt1.png',3,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(11,'amd6800xt2.png',3,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(12,'amd6800xt3.png',3,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(13,'amd6800xt4.png',3,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(14,'amd6800xt5.png',3,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(15,'auricularHS801.png',4,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(16,'auricularHS802.webp',4,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(17,'auricularHS803.webp',4,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(18,'auricularHS804.png',4,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(19,'auricularHS805.webp',4,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(20,'teclado-corsair-k70-1.png',5,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(21,'teclado-corsair-k70-2.webp',5,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(22,'teclado-corsair-k70-3.png',5,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(23,'gabinete-corsair-delta1.png',6,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(24,'gabinete-corsair-delta2.jpg',6,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(25,'gabinete-corsair-delta3.jpg',6,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(26,'gabinete-corsair-delta4.avif',6,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(27,'monitor-gigabyte1.png',7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(28,'monitor-gigabyte2.png',7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(29,'monitor-gigabyte3.png',7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(30,'monitor-gigabyte4.webp',7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(31,'monitor-gigabyte-g27f-1.png',8,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(32,'monitor-gigabyte-g27f-2.png',8,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(33,'monitor-gigabyte-g27f-3.png',8,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(34,'monitor-gigabyte-g27f-4.png',8,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(35,'monitor-gigabyte-g27f-5.png',8,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(36,'notebook-gigabyte-aero16-1.jpg',9,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(37,'notebook-gigabyte-aero16-2.jpg',9,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(38,'notebook-gigabyte-aero16-3.jpg',9,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(39,'notebook-gigabyte-aero16-4.webp',9,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(40,'notebook-gigabyte-aero16-5.webp',9,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(41,'mouse-logitech-g203-1.jpg',10,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(42,'mouse-logitech-g203-2.png',10,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(43,'mouse-logitech-g203-3.jpg',10,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(44,'mouse-logitech-g203-4.jpg',10,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(45,'mouse-logitech-g203-5.jpg',10,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(46,'auricular-inalambrico-logitech-g435-1.png',11,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(47,'auricular-inalambrico-logitech-g435-2.jpg',11,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(48,'auricular-inalambrico-logitech-g435-3.jpg',11,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(49,'auricular-inalambrico-logitech-g435-4.jpg',11,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(50,'teclado-bluetooth-logitech-1.png',12,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(51,'teclado-bluetooth-logitech-4.webp',12,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(52,'teclado-bluetooth-logitech-2.webp',12,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(53,'teclado-bluetooth-logitech-3.webp',12,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(54,'placa-de-video-nvidia-colourful-1.png',13,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(55,'placa-de-video-nvidia-colourful-2.webp',13,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(56,'placa-de-video-nvidia-colourful-3.webp',13,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(57,'placa-de-video-nvidia-colourful-4.png',13,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(58,'placa-de-video-nvidia-colourful-5.png',13,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(59,'placa-de-video-asus-1.png',14,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(60,'placa-de-video-asus-2.png',14,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(61,'placa-de-video-asus-3.png',14,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(62,'placa-de-video-asus-4.png',14,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(63,'placa-de-video-asus-1.png',14,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(64,'placa-de-video-asus-5.webp',14,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(65,'placa-de-video-nvidia-colourful-2060-1.jpg',15,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(66,'placa-de-video-nvidia-colourful-2060-2.jpg',15,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(67,'placa-de-video-nvidia-colourful-2060-3.jpg',15,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(68,'placa-de-video-nvidia-colourful-2060-4.jpg',15,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(69,'teclado-gamer-razer-bluetooth-1.jpg',16,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(70,'teclado-gamer-razer-bluetooth-2.webp',16,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(71,'teclado-gamer-razer-bluetooth-3.jpg',16,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(72,'teclado-gamer-razer-bluetooth-4.jpg',16,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(73,'auriculares-in-ear-razer-1.jpg',17,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(74,'auriculares-in-ear-razer-2.webp',17,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(75,'auriculares-in-ear-razer-3.jpg',17,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(76,'auriculares-in-ear-razer-4.jpg',17,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(77,'auriculares-in-ear-razer-5.jpg',17,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(78,'mousepad-razer-1.jpg',18,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(79,'mousepad-razer-2.jpg',18,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(80,'mousepad-razer-3.jpg',18,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(81,'mousepad-razer-4.jpg',18,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(82,'fuente-de-alimentacion-redragon-800w-1.jpg',19,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(83,'fuente-de-alimentacion-redragon-800w-2.webp',19,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(84,'fuente-de-alimentacion-redragon-800w-3.jpg',19,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(85,'fuente-de-alimentacion-redragon-800w-4.jpg',19,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(86,'fuente-de-alimentacion-redragon-800w-5.jpg',19,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(87,'mouse-redragon-m607-1.png',20,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(88,'mouse-redragon-m607-2.jpg',20,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(89,'mouse-redragon-m607-3.jpeg',20,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(90,'mouse-redragon-m607-4.webp',20,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(91,'joystick-inalambrico-redragon-1.jpg',21,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(92,'joystick-inalambrico-redragon-2.jpg',21,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(93,'joystick-inalambrico-redragon-3.webp',21,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(94,'joystick-inalambrico-redragon-4.jpg',21,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(95,'notebook-asus-rog-strix-1.jpg',22,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(96,'notebook-asus-rog-strix-2.jpg',22,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(97,'notebook-asus-rog-strix-3.jpg',22,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(98,'notebook-asus-rog-strix-4.jpg',22,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(99,'notebook-asus-rog-strix-5.jpg',22,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(100,'ultrabook-asus-rog-1.jpg',23,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(101,'ultrabook-asus-rog-2.jpg',23,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(102,'ultrabook-asus-rog-3.jpg',23,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(103,'ultrabook-asus-rog-4.jpg',23,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(104,'ultrabook-asus-rog-5.jpg',23,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(105,'auriculares-asus-rog-in-ear-1.jpeg',24,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(106,'auriculares-asus-rog-in-ear-2.jpg',24,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(107,'auriculares-asus-rog-in-ear-3.webp',24,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(108,'auriculares-asus-rog-in-ear-4.webp',24,'2023-04-16 17:14:38','2023-04-16 17:14:38');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `total` int DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `cartId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `cartId` (`cartId`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productcategories`
--

DROP TABLE IF EXISTS `productcategories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productcategories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productId` (`productId`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `productcategories_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`),
  CONSTRAINT `productcategories_ibfk_2` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productcategories`
--

LOCK TABLES `productcategories` WRITE;
/*!40000 ALTER TABLE `productcategories` DISABLE KEYS */;
INSERT INTO `productcategories` VALUES (1,1,2,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(2,1,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(3,2,1,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(4,2,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(5,3,2,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(6,3,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(7,4,5,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(8,4,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(9,5,4,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(10,5,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(11,6,1,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(12,6,6,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(13,6,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(14,7,2,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(15,8,2,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(16,9,1,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(17,10,3,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(18,10,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(19,11,5,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(20,11,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(21,12,4,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(22,12,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(23,13,2,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(24,13,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(25,14,2,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(26,14,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(27,15,2,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(28,15,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(29,16,4,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(30,16,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(31,17,5,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(32,17,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(33,18,3,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(34,19,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(35,20,3,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(36,20,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(37,21,1,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(38,21,3,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(39,21,4,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(40,21,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(41,22,1,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(42,23,1,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(43,24,5,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(44,24,7,'2023-04-16 17:14:38','2023-04-16 17:14:38');
/*!40000 ALTER TABLE `productcategories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `description` text,
  `specifications` text,
  `gamaId` int DEFAULT NULL,
  `brandId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `gamaId` (`gamaId`),
  KEY `brandId` (`brandId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`gamaId`) REFERENCES `gamas` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Placa de video AMD MSI Aero ITX Radeon RX 6400 Series RX 6400 Radeon RX 6400 AERO ITX 4G 4GB',149999,40,'Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.\n\n    AMD es un fabricante estadounidense de placas de video, por su tecnología se ha destacado en crear procesadores de alta gama que permiten un excelente funcionamiento del motor gráfico de tu computadora.\n    \n    Velocidad en cada lectura\n    Como cuenta con 768 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU.\n    \n    Calidad de imagen\n    Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración.','Interfaz PCI-Express 4.0.\n    Bus de memoria: 64bit.\n    Cantidad de núcleos: 768.\n    Frecuencia boost del núcleo de 2321MHz.\n    Resolución máxima: 7680x4320.\n    Compatible con directX y openGL.\n    Requiere de 350W de alimentación.\n    Permite la conexión de hasta 2 pantallas simultáneas.\n    Formatos de conexión: DisplayPort 1.4a, HDMI 2.1.\n    Ideal para trabajar a alta velocidad.',1,1,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(2,'Procesador Amd Gamer Ryzen 7 5700x 8 Core 16 Hilos 4.6ghz',161500,30,'AMD Ryzen 7 5700X Nuevo en caja sellada con garantia oficial AMD','Generación\n    5°\n    Zócalos compatibles\n    AM4\n    Arquitectura\n    x86-64\n    Aplicación\n    Computadoras de escritorio\n    Cantidad de núcleos de CPU\n    8\n    Es gamer\n    Sí\n    Está desbloqueado\n    Sí\n    Potencia de diseño térmico\n    65 W\n    Es OEM\n    No\n    Con hyper-threading\n    No\n    Cantidad de hilos de CPU\n    16',1,1,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(3,'Placa De Video Amd Asrock Phantom Gaming Rx 6800xt 16gb Express 4.0 X16 Gddr6',403000,40,'Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.\n\n    AMD es un fabricante estadounidense de placas de video, por su tecnología se ha destacado en crear procesadores de alta gama que permiten un excelente funcionamiento del motor gráfico de tu computadora.\n    \n    Velocidad en cada lectura\n    Como cuenta con 4608 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU.\n    \n    Calidad de imagen\n    Criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración.','Interfaz PCI-Express 4.0.\n    Bus de memoria: 256bit.\n    Frecuencia boost del núcleo de 2190MHz y base de 1850MHz.\n    Resolución máxima: 7680x4320.\n    Requiere de 700W de alimentación.\n    Permite la conexión de hasta 4 pantallas simultáneas.\n    Formatos de conexión: 3 DisplayPort 1.4, HDMI 2.1.\n    Incluye: Guía rápida.\n    Ideal para trabajar a alta velocidad.',1,1,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(4,'Auriculares Gamer Corsair Hs80 Rgb Usb Black Surround 7.1',60000,10,'MARCA: Corsair\n    MODELO: HS80 RGB USB\n    \n    Auriculares para juegos con cable HS80 RGB USB, carbón\n    Los auriculares para juegos CORSAIR HS80 RGB USB ofrecen un sonido increíblemente rico en matices a través de los transductores de audio de neodimio de 50 mm de ajuste personalizado con sonido envolvente Dolby Audio 7.1.','Audio CUE Software: Yes\n    Surround Sound: Yes\n    Detachable Microphone: No\n    Rechargble Battery: Yes\n    Weight: 0.371\n    Headset Frequency Response: 20Hz - 40 kHz\n    Headset Battery Life: N/A\n    Headphone Sensitivity: 116dB (+/-3dB)\n    Headset Wireless Range: N/A\n    Impedance: 32k Ohms @ 1 kHz\n    Headset Type: Wired\n    Headset Drivers: 50mm\n    Cable Length: 1.8m\n    Color: BLACK\n    Audio: Dolby Audio\n    Lighting: RGB\n    Platform: PC\n    Microphone Impedance: 2.2k Ohms\n    Microphone Type: Omni-directional\n    Microphone Frequency Response: 100Hz to 10kHz\n    Microphone Sensitivity: -40dB (+/-3dB)',2,2,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(5,'Teclado gamer Corsair Champion Series K70 RGB TKL QWERTY Cherry MX RGB Speed inglés US color negro con luz RGB',60000,20,'Corsair es un fabricante mundial de equipos y tecnología de alto rendimiento. Sus productos van dirigidos a jugadores, creadores de contenido y diseñadores. A su vez, con sus teclados podrás conseguir un óptimo desempeño al darle un uso intensivo.\n    Distinción a todo color\n    Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.','Función antighosting incorporada.\n    Tipo de teclado: mecánico.\n    Tecla cilíndrica.\n    Con conector USB-C.\n    Con cable removible.\n    Indispensable para tus actividades.\n    Las imágenes pueden ser ilustrativas.',2,2,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(6,'Gabinete Corsair Carbide Spec Delta Rgb Black Midtower 3xfan',40000,40,'GABINETE CORSAIR CARBIDE SPEC DELTA RGB\n\n    El Carbide Series SPEC-DELTA RGB es un gabinete ATX Mid-Tower con vidrio templado con un estilo angular llamativo, un potente flujo de aire y tres ventiladores RGB de refrigeración incluidos.\n    \n    DISEÑO ANGULAR\n    Los elementos angulares y oscuros del panel frontal del SPEC-DELTA RGB se vuelven transparentes gracias a la retroiluminación, creando una ventana única en su sistema.','Incluye fuente de alimentación: No\n    Altura x Ancho x Largo: 45 cm x 21 cm x 44 cm\n    Es gamer: Sí',2,2,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(7,'Monitor gamer curvo Gigabyte G34WQC A LCD 34\" negro 100V/240V',364000,30,'Una experiencia visual de calidad\n    Este monitor de 34\" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 3440 x 1440 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Una de sus virtudes es que posee pantalla antirreflejo, de esta manera no verás reflejado lo que está detrás de vos y vas a evitar forzar tu vista para enfocar el contenido. Su tiempo de respuesta de un milisegundo lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.','Pantalla LCD de 34\".\n    Curvo.\n    Tiene una resolución de 3440px-1440px.\n    Relación de aspecto de 21:9.\n    Panel VA.\n    Su brillo es de 350cd/m².\n    Tipos de conexión: 2 HDMI 2.0, 2 DisplayPort 1.4, Jack 3.5 mm.\n    Altavoces incluidos.\n    Es reclinable.\n    Comodidad visual en todo momento.',3,3,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(8,'Monitor 27\'\' 165hz 1ms 1080p Led Ips Gigabyte G27f 2 Gaming',140000,40,'Orientado para el gaming en su estado más puro, competitivo e inmersivo, con resoluciones Full HD y tasa de refresco de 165hz, vas a llevar tus juegos a otro nivel de calidad, fluidez, rendimiento profesional e increíble versatilidad con una experiencia inigualable.\n\n    Los monitores para juegos de GIGABYTE ofrecen las mejores especificaciones y calidad, los usuarios pueden disfrutar realmente de un rendimiento de primer nivel sin necesidad de extravagancias.','Marca: Gigabyte\n    Modelo: G27F 2 (G27F 2 AR)\n    -Tipo de Panel: IPS\n    -Tipo de retroiluminación: LED\n    -Tamaño de Pantalla: 27\"\n    -Resolución Máxima: 1920 x 1080 (Full HD)\n    -Curvatura: No\n    -Relación de Aspecto: 16:9\n    -Angulo de Visión: 178° / 178° (H / V)\n    -Colores Desplegables: 16.7 millones de Colores\n    -Contraste: 1000:1\n    -Brillo: 400 cd/m²\n    -Tiempo de Respuesta: 1ms (MPRT)\n    -Frecuencia de Actualización: 165Hz\n    -HDR: Si\n    -Free-Sync: Si\n    -G-Sync: No\n    -Puertos: 2x HDMI / 1x DisplayPort / 1x Jack / 2x USB 3.2\n    -Altavoces: No\n    -Soporte VESA: Si (100x100mm)\n    -Inclinación: -5° ~ +20°\n    -Giro: N/A\n    -Pivot: N/A\n    -Ajuste de altura: 0 ~ 130 mm\n    -Voltaje: AC 100V - 240V\n    -Dimensiones con base: 615.11 x 535.66 x 193.63 mm\n    -Dimensiones sin base: 615.11 x 367.35 x 42.21 mm\n    -Peso: 5.2 Kg\n    SKU 27221441',3,3,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(9,'Notebook Gigabyte Aero16 Oled I7 12700h 16gb 1tb Rtx 3060p',999999,25,'Frecuencia de actualización de la pantalla\n    60 Hz\n    Resolución de la pantalla\n    3840 px x 2400 px\n    Con pantalla táctil\n    No\n    Tamaño de la pantalla\n    16 \"','Tarjeta gráfica\n    rtx 3060\n    Marca del procesador\n    Intel\n    Línea del procesador\n    Core i7\n    Cantidad de núcleos\n    6',3,3,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(10,'Mouse gamer Logitech G Series Lightsync G203 blanco',9999,20,'Logitech diseña productos y experiencias que ocupan un lugar cotidiano en la vida de las personas, poniendo foco en la innovación y la calidad. Su objetivo es crear momentos verdaderamente únicos y significativos para sus usuarios. Los mouses Logitech se adaptan a la forma de tu mano para proporcionarte horas de comodidad. Sin necesidad de mover el brazo para deslizar el cursor, tu mano se fatigará menos. Son ideales para cualquier espacio de trabajo y quienes tienen la mesa llena de diversos objetos.','Plug And Play\n    Solo debés colocar el receptor en un puerto USB de la computadora y ya podés empezar a usarlo. No hace falta emparejar el mouse ni descargar software para utilizarlo.\n    \n    Apto para fácil traslado\n    Navegá rápidamente por documentos y páginas web gracias su diseño ultra delgado, ergonómico, liviano y conveniente para llevar a donde quieras o viajar.',1,4,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(11,'Auriculares gamer inalámbricos Logitech G Series G435 negro y amarillo fluorescente',40000,20,'¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Logitech G435 no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.\n\n    El formato perfecto para vos\n    El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas. Al mismo tiempo, su sonido envolvente del más alto nivel se convierte en el protagonista de la escena.','Alcance inalámbrico de 10 m.\n    La batería dura 18 h.\n    Modo manos libres incluido.\n    Con micrófono incorporado.\n    Sonido superior y sin límites.\n    Cómodos y prácticos.\n    La duración de la batería depende del uso que se le dé al producto.\n    Tamaño del altavoz: 40mm.',1,4,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(12,'Teclado bluetooth Logitech K380 QWERTY español color grafito',18000,30,'Innovadores en diseño y tecnología, Logitech se encarga de brindar la mejor experiencia de uso para sus usuarios. Sus teclados resaltan por ser resistentes y muy de buena calidad, por lo que podrás disfrutarlos por un largo tiempo.','Conectividad con múltiples dispositivos.\n    Ergonómico y apto para diversos usos.\n    Resiste a salpicaduras.\n    Tipo de teclado: tijera.\n    Tecla plana.\n    Medidas: 279mm de ancho, 124mm de alto y 16mm de profundidad.\n    Indispensable para tus actividades.\n    Las imágenes pueden ser ilustrativas.',1,4,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(13,'Placa de video Nvidia Colorful Colorful GeForce GTX 16 Series GTX 1660 SUPER GEFORCE GTX 1660 SUPER NB 6G-V 6GB',160000,25,'Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.\n\n    Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero.','Interfaz PCI-Express 3.0.\n    Bus de memoria: 192bit.\n    Cantidad de núcleos: 1408.\n    Frecuencia boost del núcleo de 1785MHz y base de 1530MHz.\n    Requiere de 450W de alimentación.\n    Con ventiladores duales de 90 mm que mantienen la temperatura equilibrada.\n    Preparada para realidad virtual.\n    Formatos de conexión: DisplayPort, HDMI, DVI.\n    Incluye: Manual.\n    Ideal para trabajar a alta velocidad.',2,5,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(14,'Placa de video Nvidia Asus Phoenix GeForce GTX 16 Series GTX 1650 PH-GTX1650-O4GD6 OC Edition 4GB',130000,45,'Este componente electrónico procesa la información que llega al dispositivo y los transforma en imágenes o videos para mostrarla visualmente. Es ideal para trabajar con aplicaciones gráficas ya que permite obtener imágenes más nítidas.\n\n    Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero.\n    ','Interfaz PCI-Express 3.0.\n    Bus de memoria: 128bit.\n    Cantidad de núcleos: 896.\n    Resolución máxima: 7680x4320.\n    Requiere de 300W de alimentación.\n    Permite la conexión de hasta 3 pantallas simultáneas.\n    Formatos de conexión: HDMI 2.0b, DL-DVI-D, DisplayPort 1.4.\n    Incluye: Guía rápida.\n    Ideal para trabajar a alta velocidad.',1,5,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(15,'Placa De Video Colorful Geforce Rtx 2060 12gb Ddr6 Rtx2060',9999,30,'Colorful RTX2060 NB DUO 12G-V','- Chip Series: GeForce® RTX 2060\n    - GPU Code Name: TU106\n    - Manufacturing Process: 12nm\n    - CUDA Cores: 2176\n    - Core Clock: Base: 1470 Mhz; Boost: 1650 Mhz\n    - Memory Speed Grade: 14 Gbps\n    - Memory Size: 12 Gb\n    - Memory Bus Width: 192 bit\n    - Memory Type: GDDR6\n    - Memory Bandwidth: 336Gb/s\n    - Power Connector: 8 pin\n    - Power Supply: 6+2\n    - TDP: 184 W\n    - Display Ports: DP + HDMI + DVI\n    - Fans Type: FAN\n    - DirectX: 12.1 / 4.5\n    - NV technology Support: Real-Time Ray Tracing, Ansel, GPU Boost\n    - Product Size: 253.5 x 131.5 x 41.5mm',3,5,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(16,'Teclado gamer Razer BlackWidow QWERTY Green inglés US color negro con luz RGB',100000,40,'Hablar de Razer dentro del mundo gamer es palabra mayor. Esta compañía ofrece productos de muy alta calidad a sus usuarios. Su línea de teclados es reconocida por haber recibido distintos galardones y premios internacionales por su alto desempeño.\n\n    Distinción a todo color\n    Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.','Contiene teclado numérico.\n    Función antighosting incorporada.\n    Tipo de teclado: mecánico.\n    Tecla cilíndrica.\n    Con conector USB 2.0.\n    Indispensable para tus actividades.\n    Las imágenes pueden ser ilustrativas.',2,6,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(17,'Auriculares in-ear gamer inalámbricos Razer Hammerhead True Wireless X negro con luz verde LED',35000,25,'¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Razer Hammerhead True Wireless X no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.\n\n    El formato perfecto para vos\n    Al ser in-ear, mejoran la calidad del audio y son de tamaño pequeño para poder insertarse en tu oreja. Son ideales para acompañarte a la hora de hacer ejercicio mientras te sumergís en el mejor sonido envolvente.','Cuenta con tecnología True Wireless.\n    Alcance inalámbrico de 10 m.\n    La batería dura 6 h.\n    Modo manos libres incluido.\n    Con cancelación de ruido.\n    Con estuche de carga.\n    Con micrófono incorporado.\n    Resistentes al agua.\n    Su clasificación IP es IPX4.\n    Uso apto para deporte.\n    Sonido superior y sin límites.\n    Cómodos y prácticos.\n    La duración de la batería depende del uso que se le dé al producto.\n    Tamaño del altavoz: 13mm.',2,6,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(18,'Mousepad Gamer Razer Sphex V3 Small Plastico Delgado 27x21 F',6500,20,'Obtén la ventaja ganadora con la Razer Sphex V3, la última versión de nuestra alfombrilla dura para ratón más fina, ahora un 20 % más fina y disponible en tamaño grande. Actualizada con un aspecto elegante y negro y una superficie más suave que se ancla gracias a su base adhesiva para un control estable','Su superficie dura y más suave ofrece un seguimiento preciso optimizado para los sensores ópticos, mientras que su perfil un 20 % más fino hace que se convierta en una parte más de tu escritorio. Disponible en tamaño grande y pequeño.\n    1. La Razer Sphex V3 tiene 0,4 mm de grosor, un 20 % más fina que su predecesora, la Razer Sphex V2.\n    2. Actualizada con un aspecto elegante y negro, además de una superficie más suave, la Sphex V3 es un 50 % más grande que la Sphex V2 estándar.',3,6,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(19,'Fuente De Alimentación Para Pc Redragon Gc Series Gc-ps011 800w Black 100v/240v 80 Plus Bronze Modular',37000,25,'Diseñada para ganar espacio.\n    Sus cables desmontables y flexibles permiten optimizar espacio utilizando sólo los necesarios. Si eres de los que prefieren prolijidad por fuera y también por dentro, esta fuente te encantará.\n    \n    Calidad 80 Plus Bronze.\n    Puedes estar seguro de que la eficiencia de la energía consumida siempre será superior al 80%. ¡Lo certificamos!','Tipo de fuente de alimentación para PC: ATX\n    Tipo de refrigeración: Por aire\n    Con protección de bajo voltaje: Sí\n    Con iluminación RGB: No\n    Cantidad de conectores HDD: 3\n    Cantidad de conectores SATA: 6\n    Cantidad de conectores PCI-E: 4\n    Certificación de eficiencia: 80 Plus Bronze\n    Diámetro del ventilador: 120 mm\n    Altura de la fuente de alimentación para PC x Ancho de la fuente de alimentación para PC: 160 mm x 150 mm\n    Largo de la fuente de alimentación para PC: 86 mm\n    Frecuencia: 47/63hz',3,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(20,'Mouse gamer Redragon Griffin M607 negro',6500,30,'Con más de 20 años de experiencia en fabricación de productos, Redragon innova día a día en diseño y calidad. Su objetivo es producir equipamiento de alta gama para jugadores, con excelentes prestaciones y a un precio accesible. Los mouses Redragon son adecuados para todas las ocasiones, ya sea para entretenerse en el hogar o usarlo en el trabajo. Experimentá el diseño cómodo y elegante de este dispositivo.','Tipo de sensor\n    Óptico\n    Tecnología del sensor\n    PixArt P3212\n    Resolución del sensor\n    7200 dp',3,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(21,'Joystick inalámbrico Redragon Harrow G808 negro',13000,45,'Control preciso\n    Este mando combina funciones revolucionarias mientras conserva precisión, comodidad y exactitud en cada movimiento. Gracias a su ergonomía especialmente pensada para la posición de tu mano, podés pasar horas jugando con total confort.','Mando inalámbrico.\n    Compatible con: Computadoras y PlayStation 3.\n    Incluye un control.\n    Con sistema de vibración incorporado.\n    Cuenta con 1 dongle usb 2.0, 1 cable micro-usb, sticker redragon y 1 manual.\n    Diversión garantizada con tu joystick Redragon.\n    Diseño ergonómico.',3,7,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(22,'Notebook gamer Asus ROG Strix G15(2022) gray 15.6\", AMD Ryzen 7 6800H 16GB de RAM 512GB SSD, NVIDIA GeForce RTX 3050 144 Hz 1920x1080px Windows 11 Home',630000,20,'Disfrutá de la perfecta combinación de rendimiento y diseño con esta notebook Asus ROG Strix G15(2022). Encontrarás en ella una excelente herramienta para tus trabajos de todos los días y para tus momentos de entretenimiento. Aprovechá la experiencia extraordinaria que la marca tiene para ofrecerte y optimizá la calidad de tus imágenes y videos.\n\n    Pantalla con gran impacto visual\n    Su pantalla de 15.6\" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.\n    ','Procesador AMD Ryzen 7.\n    Memoria RAM de 16GB.\n    Resolución de 1920x1080 px.\n    Es antirreflejo.\n    Placa de video NVIDIA GeForce RTX 3050.\n    Conexión wifi y bluetooth.\n    Cuenta con 4 puertos USB y puerto HDMI.\n    Modo de sonido Dolby Atmos, Stereo.\n    Con teclado retroiluminado.\n    La duración de la batería depende del uso que se le dé al producto.',1,8,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(23,'Ultrabook gamer Asus ROG Zephyrus G14 GA402RK moonlight white 14\", AMD Ryzen 9 6900HS 16GB de RAM 1 TB SSD, AMD Radeon RX 6800S 120 Hz 2560x1600px Windows 11 Home',1200000,25,'Disfrutá de la perfecta combinación de rendimiento y diseño con esta notebook Asus ROG Zephyrus G14 GA402RK. Encontrarás en ella una excelente herramienta para tus trabajos de todos los días y para tus momentos de entretenimiento. Aprovechá la experiencia extraordinaria que la marca tiene para ofrecerte y optimizá la calidad de tus imágenes y videos.\n\n    Pantalla con gran impacto visual\n    Su pantalla de 14\" y 2560x1600 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.','Procesador AMD Ryzen 9.\n    Memoria RAM de 16GB.\n    Resolución de 2560x1600 px.\n    Es antirreflejo.\n    Placa de video AMD Radeon RX 6800S.\n    Conexión wifi y bluetooth.\n    Cuenta con 4 puertos USB y puerto HDMI.\n    Incluye lector de tarjeta de memoria.\n    Modo de sonido Smart Amp, Dolby Atmos, Quad, AI noise-canceling.\n    Con teclado retroiluminado.\n    La duración de la batería depende del uso que se le dé al producto.',1,8,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(24,'Auricular Gamer Asus Rog Cetra In-ear Noice Cancelling Usb-c',55000,30,'Auriculares de Alta Gama ROG Cetra RGB con Noice Cancellig Activa\n\n    Auriculares internos para juegos ROG Cetra RGB con cancelación activa de ruido (ANC), controladores ASUS Essence de 10 mm y conector USB-C para PC, dispositivos móviles y Nintendo Switch, e iluminación Aura Sync','La tecnología de cancelación activa de ruido elimina el ruido ambiental para brindar experiencias de juego inmersivas en cualquier lugar.\n    Los controladores ASUS Essence de gran tamaño de 10 mm ofrecen unos graves increíblemente potentes y un audio de juego optimizado.\n    El modo ambiental permite que entren los sonidos del mundo exterior para los momentos en los que necesitas escuchar lo que sucede a tu alrededor.\n    Un diseño ergonómico, tres tamaños de geles y aletas para los oídos y un par de almohadillas de espuma garantizan un ajuste seguro y cómodo.\n    El conector USB-C proporciona compatibilidad multiplataforma para teléfonos móviles, PC, Mac y Nintendo Switch.\n    La iluminación RGB circular multicolor y personalizable le permite brillar con estilo',2,8,'2023-04-16 17:14:38','2023-04-16 17:14:38');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rols` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'admin','2023-04-16 17:14:38','2023-04-16 17:14:38'),(2,'user','2023-04-16 17:14:38','2023-04-16 17:14:38');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20230401140930-create-brand.js'),('20230401141303-create-gama.js'),('20230401141321-create-category.js'),('20230401141510-create-address.js'),('20230401141528-create-rol.js'),('20230401141730-create-product.js'),('20230401141801-create-image.js'),('20230401141927-create-cart.js'),('20230401142048-create-user.js'),('20230401142208-create-order.js'),('20230401143043-create-product-categories.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `addressId` int DEFAULT NULL,
  `rolId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `addressId` (`addressId`),
  KEY `rolId` (`rolId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`addressId`) REFERENCES `addresses` (`id`),
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`rolId`) REFERENCES `rols` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@test.com','Admin','Test','$2a$10$uiGAAdcs0D/Ml7loeIC2LuCAA8v6JhiOp9RCDEuEbpF7c97unNKSS',NULL,1,1,'2023-04-16 17:14:38','2023-04-16 17:14:38'),(2,'user@test.com','User','Test','$2a$10$iJ2aJzrhF0R3HBQsptQ2leNzfrO6o4kX3eGDG/DOSkfXDgA3OQ5yC',NULL,2,2,'2023-04-16 17:14:38','2023-04-16 17:14:38');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-16 14:26:30
