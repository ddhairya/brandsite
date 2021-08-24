-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 15, 2021 at 09:16 PM
-- Server version: 5.6.51-cll-lve
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
-- Table structure for table `etisalat`
--

CREATE TABLE `etisalat` (
  `id` int(11) NOT NULL,
  `site_id` varchar(4) NOT NULL,
  `etisalat_plan` varchar(50) NOT NULL,
  `etisalat_number` varchar(15) NOT NULL,
  `etisalat_fax_number` varchar(15) NOT NULL,
  `etisalat_subline` varchar(4) NOT NULL,
  `etisalat_internet` varchar(15) NOT NULL,
  `remark` varchar(169) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `etisalat`
--

INSERT INTO `etisalat` (`id`, `site_id`, `etisalat_plan`, `etisalat_number`, `etisalat_fax_number`, `etisalat_subline`, `etisalat_internet`, `remark`) VALUES
(1, '1', 'B2B', '02-6419811', '02-6419822', '5', 'NA', 'This is test etisalat details'),
(4, '2', 'B2B', '026765060', 'NA Fax', '5', 'NA', 'Test remark');

-- --------------------------------------------------------

--
-- Table structure for table `firewalls`
--

CREATE TABLE `firewalls` (
  `id` int(11) NOT NULL,
  `site_id` varchar(4) NOT NULL,
  `firewall_model` varchar(30) NOT NULL,
  `firewall_ip` varchar(20) NOT NULL,
  `firewall_dyn` varchar(30) NOT NULL,
  `firewall_port` varchar(5) NOT NULL,
  `firewall_username` varchar(10) NOT NULL,
  `firewall_password` varchar(255) NOT NULL,
  `date_of_purchase` date NOT NULL,
  `remark` varchar(169) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `firewalls`
--

INSERT INTO `firewalls` (`id`, `site_id`, `firewall_model`, `firewall_ip`, `firewall_dyn`, `firewall_port`, `firewall_username`, `firewall_password`, `date_of_purchase`, `remark`) VALUES
(1, '1', 'XG-350', '192.168.2.1', 'agtc@dyndns.org', '443', 'admin', 'U2FsdGVkX19mfLBjSF93ez6fdSOpW1XEeu/2bt8S2hQ=', '2021-08-08', 'This is a test firewall details'),
(2, '2', 'XG-300', '192.168.1.1', 'agtc@dyndns.org', '443', 'admin', 'password-encrypted', '2020-10-01', 'This is a test firewall details');

-- --------------------------------------------------------

--
-- Table structure for table `licenses`
--

CREATE TABLE `licenses` (
  `id` int(11) NOT NULL,
  `site_id` varchar(4) NOT NULL,
  `license_product` varchar(30) NOT NULL,
  `license_system_name` varchar(30) NOT NULL,
  `license_key` varchar(255) NOT NULL,
  `license_reg_email` varchar(50) NOT NULL,
  `date_of_purchase` date NOT NULL,
  `remark` varchar(169) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `licenses`
--

INSERT INTO `licenses` (`id`, `site_id`, `license_product`, `license_system_name`, `license_key`, `license_reg_email`, `date_of_purchase`, `remark`) VALUES
(1, '1', 'MSOffice 2019', 'L20255DhairyaLap', 'U2FsdGVkX19Am7kBj+2n/dcA1Rvj2rNmSi9PI/ArqF8RLQtMII0AmvVgNedqlYOZ', 'it@alahliagroup.com', '2021-01-20', 'This is test license details'),
(2, '2', '', '', '', '', '1970-01-01', ''),
(3, '2', 'MSOffice 2013', '', '', '', '2021-02-04', '');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `l_id` int(10) NOT NULL,
  `l_code` varchar(10) NOT NULL,
  `l_name` varchar(15) NOT NULL,
  `l_email` varchar(35) NOT NULL,
  `l_c_name` varchar(25) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`l_id`, `l_code`, `l_name`, `l_email`, `l_c_name`) VALUES
(1, 'CW', 'City Walk', 'bareburger_cw@alahliagroup.com', 'Bareburger'),
(2, 'LM', 'La Mer', 'bareburger_lm@alahliagroup.com', 'Bareburger'),
(3, 'MM', 'Marina Mall', 'bareburger_mm@alahliagroup.com', 'Bareburger'),
(4, 'TP', 'The Pointe', 'bareburger_tp@alahliagroup.com', 'Bareburger'),
(5, 'CP_ADM', 'AD Mall', 'admall@alahliagroup.com', 'Coop'),
(6, 'CP_MINA', 'Mina', 'mina.coop@alahliagroup.com', 'Coop'),
(7, 'CP_SKCA', 'Spar KCA', 'spar@alahliagroup.com', 'Coop'),
(8, 'CP_BUT', 'Butten', 'butten@alahliagroup.com', 'Coop'),
(9, 'CP_HAM', 'Hamdan', 'mina.coop@alahliagroup.com', 'Coop');

-- --------------------------------------------------------

--
-- Table structure for table `location_orignal`
--

CREATE TABLE `location_orignal` (
  `l_id` int(10) NOT NULL,
  `l_code` varchar(3) NOT NULL,
  `l_name` varchar(15) NOT NULL,
  `l_email` varchar(35) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `location_orignal`
--

INSERT INTO `location_orignal` (`l_id`, `l_code`, `l_name`, `l_email`) VALUES
(1, 'CW', 'City Walk', 'bareburger_cw@alahliagroup.com'),
(2, 'LM', 'La Mer', 'bareburger_lm@alahliagroup.com'),
(3, 'MM', 'Marina Mall', 'bareburger_mm@alahliagroup.com'),
(4, 'TP', 'The Pointe', 'bareburger_tp@alahliagroup.com');

-- --------------------------------------------------------

--
-- Table structure for table `printers`
--

CREATE TABLE `printers` (
  `id` int(11) NOT NULL,
  `site_id` varchar(4) NOT NULL,
  `printer_model` varchar(50) NOT NULL,
  `printer_alias_name` varchar(30) NOT NULL,
  `printer_details` varchar(30) NOT NULL,
  `date_of_purchase` date NOT NULL,
  `remark` varchar(169) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `printers`
--

INSERT INTO `printers` (`id`, `site_id`, `printer_model`, `printer_alias_name`, `printer_details`, `date_of_purchase`, `remark`) VALUES
(1, '1', 'TMT88IV', 'Bar', '192.168.1.1', '2021-02-02', 'This is a test printer details'),
(2, '2', 'TMT88', 'Bar', '192.168.1.1', '2021-02-02', 'This is a test printer details'),
(3, '2', '', '', '', '2021-02-04', ''),
(4, '2', 'EPSON690', 'Cheque', 'USB', '2022-02-03', 'Test details for site 2 '),
(5, '2', 'HP101', 'Test Printer', 'USB', '2016-02-03', 'test remark'),
(6, '2', 'HP', 'Test', 'USB', '2015-02-03', ''),
(18, '2', 'test - 18', 'test18', '18', '2021-02-03', 'test remark 18');

-- --------------------------------------------------------

--
-- Table structure for table `sites`
--

CREATE TABLE `sites` (
  `id` int(11) NOT NULL,
  `emirate` varchar(50) NOT NULL,
  `outlet` varchar(50) NOT NULL,
  `company` varchar(30) NOT NULL,
  `phone` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sites`
--

INSERT INTO `sites` (`id`, `emirate`, `outlet`, `company`, `phone`) VALUES
(1, 'Abu Dhabi', 'Marina Mall', 'LaBrioche', '02-6815531'),
(2, 'Dubai', 'Mirdif Mall', 'LaBrioche', '042-515-515');

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
-- Table structure for table `systems`
--

CREATE TABLE `systems` (
  `id` int(11) NOT NULL,
  `site_id` varchar(4) NOT NULL,
  `system_identification` varchar(30) NOT NULL,
  `system_name` varchar(30) NOT NULL,
  `system_model` varchar(30) NOT NULL,
  `system_ip` varchar(20) NOT NULL,
  `system_port` varchar(4) NOT NULL,
  `system_username` varchar(10) NOT NULL,
  `system_password` varchar(255) NOT NULL,
  `date_of_purchase` date NOT NULL,
  `remark` varchar(169) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `systems`
--

INSERT INTO `systems` (`id`, `site_id`, `system_identification`, `system_name`, `system_model`, `system_ip`, `system_port`, `system_username`, `system_password`, `date_of_purchase`, `remark`) VALUES
(1, '1', 'CCTV', 'L20255Dhairya', 'Hikvision', '192.168.0.1', '80', 'admin', 'U2FsdGVkX19AY9sus8C/u75wPn96SBsrs46Adr+Sop8XMTx/rmoedTN6I9Rq+HSW', '2021-01-01', 'This is test system details'),
(2, '2', 'Laptop', 'Dash-lap', 'HP ProBook G5', 'DHCP', '', '', '', '2021-02-04', '');

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

-- --------------------------------------------------------

--
-- Table structure for table `test_ticket`
--

CREATE TABLE `test_ticket` (
  `t_id` int(100) NOT NULL,
  `t_l_name` varchar(20) NOT NULL,
  `t_c_name` varchar(25) NOT NULL,
  `t_equipment` varchar(69) NOT NULL,
  `t_description` varchar(100) NOT NULL,
  `t_priority` varchar(30) NOT NULL,
  `t_file` varchar(255) NOT NULL,
  `fname` varchar(25) NOT NULL,
  `t_email` varchar(40) NOT NULL,
  `t_status` varchar(25) NOT NULL DEFAULT 'Open',
  `t_reg_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `t_assign_user` varchar(25) DEFAULT NULL,
  `t_visit_date` timestamp NULL DEFAULT NULL,
  `t_maint_descript` varchar(100) DEFAULT NULL,
  `t_maint_solution` varchar(100) DEFAULT NULL,
  `t_resp_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `test_ticket`
--

INSERT INTO `test_ticket` (`t_id`, `t_l_name`, `t_c_name`, `t_equipment`, `t_description`, `t_priority`, `t_file`, `fname`, `t_email`, `t_status`, `t_reg_date`, `t_assign_user`, `t_visit_date`, `t_maint_descript`, `t_maint_solution`, `t_resp_date`) VALUES
(1, '', '', '', '', '', '', '', '', 'To be Schedule', '2020-10-07 07:13:25', 'Manoj', '2020-11-16 07:00:00', 'Des', 'Sol', '2020-11-08 17:25:00'),
(2, 'Mina', 'Coop', 'Oven', '', 'low', '', '', '', 'To be Schedule', '2020-10-07 07:13:27', 'Manoj', '2020-10-23 07:00:00', 'Need to Change the Fand ', 're boost the fan ', '2020-10-22 23:31:00'),
(3, '', '', '', '', '', '', '', '', 'LPO Approval', '2020-10-07 07:14:00', 'Manoj', '2020-10-20 07:00:00', 'no problem ', 'no probleme', '2020-10-23 14:35:00'),
(4, '', '', '', '', '', '', '', '', 'Open', '2020-10-07 07:16:38', '', NULL, '', '', NULL),
(5, '', '', '', '', '', '', '', '', 'Open', '2020-10-07 07:18:59', '', NULL, '', '', NULL),
(6, 'Mina', 'Coop', 'Oven', '', 'low', '', '', '', 'Under Investigation', '2020-10-07 07:18:59', 'Satish', '2020-10-17 19:00:00', 'Maint Des', 'Maint Solt', '2020-10-22 23:03:00'),
(7, '', '', '', '', '', '', '', '', 'Open', '2020-10-07 07:46:51', '', NULL, '', '', NULL),
(8, 'AD Mall', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-07 07:46:53', '', NULL, '', '', NULL),
(9, '', '', '', '', '', '', '', '', 'Open', '2020-10-07 08:06:14', '', NULL, '', '', NULL),
(10, 'Mina', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-07 08:06:16', '', NULL, '', '', NULL),
(11, '', '', '', '', '', '', '', '', 'Open', '2020-10-07 08:06:48', '', NULL, '', '', NULL),
(12, 'Mina', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-07 08:09:33', '', NULL, '', '', NULL),
(13, '', '', '', '', '', '', '', '', 'Open', '2020-10-07 08:21:33', '', NULL, '', '', NULL),
(14, 'Mina', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-07 08:21:35', '', NULL, '', '', NULL),
(15, '', '', '', '', '', '', '', '', 'Open', '2020-10-07 10:16:33', '', NULL, '', '', NULL),
(16, 'Mina', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-07 10:16:35', '', NULL, '', '', NULL),
(17, '', '', '', '', '', '', '', '', 'Open', '2020-10-08 07:47:57', '', NULL, '', '', NULL),
(18, '', '', '', '', '', '', '', '', 'Open', '2020-10-08 07:48:28', '', NULL, '', '', NULL),
(19, 'AD Mall', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-08 07:48:30', '', NULL, '', '', NULL),
(20, '', '', '', '', '', '', '', '', 'Open', '2020-10-08 07:50:17', '', NULL, '', '', NULL),
(21, 'Spar KCA', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-08 07:50:19', '', NULL, '', '', NULL),
(22, '', '', '', '', '', '', '', '', 'Open', '2020-10-08 07:56:04', '', NULL, '', '', NULL),
(23, 'AD Mall', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-08 07:56:06', '', NULL, '', '', NULL),
(24, '', '', '', '', '', '', '', '', 'Open', '2020-10-08 07:57:20', '', NULL, '', '', NULL),
(25, 'Spar KCA', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-08 07:57:22', '', NULL, '', '', NULL),
(26, 'Mina', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-08 08:04:17', '', NULL, '', '', NULL),
(27, 'Mina', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-08 08:05:29', '', NULL, '', '', NULL),
(28, 'Butten', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-08 08:09:22', '', NULL, '', '', NULL),
(29, 'Spar KCA', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-08 08:31:13', '', NULL, '', '', NULL),
(30, '', '', '', '', '', '', '', '', 'Open', '2020-10-11 05:01:04', '', NULL, '', '', NULL),
(31, '', '', '', '', '', '', '', '', 'Open', '2020-10-11 05:03:49', '', NULL, '', '', NULL),
(32, '', '', '', '', '', '', '', '', 'Open', '2020-10-11 05:05:09', '', NULL, '', '', NULL),
(33, '', '', '', '', '', '', '', '', 'Open', '2020-10-11 05:08:55', '', NULL, '', '', NULL),
(34, '', '', '', '', '', '', '', '', 'Open', '2020-10-11 05:09:38', '', NULL, '', '', NULL),
(35, '', '', '', '', '', '', '', '', 'Open', '2020-10-11 05:50:02', '', NULL, '', '', NULL),
(36, '', '', '', '', '', '', '', '', 'Open', '2020-10-11 05:51:42', '', NULL, '', '', NULL),
(37, '', '', '', '', '', '', '', '', 'Open', '2020-10-11 05:52:15', '', NULL, '', '', NULL),
(38, '', '', '', '', '', '', '', '', 'Open', '2020-10-11 05:54:27', '', NULL, '', '', NULL),
(39, '', 'Coop', '', '', '', '', '', '', 'Open', '2020-10-11 05:57:10', '', NULL, '', '', NULL),
(40, 'Mina', 'Coop', 'Oven', 'Description', 'low', '', 'Name', '', 'Open', '2020-10-11 06:01:17', '', NULL, '', '', NULL),
(41, 'Mina', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-11 06:17:17', '', NULL, '', '', NULL),
(42, 'Mina', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-11 06:17:51', '', NULL, '', '', NULL),
(43, 'Mina', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-11 06:26:55', '', NULL, '', '', NULL),
(44, 'Mina', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-11-01-27-06pm-003a.jpg', '', '', 'Open', '2020-10-11 09:27:07', '', NULL, '', '', NULL),
(45, 'Mina', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-11-01-27-40pm-003a.jpg', '', '', 'Open', '2020-10-11 09:27:40', '', NULL, '', '', NULL),
(46, '', '', '', '', '', '', '', '', 'Open', '2020-10-11 09:39:01', '', NULL, '', '', NULL),
(47, 'Mina', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-11-01-39-10pm-003a.jpg', '', '', 'Open', '2020-10-11 09:39:10', '', NULL, '', '', NULL),
(48, 'Mina', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-11-01-40-04pm-003a.jpg', '', '', 'Open', '2020-10-11 09:40:04', '', NULL, '', '', NULL),
(49, 'Mina', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-11-01-40-49pm-003a.jpg', '', '', 'Open', '2020-10-11 09:40:49', '', NULL, '', '', NULL),
(50, 'Mina', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-11-01-41-12pm-003a.jpg', '', '', 'Open', '2020-10-11 09:41:12', '', NULL, '', '', NULL),
(51, 'Mina', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-11-01-44-37pm-003a.jpg', '', '', 'Open', '2020-10-11 09:44:37', '', NULL, '', '', NULL),
(52, 'Mina', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-11-01-47-12pm-003a.jpg', '', '', 'Open', '2020-10-11 09:47:12', '', NULL, '', '', NULL),
(53, 'Mina', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-11-01-50-07pm-003a.jpg', '', '', 'Open', '2020-10-11 09:50:07', '', NULL, '', '', NULL),
(54, 'Mina', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-11-02-02-05pm-003a.jpg', '', '', 'Open', '2020-10-11 10:02:05', '', NULL, '', '', NULL),
(55, 'Spar KCA', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-12-11-19-46am-download.jpg', 'Dhairya Doshi', 'dhairya@alahliagroup.com', 'Open', '2020-10-12 07:22:26', NULL, NULL, '', '', NULL),
(56, 'Spar KCA', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-12-11-23-46am-download.jpg', 'Dhairya Doshi', 'dhairya@alahliagroup.com', 'Open', '2020-10-12 07:23:46', NULL, NULL, NULL, NULL, NULL),
(57, 'Spar KCA', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-12-11-39-32am-download.jpg', 'Dhairya Doshi', 'dhairya@alahliagroup.com', 'Open', '2020-10-12 07:39:32', NULL, NULL, NULL, NULL, NULL),
(58, 'Spar KCA', 'Coop', 'Test Equipment', 'Test Description', 'low', 'ticket_upload/2020-10-12-12-05-40pm-download.jpg', 'Dhairya Doshi', 'dhairya@alahliagroup.com', 'Open', '2020-10-12 08:05:40', NULL, NULL, NULL, NULL, NULL),
(59, 'Spar KCA', 'Coop', 'Test Equipment', 'Test Description', 'low', 'ticket_upload/2020-10-12-12-18-59pm-download.jpg', 'Dhairya Doshi', 'dhairya@alahliagroup.com', 'Open', '2020-10-12 08:18:59', NULL, NULL, NULL, NULL, NULL),
(60, 'Spar KCA', 'Coop', 'Test Equipment', 'Test Description', 'low', 'ticket_upload/2020-10-12-12-25-06pm-download.jpg', 'Dhairya Doshi', 'dhairya@alahliagroup.com', 'Open', '2020-10-12 08:25:06', NULL, NULL, NULL, NULL, NULL),
(61, 'Mina', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-12-12-26-18pm-download.jpg', '', '', 'Open', '2020-10-12 08:26:18', NULL, NULL, NULL, NULL, NULL),
(62, 'Mina', 'Coop', 'Oven', 'Test', 'low', '', '', '', 'Open', '2020-10-12 08:40:55', NULL, NULL, NULL, NULL, NULL),
(63, 'Mina', 'Coop', 'Oven', 'Test', 'low', 'ticket_upload/2020-10-12-12-42-54pm-download.jpg', '', '', 'Open', '2020-10-12 08:42:54', NULL, NULL, NULL, NULL, NULL),
(64, 'Mina', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-12-12-44-32pm-download.jpg', '', '', 'Open', '2020-10-12 08:44:32', NULL, NULL, NULL, NULL, NULL),
(65, 'AD Mall', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-12 08:49:53', NULL, NULL, NULL, NULL, NULL),
(66, 'AD Mall', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-12 08:51:19', NULL, NULL, NULL, NULL, NULL),
(67, 'AD Mall', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-12 08:54:13', NULL, NULL, NULL, NULL, NULL),
(68, 'Spar KCA', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-12-12-54-32pm-003a.jpg', '', '', 'Open', '2020-10-12 08:54:32', NULL, NULL, NULL, NULL, NULL),
(69, 'Mina', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-12-01-01-45pm-003a.jpg', '', '', 'Open', '2020-10-12 09:01:45', NULL, NULL, NULL, NULL, NULL),
(70, 'Mina', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-12 09:04:48', NULL, NULL, NULL, NULL, NULL),
(71, 'Mina', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-12 09:05:52', NULL, NULL, NULL, NULL, NULL),
(72, 'Spar KCA', 'Coop', 'Oven', '', 'low', 'ticket_upload/2020-10-12-01-06-15pm-005.jpg', '', '', 'Open', '2020-10-12 09:06:15', NULL, NULL, NULL, NULL, NULL),
(73, 'AD Mall', 'Coop', 'Oven', 'Working but not working at the same time ', 'low', 'ticket_upload/2020-10-21-01-44-37pm-16032733492335435955349448663750.jpg', 'Fabrice Vriens ', 'fabrice@alahliagroup.com', 'Open', '2020-10-21 09:44:40', NULL, NULL, NULL, NULL, NULL),
(74, 'AD Mall', 'Coop', 'Oven', 'Working but not working at the same time ', 'low', 'ticket_upload/2020-10-21-01-44-48pm-16032733492335435955349448663750.jpg', 'Fabrice Vriens ', 'fabrice@alahliagroup.com', 'Open', '2020-10-21 09:44:52', NULL, NULL, NULL, NULL, NULL),
(75, 'AD Mall', 'Coop', 'Oven', 'Working but not working at the same time ', 'low', 'ticket_upload/2020-10-21-01-44-57pm-16032733492335435955349448663750.jpg', 'Fabrice Vriens ', 'fabrice@alahliagroup.com', 'Open', '2020-10-21 09:45:07', NULL, NULL, NULL, NULL, NULL),
(76, 'AD Mall', 'Coop', 'Oven', 'Working but not working at the same time ', 'low', 'ticket_upload/2020-10-21-01-45-02pm-16032733492335435955349448663750.jpg', 'Fabrice Vriens ', 'fabrice@alahliagroup.com', 'Open', '2020-10-21 09:45:07', NULL, NULL, NULL, NULL, NULL),
(77, 'AD Mall', 'Coop', 'Oven', 'Working but not working at the same time ', 'low', 'ticket_upload/2020-10-21-01-45-11pm-16032733492335435955349448663750.jpg', 'Fabrice Vriens ', 'fabrice@alahliagroup.com', 'Open', '2020-10-21 09:45:11', NULL, NULL, NULL, NULL, NULL),
(78, 'AD Mall', 'Coop', 'Oven', 'Working but not working at the same time ', 'low', 'ticket_upload/2020-10-21-01-45-11pm-16032733492335435955349448663750.jpg', 'Fabrice Vriens ', 'fabrice@alahliagroup.com', 'Open', '2020-10-21 09:45:11', NULL, NULL, NULL, NULL, NULL),
(79, 'AD Mall', 'Coop', 'Oven', 'desctiption', 'low', '', 'Dhairya', 'dhairya@alahliagroup.com', 'Open', '2020-10-22 06:05:07', NULL, NULL, NULL, NULL, NULL),
(80, 'Mina', 'Coop', 'Oven', '', 'low', '', '', '', 'Open', '2020-10-22 06:15:22', NULL, NULL, NULL, NULL, NULL),
(81, 'Spar KCA', 'Coop', 'Oven', 'desc', 'low', '', 'Dhairya Doshi', 'dhairya@alahliagroup.com', 'Open', '2020-10-22 06:31:44', NULL, NULL, NULL, NULL, NULL),
(82, '', '', '', '', '', '', '', '', 'Open', '2020-11-08 06:26:11', NULL, NULL, NULL, NULL, '2020-11-08 06:26:11'),
(83, '', 'Coop', '', '', '', '', '', '', 'Open', '2020-11-08 06:29:17', NULL, NULL, NULL, NULL, '2020-11-08 06:29:17');

-- --------------------------------------------------------

--
-- Table structure for table `ticket_user`
--

CREATE TABLE `ticket_user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ticket_user`
--

INSERT INTO `ticket_user` (`id`, `username`, `password`) VALUES
(1, 'test', '$2y$10$p0chVMmOmS2bQs6v1/u3K.ekITvPKotuQM12ZTeCv8KAte.gmsuiS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `etisalat`
--
ALTER TABLE `etisalat`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `firewalls`
--
ALTER TABLE `firewalls`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `licenses`
--
ALTER TABLE `licenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`l_id`);

--
-- Indexes for table `location_orignal`
--
ALTER TABLE `location_orignal`
  ADD PRIMARY KEY (`l_id`);

--
-- Indexes for table `printers`
--
ALTER TABLE `printers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sites`
--
ALTER TABLE `sites`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `survey`
--
ALTER TABLE `survey`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `systems`
--
ALTER TABLE `systems`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test_survey`
--
ALTER TABLE `test_survey`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `test_ticket`
--
ALTER TABLE `test_ticket`
  ADD PRIMARY KEY (`t_id`);

--
-- Indexes for table `ticket_user`
--
ALTER TABLE `ticket_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `etisalat`
--
ALTER TABLE `etisalat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `firewalls`
--
ALTER TABLE `firewalls`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `licenses`
--
ALTER TABLE `licenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `l_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `location_orignal`
--
ALTER TABLE `location_orignal`
  MODIFY `l_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `printers`
--
ALTER TABLE `printers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `sites`
--
ALTER TABLE `sites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `survey`
--
ALTER TABLE `survey`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `systems`
--
ALTER TABLE `systems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `test_survey`
--
ALTER TABLE `test_survey`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `test_ticket`
--
ALTER TABLE `test_ticket`
  MODIFY `t_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `ticket_user`
--
ALTER TABLE `ticket_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
