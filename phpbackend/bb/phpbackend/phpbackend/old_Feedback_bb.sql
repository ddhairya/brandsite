-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 20, 2020 at 03:00 AM
-- Server version: 5.6.49-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bb`
--

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `l_id` int(10) NOT NULL,
  `l_code` varchar(3) NOT NULL,
  `l_name` varchar(15) NOT NULL,
  `l_email` varchar(35) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`l_id`, `l_code`, `l_name`, `l_email`) VALUES
(1, 'CW', 'City Walk', 'bareburger_cw@alahliagroup.com'),
(2, 'LM', 'La Mer', 'bareburger_lm@alahliagroup.com'),
(3, 'MM', 'Marina Mall', 'bareburger_mm@alahliagroup.com'),
(4, 'TP', 'The Pointe', 'bareburger_tp@alahliagroup.com');

-- --------------------------------------------------------

--
-- Table structure for table `survey`
--

CREATE TABLE `survey` (
  `id` int(255) NOT NULL,
  `loc` varchar(20) NOT NULL,
  `fname` varchar(25) NOT NULL,
  `mob` int(15) NOT NULL,
  `email` varchar(35) NOT NULL,
  `q1` int(2) NOT NULL,
  `q2` int(2) NOT NULL,
  `q3` int(2) NOT NULL,
  `q4` int(2) NOT NULL,
  `q5` varchar(50) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `allow_inbox` tinyint(1) NOT NULL,
  `satisfaction` varchar(15) NOT NULL,
  `dine_time` varchar(10) NOT NULL,
  `c_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `test_survey`
--

CREATE TABLE `test_survey` (
  `id` int(255) NOT NULL,
  `loc` varchar(20) NOT NULL,
  `fname` varchar(25) NOT NULL,
  `mob` int(15) NOT NULL,
  `email` varchar(35) NOT NULL,
  `q1` int(2) NOT NULL,
  `q2` int(2) NOT NULL,
  `q3` int(2) NOT NULL,
  `q4` int(2) NOT NULL,
  `q5` varchar(50) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `allow_inbox` tinyint(1) NOT NULL,
  `satisfaction` varchar(15) NOT NULL,
  `dine_time` varchar(10) NOT NULL,
  `c_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `test_survey`
--

INSERT INTO `test_survey` (`id`, `loc`, `fname`, `mob`, `email`, `q1`, `q2`, `q3`, `q4`, `q5`, `comment`, `allow_inbox`, `satisfaction`, `dine_time`, `c_date`) VALUES
(1, 'CW', 'Dhairya Doshi', 508852853, 'dhairya@alahliagroup.com', 25, 11, 17, 25, '3', '', 1, 'Satisfied', 'm', '2020-08-17 12:04:13'),
(2, 'CW', 'Dhairya Doshi', 508852853, 'dhairya@alahliagroup.com', 25, 11, 17, 25, '3', '', 1, 'Satisfied', 'm', '2020-08-17 12:18:00'),
(3, 'CW', 'Dhairya Doshi', 508852853, 'dhairya9276@gmail.com', 25, 14, 13, 10, '2', 'test comment', 1, 'Not Satisfied', 'm', '2020-08-17 12:23:45'),
(4, 'CW', 'Dhairya Doshi', 508852853, 'dhairya9276@gmail.com', 25, 14, 13, 10, '2', 'test comment', 1, 'Not Satisfied', 'm', '2020-08-17 12:36:38'),
(5, 'CW', 'Fabrice       Vriens', 561201927, 'fvriens@bareburger.com', 1, 1, 1, 1, '1', 'Table is sticky ', 1, 'Not Satisfied', 'e', '2020-08-17 13:48:39'),
(6, 'CW', 'Fabrice       Vriens', 561201927, 'fvriens@bareburger.com', 1, 1, 1, 1, '1', 'Table is sticky ', 1, 'Not Satisfied', 'e', '2020-08-17 13:48:51'),
(7, 'CW', 'Fabrice       Vriens', 561201927, 'fvriens@bareburger.com', 1, 1, 1, 1, '1', 'Table is sticky ', 1, 'Not Satisfied', 'e', '2020-08-17 13:48:52'),
(8, 'CW', 'Fabrice       Vriens', 561201927, 'fvriens@bareburger.com', 1, 1, 1, 1, '1', 'Table is sticky ', 1, 'Not Satisfied', 'e', '2020-08-17 13:48:53'),
(9, 'CW', 'Fabrice       Vriens', 561201927, 'fvriens@bareburger.com', 1, 1, 1, 1, '1', 'Table is sticky ', 1, 'Not Satisfied', 'e', '2020-08-17 13:49:10'),
(10, 'CW', 'Fabrice       Vriens', 561201927, 'fvriens@bareburger.com', 1, 1, 1, 1, '1', 'Table is sticky ', 1, 'Not Satisfied', 'e', '2020-08-17 13:49:12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`l_id`);

--
-- Indexes for table `survey`
--
ALTER TABLE `survey`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test_survey`
--
ALTER TABLE `test_survey`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `l_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `survey`
--
ALTER TABLE `survey`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `test_survey`
--
ALTER TABLE `test_survey`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
