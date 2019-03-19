-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: DON
-- ------------------------------------------------------
-- Server version	5.7.21-1

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
-- Table structure for table `app_cart`
--

DROP TABLE IF EXISTS `app_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_cart` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `isselect` tinyint(1) NOT NULL,
  `shoplist_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `app_cart_shoplist_id_228fc2f6_fk_app_shoplist_id` (`shoplist_id`),
  KEY `app_cart_user_id_2bf07879_fk_app_user_id` (`user_id`),
  CONSTRAINT `app_cart_shoplist_id_228fc2f6_fk_app_shoplist_id` FOREIGN KEY (`shoplist_id`) REFERENCES `app_shoplist` (`id`),
  CONSTRAINT `app_cart_user_id_2bf07879_fk_app_user_id` FOREIGN KEY (`user_id`) REFERENCES `app_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_cart`
--

LOCK TABLES `app_cart` WRITE;
/*!40000 ALTER TABLE `app_cart` DISABLE KEYS */;
INSERT INTO `app_cart` VALUES (1,6,0,1,7),(2,4,0,2,7),(3,3,0,3,7),(4,0,1,8,7),(7,1,0,1,32);
/*!40000 ALTER TABLE `app_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_lunbotu`
--

DROP TABLE IF EXISTS `app_lunbotu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_lunbotu` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data` varchar(256) NOT NULL,
  `name` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_lunbotu`
--

LOCK TABLES `app_lunbotu` WRITE;
/*!40000 ALTER TABLE `app_lunbotu` DISABLE KEYS */;
INSERT INTO `app_lunbotu` VALUES (1,'/static/img/small.jpg',1),(2,'/static/img/zhongqiu.jpg',2),(3,'/static/img/index.jpg',3);
/*!40000 ALTER TABLE `app_lunbotu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_order`
--

DROP TABLE IF EXISTS `app_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createtime` datetime(6) NOT NULL,
  `status` int(11) NOT NULL,
  `idenrifier` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `app_order_user_id_f25a9fc4_fk_app_user_id` (`user_id`),
  CONSTRAINT `app_order_user_id_f25a9fc4_fk_app_user_id` FOREIGN KEY (`user_id`) REFERENCES `app_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_order`
--

LOCK TABLES `app_order` WRITE;
/*!40000 ALTER TABLE `app_order` DISABLE KEYS */;
INSERT INTO `app_order` VALUES (17,'2019-01-19 09:16:13.921834',0,'419715478893735936',7),(18,'2019-01-19 09:38:29.187752',0,'646815478907096365',7),(19,'2019-03-15 13:57:31.613974',0,'858315526582518136',32),(20,'2019-03-16 01:29:43.502241',0,'504715526997831563',32),(21,'2019-03-16 01:29:58.166472',0,'298015526997983770',32),(22,'2019-03-16 02:27:19.923262',0,'494415527032394030',32),(23,'2019-03-16 02:27:24.918011',0,'376915527032448622',32),(24,'2019-03-16 03:23:37.270433',0,'108715527066175386',32);
/*!40000 ALTER TABLE `app_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_ordershop`
--

DROP TABLE IF EXISTS `app_ordershop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_ordershop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `shoplist_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `app_ordershop_order_id_b3277dc8_fk_app_order_id` (`order_id`),
  KEY `app_ordershop_shoplist_id_6fb60937_fk_app_shoplist_id` (`shoplist_id`),
  CONSTRAINT `app_ordershop_order_id_b3277dc8_fk_app_order_id` FOREIGN KEY (`order_id`) REFERENCES `app_order` (`id`),
  CONSTRAINT `app_ordershop_shoplist_id_6fb60937_fk_app_shoplist_id` FOREIGN KEY (`shoplist_id`) REFERENCES `app_shoplist` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_ordershop`
--

