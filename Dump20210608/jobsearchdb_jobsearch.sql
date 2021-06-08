-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: jobsearchdb
-- ------------------------------------------------------
-- Server version	8.0.25

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
-- Table structure for table `jobsearch`
--

DROP TABLE IF EXISTS `jobsearch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobsearch` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `JobType` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Salary` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Title` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Date` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobsearch`
--

LOCK TABLES `jobsearch` WRITE;
/*!40000 ALTER TABLE `jobsearch` DISABLE KEYS */;
INSERT INTO `jobsearch` VALUES (1,'Backend','55000','Web Developer','Builds and maintains the technology needed to power the components which enable the user-facing side of the website to exist.','06-06-2021'),(2,'Frontend','45000','Web Developer','Responsible for implementing visual and interactive elements that users engage with','07-06-2021'),(3,'Fullstack','65000','Web Developer','Works with both the front and back ends of a website or application.','08-06-2021'),(4,'Backend','55000','Software Engineer','Builds and maintains the technology needed to power the components which enable the user-facing side of the website to exist.','06-06-2021'),(6,'Fullstack','65000','Software Engineer','Works with both the front and back ends of a website or application.','02-06-2021'),(7,'Backend','55000','IT Assistant','Builds and maintains the technology needed to power the components which enable the user-facing side of the website to exist.','06-06-2021'),(8,'Frontend','45000','IT Assistant','Responsible for implementing visual and interactive elements that users engage with','06-06-2021'),(9,'Fullstack','65000','IT Assistant','Works with both the front and back ends of a website or application.','06-06-2021'),(10,'Backend','55000','Tech Lead','Builds and maintains the technology needed to power the components which enable the user-facing side of the website to exist.','06-06-2021'),(11,'Fullstack','65000','Tech Lead','Works with both the front and back ends of a website or application.','06-07-2021');
/*!40000 ALTER TABLE `jobsearch` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-08 20:19:40
