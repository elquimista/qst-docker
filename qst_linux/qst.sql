-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: qst
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `access_to_qst`
--

DROP TABLE IF EXISTS `access_to_qst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `access_to_qst` (
  `qst_no` int(10) unsigned NOT NULL,
  `u_id` int(10) unsigned NOT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  KEY `qst_no` (`qst_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `access_to_qst`
--

LOCK TABLES `access_to_qst` WRITE;
/*!40000 ALTER TABLE `access_to_qst` DISABLE KEYS */;
/*!40000 ALTER TABLE `access_to_qst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assignment_marks`
--

DROP TABLE IF EXISTS `assignment_marks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `assignment_marks` (
  `u_id` int(10) unsigned NOT NULL,
  `assign_id` int(10) unsigned NOT NULL,
  `mark` smallint(3) unsigned DEFAULT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  KEY `assign_id` (`assign_id`,`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_marks`
--

LOCK TABLES `assignment_marks` WRITE;
/*!40000 ALTER TABLE `assignment_marks` DISABLE KEYS */;
/*!40000 ALTER TABLE `assignment_marks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assignments`
--

DROP TABLE IF EXISTS `assignments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `assignments` (
  `assign_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `u_id` int(10) unsigned NOT NULL,
  `name` varchar(80) NOT NULL,
  `class_id` int(10) unsigned NOT NULL,
  `weight` smallint(3) unsigned DEFAULT NULL,
  `marks` smallint(3) unsigned DEFAULT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  PRIMARY KEY (`assign_id`),
  KEY `class_id` (`class_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignments`
--

LOCK TABLES `assignments` WRITE;
/*!40000 ALTER TABLE `assignments` DISABLE KEYS */;
/*!40000 ALTER TABLE `assignments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `attempted_logins`
--

DROP TABLE IF EXISTS `attempted_logins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attempted_logins` (
  `email` varchar(50) NOT NULL,
  `attempt` tinyint(1) unsigned NOT NULL,
  `end_time` int(20) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attempted_logins`
--

LOCK TABLES `attempted_logins` WRITE;
/*!40000 ALTER TABLE `attempted_logins` DISABLE KEYS */;
/*!40000 ALTER TABLE `attempted_logins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `number` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(50) NOT NULL,
  `parent` int(10) unsigned NOT NULL,
  `u_id` int(10) unsigned NOT NULL,
  `type` tinyint(2) unsigned NOT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  PRIMARY KEY (`number`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'inserted at install',0,1,0,0);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_to_qst`
--

DROP TABLE IF EXISTS `categories_to_qst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories_to_qst` (
  `number` int(10) unsigned NOT NULL,
  `qst` int(10) unsigned NOT NULL,
  `u_id` int(10) unsigned NOT NULL,
  `type` tinyint(2) unsigned NOT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  KEY `number` (`number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_to_qst`
--

LOCK TABLES `categories_to_qst` WRITE;
/*!40000 ALTER TABLE `categories_to_qst` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories_to_qst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories_to_questions`
--

DROP TABLE IF EXISTS `categories_to_questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories_to_questions` (
  `number` int(10) unsigned NOT NULL,
  `question` int(10) unsigned NOT NULL,
  `u_id` int(10) unsigned NOT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  KEY `number` (`number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories_to_questions`
--

LOCK TABLES `categories_to_questions` WRITE;
/*!40000 ALTER TABLE `categories_to_questions` DISABLE KEYS */;
/*!40000 ALTER TABLE `categories_to_questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `class_users`
--

DROP TABLE IF EXISTS `class_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `class_users` (
  `class_id` int(10) unsigned NOT NULL,
  `u_id` int(10) unsigned NOT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  KEY `class_id` (`class_id`,`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class_users`
--

LOCK TABLES `class_users` WRITE;
/*!40000 ALTER TABLE `class_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `class_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `classes` (
  `class_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `class_name` varchar(80) NOT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  `institution_id` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`class_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `file_folders`
--

DROP TABLE IF EXISTS `file_folders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `file_folders` (
  `number` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `parent` int(10) unsigned NOT NULL,
  `u_id` int(10) unsigned NOT NULL,
  `type` tinyint(2) unsigned NOT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  PRIMARY KEY (`number`),
  KEY `u_id` (`u_id`,`parent`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file_folders`
--

LOCK TABLES `file_folders` WRITE;
/*!40000 ALTER TABLE `file_folders` DISABLE KEYS */;
INSERT INTO `file_folders` VALUES (1,'MyFiles',0,0,0,0);
/*!40000 ALTER TABLE `file_folders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logged_in`
--

DROP TABLE IF EXISTS `logged_in`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `logged_in` (
  `u_id` int(10) unsigned NOT NULL,
  `u_type` tinyint(2) unsigned NOT NULL,
  `session_id` bigint(20) DEFAULT NULL,
  `log_time` int(30) unsigned NOT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logged_in`
--

LOCK TABLES `logged_in` WRITE;
/*!40000 ALTER TABLE `logged_in` DISABLE KEYS */;
INSERT INTO `logged_in` VALUES (1,1,51953548700,1528045724),(6,2,3049367514,1524683784),(10,3,3046456836,1523228432),(22,2,3049244288,1524622994);
/*!40000 ALTER TABLE `logged_in` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organization`
--

DROP TABLE IF EXISTS `organization`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `organization` (
  `org_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `org_name` varchar(80) NOT NULL,
  `time_zone` varchar(3) NOT NULL,
  PRIMARY KEY (`org_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organization`
--

LOCK TABLES `organization` WRITE;
/*!40000 ALTER TABLE `organization` DISABLE KEYS */;
INSERT INTO `organization` VALUES (1,'System Administration','');
/*!40000 ALTER TABLE `organization` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posted_qst`
--

DROP TABLE IF EXISTS `posted_qst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posted_qst` (
  `qst` int(10) unsigned NOT NULL,
  `attempts` smallint(3) unsigned NOT NULL,
  `start` date DEFAULT NULL,
  `end` date DEFAULT NULL,
  `class_id` int(10) unsigned NOT NULL,
  `result` tinyint(1) unsigned DEFAULT NULL,
  `submissions` tinyint(1) unsigned DEFAULT NULL,
  `rhm` tinyint(1) DEFAULT NULL,
  `forall` tinyint(1) DEFAULT NULL,
  `u_id` int(10) unsigned NOT NULL,
  `posted` tinyint(1) unsigned DEFAULT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  `avail` tinyint(1) unsigned NOT NULL,
  `start_month` tinyint(2) DEFAULT NULL,
  `start_day` tinyint(2) DEFAULT NULL,
  `start_hour` smallint(4) DEFAULT NULL,
  `finish_month` tinyint(2) DEFAULT NULL,
  `finish_day` tinyint(2) DEFAULT NULL,
  `finish_hour` smallint(4) DEFAULT NULL,
  `qtime` smallint(3) NOT NULL,
  `delivery` varchar(1) DEFAULT NULL,
  `branching` int(1) DEFAULT NULL,
  `shuffle` int(1) DEFAULT NULL,
  `display` int(1) DEFAULT NULL,
  `shuffle_ans` int(1) DEFAULT NULL,
  `explanations` int(1) DEFAULT NULL,
  `source` int(1) DEFAULT NULL,
  `memori` int(1) DEFAULT NULL,
  PRIMARY KEY (`qst`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posted_qst`
--

LOCK TABLES `posted_qst` WRITE;
/*!40000 ALTER TABLE `posted_qst` DISABLE KEYS */;
/*!40000 ALTER TABLE `posted_qst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qst`
--

DROP TABLE IF EXISTS `qst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qst` (
  `number` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `questions` mediumint(5) unsigned DEFAULT NULL,
  `marks` mediumint(5) unsigned DEFAULT NULL,
  `random_q` tinyint(1) unsigned DEFAULT NULL,
  `random_order` tinyint(1) unsigned DEFAULT NULL,
  `u_id` int(10) unsigned NOT NULL,
  `type` tinyint(1) unsigned NOT NULL,
  `weight` smallint(3) NOT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  `branching` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`number`),
  KEY `u_id` (`u_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qst`
--

LOCK TABLES `qst` WRITE;
/*!40000 ALTER TABLE `qst` DISABLE KEYS */;
/*!40000 ALTER TABLE `qst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qst_attempts`
--

DROP TABLE IF EXISTS `qst_attempts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qst_attempts` (
  `qst_no` int(10) unsigned NOT NULL,
  `u_id` int(10) unsigned NOT NULL,
  `attempts` int(10) unsigned DEFAULT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  `start_time` smallint(4) DEFAULT NULL,
  `start_day` tinyint(2) DEFAULT NULL,
  `start_month` tinyint(2) DEFAULT NULL,
  `finish_time` smallint(4) DEFAULT NULL,
  `finish_day` tinyint(2) DEFAULT NULL,
  `finish_month` tinyint(2) DEFAULT NULL,
  `end` int(20) unsigned DEFAULT NULL,
  `resume` tinyint(1) DEFAULT NULL,
  KEY `qst_no` (`qst_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qst_attempts`
--

LOCK TABLES `qst_attempts` WRITE;
/*!40000 ALTER TABLE `qst_attempts` DISABLE KEYS */;
/*!40000 ALTER TABLE `qst_attempts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qst_files`
--

DROP TABLE IF EXISTS `qst_files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qst_files` (
  `number` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `u_id` int(10) unsigned NOT NULL,
  `file_name` varchar(50) NOT NULL,
  `parent` int(10) unsigned DEFAULT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  `type` varchar(30) DEFAULT NULL,
  `size` int(10) unsigned DEFAULT NULL,
  `filedescrip` varchar(501) DEFAULT NULL,
  PRIMARY KEY (`number`),
  KEY `u_id` (`u_id`,`parent`)
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qst_files`
--

LOCK TABLES `qst_files` WRITE;
/*!40000 ALTER TABLE `qst_files` DISABLE KEYS */;
INSERT INTO `qst_files` VALUES (79,60,'gps.jpg',1,30,'image/jpg',28998,'');
/*!40000 ALTER TABLE `qst_files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qst_questions`
--

DROP TABLE IF EXISTS `qst_questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qst_questions` (
  `qst_no` int(10) unsigned NOT NULL,
  `quest_no` int(10) unsigned NOT NULL,
  `q_order` mediumint(5) unsigned NOT NULL,
  `value` mediumint(5) unsigned NOT NULL,
  `q_select` int(10) unsigned DEFAULT NULL,
  `u_id` int(10) unsigned NOT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  `branching` varchar(300) DEFAULT NULL,
  `referer` varchar(10) DEFAULT NULL,
  KEY `u_id` (`u_id`,`qst_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qst_questions`
--

LOCK TABLES `qst_questions` WRITE;
/*!40000 ALTER TABLE `qst_questions` DISABLE KEYS */;
/*!40000 ALTER TABLE `qst_questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qst_scores`
--

DROP TABLE IF EXISTS `qst_scores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qst_scores` (
  `u_id` int(10) unsigned NOT NULL,
  `qst` int(10) unsigned NOT NULL,
  `mark` int(10) unsigned NOT NULL,
  `marked` tinyint(1) unsigned NOT NULL,
  `bonus` smallint(3) unsigned DEFAULT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  KEY `u_id` (`u_id`,`qst`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qst_scores`
--

LOCK TABLES `qst_scores` WRITE;
/*!40000 ALTER TABLE `qst_scores` DISABLE KEYS */;
/*!40000 ALTER TABLE `qst_scores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qst_to_classes`
--

DROP TABLE IF EXISTS `qst_to_classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qst_to_classes` (
  `qst` int(10) unsigned NOT NULL,
  `class_id` int(10) unsigned NOT NULL,
  `type` tinyint(2) unsigned NOT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  PRIMARY KEY (`qst`),
  KEY `class_id` (`class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qst_to_classes`
--

LOCK TABLES `qst_to_classes` WRITE;
/*!40000 ALTER TABLE `qst_to_classes` DISABLE KEYS */;
/*!40000 ALTER TABLE `qst_to_classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `qsts`
--

DROP TABLE IF EXISTS `qsts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `qsts` (
  `u_id` int(10) unsigned NOT NULL,
  `qst` int(10) unsigned NOT NULL,
  `answer` blob,
  `quest_no` int(10) unsigned NOT NULL,
  `mark` int(10) unsigned DEFAULT NULL,
  `attempt` tinyint(1) unsigned NOT NULL,
  `marked` tinyint(2) DEFAULT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  `time_stamp` varchar(11) DEFAULT NULL,
  `quest_order` int(5) unsigned DEFAULT NULL,
  `referer` int(10) unsigned DEFAULT NULL,
  `viewed` int(1) DEFAULT NULL,
  KEY `u_id` (`u_id`,`qst`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `qsts`
--

LOCK TABLES `qsts` WRITE;
/*!40000 ALTER TABLE `qsts` DISABLE KEYS */;
/*!40000 ALTER TABLE `qsts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_answers`
--

DROP TABLE IF EXISTS `question_answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question_answers` (
  `number` int(10) unsigned NOT NULL,
  `q_order` smallint(3) unsigned DEFAULT NULL,
  `answer` blob,
  `c_answer` tinyint(2) unsigned DEFAULT NULL,
  `u_id` int(10) unsigned NOT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  `image_id` int(10) DEFAULT NULL,
  KEY `number` (`number`,`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_answers`
--

LOCK TABLES `question_answers` WRITE;
/*!40000 ALTER TABLE `question_answers` DISABLE KEYS */;
/*!40000 ALTER TABLE `question_answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_categories`
--

DROP TABLE IF EXISTS `question_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question_categories` (
  `number` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(50) NOT NULL,
  `parent` int(10) unsigned NOT NULL,
  `u_id` int(10) unsigned NOT NULL,
  `type` tinyint(2) unsigned NOT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  `sub_type` tinyint(2) unsigned DEFAULT NULL,
  PRIMARY KEY (`number`),
  KEY `parent` (`parent`,`u_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_categories`
--

LOCK TABLES `question_categories` WRITE;
/*!40000 ALTER TABLE `question_categories` DISABLE KEYS */;
INSERT INTO `question_categories` VALUES (1,'inserted at install',0,1,0,0,0),(14,'Default',1,14,0,14,1),(15,'Survey Questions',1,14,0,14,2);
/*!40000 ALTER TABLE `question_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `number` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `u_id` int(10) unsigned NOT NULL,
  `question` blob,
  `type` varchar(5) NOT NULL,
  `value` smallint(3) unsigned DEFAULT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  `sub_type` int(1) unsigned DEFAULT NULL,
  `image_id` int(10) unsigned DEFAULT NULL,
  `vlink` varchar(150) DEFAULT NULL,
  `alink` varchar(150) DEFAULT NULL,
  `kolum` int(1) unsigned DEFAULT NULL,
  `mode` int(1) unsigned DEFAULT NULL,
  `descrip` varchar(70) DEFAULT NULL,
  `ans_mode` varchar(1) DEFAULT NULL,
  `pdf` int(10) unsigned DEFAULT NULL,
  `explanation` varchar(5000) DEFAULT NULL,
  `memory` varchar(5000) DEFAULT NULL,
  PRIMARY KEY (`number`),
  KEY `u_id` (`u_id`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `u_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `u_type` tinyint(2) unsigned NOT NULL,
  `f_name` varchar(40) NOT NULL,
  `m_name` varchar(20) DEFAULT NULL,
  `l_name` varchar(40) NOT NULL,
  `u_name` varchar(50) DEFAULT NULL,
  `pass` varchar(256) DEFAULT NULL,
  `org_id` smallint(3) unsigned NOT NULL,
  `letter` varchar(1) NOT NULL,
  `institute_id` int(10) unsigned DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `photo` varchar(15) NOT NULL,
  PRIMARY KEY (`u_id`),
  KEY `letter` (`letter`),
  KEY `u_name` (`u_name`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1,'Head',NULL,'Administrator','admin','{X-PBKDF2}HMACSHA2+256:AAAD6A:o5iFYQ==:go0PHh41pJxiyPOB7wWxz3++HXhP3AFfLj1Lzeaj5Wo=',0,'A',0,'','');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_classes`
--

DROP TABLE IF EXISTS `users_classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_classes` (
  `u_id` int(10) unsigned NOT NULL,
  `class_id` int(10) unsigned DEFAULT NULL,
  `org_id` int(10) unsigned NOT NULL,
  KEY `u_id` (`u_id`,`class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_classes`
--

LOCK TABLES `users_classes` WRITE;
/*!40000 ALTER TABLE `users_classes` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_classes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-03 11:12:44
