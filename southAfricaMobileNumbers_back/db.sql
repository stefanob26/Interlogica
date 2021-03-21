-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Creato il: Mar 21, 2021 alle 21:41
-- Versione del server: 5.7.32
-- Versione PHP: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `south-africa-mobile-numbers`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `numbers`
--

CREATE TABLE `numbers` (
  `number` mediumtext NOT NULL,
  `previous` varchar(255) DEFAULT NULL,
  `id` mediumtext
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `numbers`
--

INSERT INTO `numbers` (`number`, `previous`, `id`) VALUES
('27827979876', NULL, '1069'),
('27848594077', NULL, '1073'),
('27815580331', NULL, '1074'),
('27836826107', '27836826107_DELETED_1488997292', '1234'),
('27836826107', '27836826107_DELETED_1488997292', '1934');