LOCK TABLES `app_ordershop` WRITE;
/*!40000 ALTER TABLE `app_ordershop` DISABLE KEYS */;
INSERT INTO `app_ordershop` VALUES (1,1,17,8),(2,1,18,1),(3,0,21,1),(4,0,21,3);
/*!40000 ALTER TABLE `app_ordershop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_shoplist`
--

DROP TABLE IF EXISTS `app_shoplist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_shoplist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `src` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content1` varchar(255) NOT NULL,
  `content2` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_shoplist`
--

LOCK TABLES `app_shoplist` WRITE;
/*!40000 ALTER TABLE `app_shoplist` DISABLE KEYS */;
INSERT INTO `app_shoplist` VALUES (1,'/static/img/small1.jpg','爱情手镯-DBW134533D','19841.00','10443.00'),(2,'/static/img/small2.jpg','爱之光-DRW124517D','5746.00','3024.00'),(3,'/static/img/small3.jpg','圆梦-DRW124516D','6133.00','3228.00'),(4,'/static/img/small4.jpg','公主梦-DRW124515D','7653.00','4028.00'),(5,'/static/img/small5.jpg','相伴一生-DRW124514D','7650.00','4026.00'),(6,'/static/img/small6.jpg','执爱-DRW124513D','8398.00','4420.00'),(7,'/static/img/small7.jpg','汇爱-DRW124512D','8631.00','4542.00'),(8,'/static/img/small8.jpg','My love-DRW124511D','4226.00','2224.00'),(9,'/static/img/small9.jpg','钟爱-DRW124510D','6977.00','3672.00'),(10,'/static/img/small10.jpg','绽放-DRW124509D','4970.00','2616.00'),(11,'/static/img/small11.jpg','纯爱-DRW124507D','3216.00','1693.00'),(12,'/static/img/small12.jpg','My heart-DRW124506D','7266.00','3824.00'),(13,'/static/img/small13.jpg','遇见❤缘-DRW124505D','2997.00','1578.00'),(14,'/static/img/small14.jpg','大气男戒-DMW124451D','4030.00','2121.00'),(15,'/static/img/small15.jpg','经典六爪耳钉-DEW124448D','1000.00','526.00'),(16,'/static/img/small16.jpg','睿智男戒-DMW124447D','3573.00','1881.00'),(17,'/static/img/small17.jpg','儒雅男戒-DMW124445D','6767.00','3562.00'),(18,'/static/img/small18.jpg','花开一世女戒-DRW124444D','5746.00','3024.00'),(19,'/static/img/small19.jpg','怦然心动吊坠-DPW124441D','1310.00','690.00'),(20,'/static/img/small20.jpg','一心一意耳钉-DEW124439D','1155.00','608.00'),(21,'/static/img/small21.jpg','一心一意女戒-DRW124438D','1543.00','812.00');
/*!40000 ALTER TABLE `app_shoplist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `app_user`
--

DROP TABLE IF EXISTS `app_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `app_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uphone` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `uname` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `app_user_uphone_6ff746f5_uniq` (`uphone`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `app_user`
--

LOCK TABLES `app_user` WRITE;
/*!40000 ALTER TABLE `app_user` DISABLE KEYS */;
INSERT INTO `app_user` VALUES (7,'110','774bae1e60138739602bbe56dbce11f0','0fd7f80f120088d5736a5525452d3a16','haah'),(17,'13657800951','774bae1e60138739602bbe56dbce11f0','d72570af48a9f3b6299622f3efe8487a','user'),(30,'18078252381','774bae1e60138739602bbe56dbce11f0','d2da16d757ca345bc91bf8a98eeb44ec','user1'),(31,'17376216391','774bae1e60138739602bbe56dbce11f0','15a83421b1f16af1d4ac382fd66792d4','axf1'),(32,'13123456789','dc483e80a7a0bd9ef71d8cf973673924','062ae33242578806812927ed1d1fc169','122');
/*!40000 ALTER TABLE `app_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add permission',2,'add_permission'),(5,'Can change permission',2,'change_permission'),(6,'Can delete permission',2,'delete_permission'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add user',4,'add_user'),(11,'Can change user',4,'change_user'),(12,'Can delete user',4,'delete_user'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add lunbotu',7,'add_lunbotu'),(20,'Can change lunbotu',7,'change_lunbotu'),(21,'Can delete lunbotu',7,'delete_lunbotu'),(22,'Can add user',8,'add_user'),(23,'Can change user',8,'change_user'),(24,'Can delete user',8,'delete_user'),(25,'Can add shoplist',9,'add_shoplist'),(26,'Can change shoplist',9,'change_shoplist'),(27,'Can delete shoplist',9,'delete_shoplist'),(28,'Can add cart',10,'add_cart'),(29,'Can change cart',10,'change_cart'),(30,'Can delete cart',10,'delete_cart'),(31,'Can add order shop',11,'add_ordershop'),(32,'Can change order shop',11,'change_ordershop'),(33,'Can delete order shop',11,'delete_ordershop'),(34,'Can add order',12,'add_order'),(35,'Can change order',12,'change_order'),(36,'Can delete order',12,'delete_order');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(10,'app','cart'),(7,'app','lunbotu'),(12,'app','order'),(11,'app','ordershop'),(9,'app','shoplist'),(8,'app','user'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2019-01-09 08:26:37.702607'),(2,'auth','0001_initial','2019-01-09 08:26:39.826060'),(3,'admin','0001_initial','2019-01-09 08:26:40.257899'),(4,'admin','0002_logentry_remove_auto_add','2019-01-09 08:26:40.298514'),(5,'app','0001_initial','2019-01-09 08:26:40.409655'),(6,'contenttypes','0002_remove_content_type_name','2019-01-09 08:26:40.546005'),(7,'auth','0002_alter_permission_name_max_length','2019-01-09 08:26:40.651654'),(8,'auth','0003_alter_user_email_max_length','2019-01-09 08:26:40.977791'),(9,'auth','0004_alter_user_username_opts','2019-01-09 08:26:40.989661'),(10,'auth','0005_alter_user_last_login_null','2019-01-09 08:26:41.066787'),(11,'auth','0006_require_contenttypes_0002','2019-01-09 08:26:41.070342'),(12,'auth','0007_alter_validators_add_error_messages','2019-01-09 08:26:41.085073'),(13,'auth','0008_alter_user_username_max_length','2019-01-09 08:26:41.191358'),(14,'sessions','0001_initial','2019-01-09 08:26:41.241754'),(15,'app','0002_user','2019-01-09 12:40:19.834102'),(16,'app','0003_auto_20190109_1310','2019-01-09 13:11:00.602466'),(17,'app','0004_auto_20190110_1113','2019-01-10 11:13:53.574090'),(18,'app','0005_user_uname','2019-01-10 12:21:20.035158'),(19,'app','0006_shoplist','2019-01-11 09:37:12.074914'),(20,'app','0007_remove_shoplist_name1','2019-01-11 09:45:46.484273'),(21,'app','0008_auto_20190111_0952','2019-01-11 09:52:24.507030'),(22,'app','0009_cart','2019-01-14 12:28:05.349533'),(23,'app','0010_order_ordershop','2019-01-19 07:33:02.565732');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('5562t5o53nbk3383ehl27rir22tvqom9','MjcwMmE0OTI0MmIzZjJiN2UxNWRhNmEwMDAxMjI1YTMwNTlmMmIwZTp7InRva2VuIjoiNTFjMmE0NDdmNWFiMmRiYjhiZDkyZDVmNjhkZGVhNGYifQ==','2019-02-01 12:53:36.202482'),('asa0kwjf61oojca5m9xjeeqkgzuo9iix','OTIxODc2YzA2YzQxYzY2NTY5ZGUyNTg0NjE4YjRjODcwZjk2MjNiYzp7InRva2VuIjoiMzExMzQ3YjQwODY3ZDA5YjkwYWQ3YzY4ODlmOGE0OGEifQ==','2019-01-30 03:51:37.599674'),('ec4hbiqaawb6zotmiwpr5a898er6m9k2','MWU1MDdjOTU1MzVmZGY0NGVkNGI3OWNkMThiZDQxY2RjYTA2Nzg2Zjp7InRva2VuIjoiMDYyYWUzMzI0MjU3ODgwNjgxMjkyN2VkMWQxZmMxNjkifQ==','2019-03-30 03:20:44.344099'),('fxgtlwavaz0mhdemw51u9mp8tzp5ab9a','ZDQwMzkzZDI3NzcxNWJiODU0NzBkODRjNzA5ZWNlZjQ2Mjk3NTg4Yjp7InRva2VuIjoiMzlkOTY1NjYwNTk2ZjRmMThjZmIxMTcwMzY5NzA0OTYifQ==','2019-03-29 13:27:22.732123'),('is5hsezkuojt66qs8c4x6u7tx9pj1sjq','YzMwN2RjZjQyYzUyM2YxOTAzNmJjZjVlNmJlOTIyZGEwMmM4YjUwNTp7InRva2VuIjoiNzY2MDVlZjg0MjUwMGU2YmU3YWY3YTFjYTQyOGI3MGMifQ==','2019-03-30 03:07:00.191832'),('j2mf2go1swma08hvkebqmi8lxs4elhy8','MjkzOTZkMmNhYjBlOTI5OTQyOWQ4NGFiZDE4Y2I5M2UzMWNhNzMwNTp7InRva2VuIjoiZjE4YWI0ZTI1OWE0OTU0MWZlNGJhODM4YTU5NzU2OTYifQ==','2019-01-30 11:06:27.122765'),('jnhp18l9ojeeoikhjhub7thz417knjvu','OTU2OWE0OWJiODM4MWY0NDEzM2FmNzcyMzUwNmNlN2I5NmJkOTk0MTp7InRva2VuIjoiNzBhZDMzM2Q4ZTUzY2Q3ZjBiYjZiYzM0ZjUxMDBlNzEifQ==','2019-03-29 13:53:51.538887'),('lqdzqzplisa9jnd4eyg2cui66x0srddm','ZjViNTUyNTU1NDczYmJkM2E5Y2FhODI1MWYyNDJkY2E2ZjJkYTQxYjp7InRva2VuIjoiMjg0ZDYxM2JmMTk0Y2UzNmZiMDZmMzU1OTU1NzFjMTAifQ==','2019-03-29 14:03:22.707410'),('u1tcqjsld91z7idaeervor4078hfz7bk','NTMyNWM5NmIyNjFkZDIzMWFkNzEwYmZjYTlhMjUyMGEzZWM4MDI0ZTp7InRva2VuIjoiMGZkN2Y4MGYxMjAwODhkNTczNmE1NTI1NDUyZDNhMTYifQ==','2019-02-02 07:40:44.214138'),('un94ynpfaw1hgfj8d17okzfs8x99io5v','ZWFjMGZiODM5ZGNkZDU3NzY3YzBiZWU1OWVhMWFlYzUyN2Y1YjBjZDp7InRva2VuIjoiOTZkMjI2YmE0MDc1OGUxMjFlMzExOWIzY2NhNGU4ODMifQ==','2019-01-30 07:03:37.461682'),('vj4q5msrby1yq1rq817ujettayn996vh','OTA0MGUxMmU4MTZiZmVjMzk2YmM0ZWM0Y2I3ZDJkYzFhZTYwOTFjMDp7InRva2VuIjoiNzY2NjcxMzAyYjZmMmFhMGViMDI5ZmUzYTRhYmFjNTgifQ==','2019-01-30 06:45:54.629258'),('vlf25m0b8wt4h5ysa94rmbcckb8telcr','ZDI2N2YyYTM2ZjRlZjdhYzJlMTNiOGJlNWNiYTI4ZTZmOGQ1ZmYzMzp7InRva2VuIjoiMGQwNzk2Y2Y3MWRlZDNlODNlZjJhYTBiMTkxOGJkNjEifQ==','2019-03-30 02:25:14.614848'),('zbqvx1avdqk37b9exshufwjfm2d9s8ui','MmM1YWZmZWVjZTQ0NGQ2ZmJjOGYwZWE5MWI1NTdjZWNmMTFjMTE3Mzp7InRva2VuIjoiNzFmYmU2MmI1N2M2OTM0NGZmZTVjODc3OTZiN2MwNWMifQ==','2019-01-29 12:58:10.621255');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-16 14:27:56
