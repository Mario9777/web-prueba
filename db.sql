-- Base de datos de partida para el Ejercicio 5
DROP DATABASE IF EXISTS tienda;
CREATE DATABASE tienda;
USE tienda;

CREATE TABLE clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100),
  ciudad VARCHAR(100)
);

INSERT INTO clientes (nombre, email, ciudad) VALUES
('Ana López', 'ana@gmail.com', 'Madrid'),
('Juan Pérez', 'juan@hotmail.com', 'Toledo'),
('María García', 'maria@gmail.com', 'Madrid'),
('Carlos Ruiz', 'carlos@yahoo.com', 'Sevilla'),
('Lucía Martín', 'lucia@gmail.com', 'Valencia');

CREATE TABLE productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  precio DECIMAL(10,2),
  stock INT
);

INSERT INTO productos (nombre, precio, stock) VALUES
('Teclado mecánico', 89.99, 15),
('Ratón inalámbrico', 25.50, 30),
('Monitor 24 pulgadas', 149.90, 8),
('Auriculares', 45.00, 20),
('Disco SSD 1TB', 120.00, 5),
('Webcam HD', 39.75, 25);

CREATE TABLE pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT,
  fecha DATE,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

INSERT INTO pedidos (cliente_id, fecha) VALUES
(1, '2024-01-10'),
(1, '2024-01-12'),
(2, '2024-01-13'),
(3, '2024-01-14'),
(3, '2024-01-15'),
(5, '2024-01-16');

CREATE TABLE lineas_pedido (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pedido_id INT,
  producto_id INT,
  cantidad INT,
  FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
  FOREIGN KEY (producto_id) REFERENCES productos(id)
);

INSERT INTO lineas_pedido (pedido_id, producto_id, cantidad) VALUES
(1, 1, 1),
(1, 2, 2),
(2, 3, 1),
(3, 4, 3),
(4, 2, 1),
(5, 5, 2);
