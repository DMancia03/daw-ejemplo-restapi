-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 06-10-2021 a las 04:21:35
-- Versión del servidor: 8.0.18
-- Versión de PHP: 7.4.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `marketplaces`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `idProducto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion` mediumtext COLLATE utf8_spanish2_ci NOT NULL,
  `tipoProducto` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `imgUrl` mediumtext COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`idProducto`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `nombre`, `descripcion`, `tipoProducto`, `imgUrl`) VALUES
(1, 'Cartucho TLOZ BOTW', 'Juego con partida todo desbloqueado.', 'Juegos usados', 'https://www.zelda.com/breath-of-the-wild/assets/icons/BOTW-Share_icon.jpg'),
(3, 'STARTUP GAMER 3000', 'Asombroso equipo gamer que incluye una pc gamer y una silla, todo lleno de RGB como debe ser.', 'Equipo informático', 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg'),
(8, 'PS3 casi nuevo', 'Una consola PlayStation 3 casi nueva, solo la compre y no la ocupe.  No incluye juegos :/', 'Equipo informático', 'https://m.media-amazon.com/images/I/41J29bRxQVL._AC_SY1000_.jpg'),
(9, 'WII U NUEVO', 'Es de los pocos wii u en perfecto estado que vas a encontrar, no incluye juegos pero es una consola nuevita.', 'Equipo informático', 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/73040-games-review-nintendo-wii-u-review-image1-n7bs4eY69z.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
