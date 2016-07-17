-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.12-0ubuntu1.1 - (Ubuntu)
-- Server OS:                    Linux
-- HeidiSQL Version:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for billboard
CREATE DATABASE IF NOT EXISTS `billboard` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `billboard`;


-- Dumping structure for table billboard.attribute
CREATE TABLE IF NOT EXISTS `attribute` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Attributes list';

-- Data exporting was unselected.


-- Dumping structure for table billboard.attr_relation
CREATE TABLE IF NOT EXISTS `attr_relation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attrId` int(11) DEFAULT NULL,
  `boardId` int(11) DEFAULT NULL,
  `value` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_attr_relation_board` (`boardId`),
  KEY `FK_attr_relation_attributes` (`attrId`),
  CONSTRAINT `FK_attr_relation_attributes` FOREIGN KEY (`attrId`) REFERENCES `attribute` (`id`),
  CONSTRAINT `FK_attr_relation_board` FOREIGN KEY (`boardId`) REFERENCES `board` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.


-- Dumping structure for table billboard.board
CREATE TABLE IF NOT EXISTS `board` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `message` text NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `categoryId` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `FK_board_category` (`categoryId`),
  CONSTRAINT `FK_board_attr_relation` FOREIGN KEY (`id`) REFERENCES `attr_relation` (`boardId`),
  CONSTRAINT `FK_board_category` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Data exporting was unselected.


-- Dumping structure for table billboard.category
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `createAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Cateries List';

-- Data exporting was unselected.
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
