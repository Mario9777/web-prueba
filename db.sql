-- Base de datos de partida de la prueba (estará disponible antes de empezar).
-- Tienda online: clientes, productos, pedidos y líneas de pedido.

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
('Ana López', 'ana@email.com', 'Madrid'),
('Luis Pérez', 'luis@hotmail.com', 'Sevilla'),
('María García', 'maria@email.com', 'Madrid'),
('Lucía Martín', 'lucia@gmail.com', 'Valencia');

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(10,2),
    stock INT
);

INSERT INTO productos (nombre, precio, stock) VALUES
('Teclado', 25.99, 10),
('Ratón', 15.50, 25),
('Monitor 24 pulgadas', 149.99, 8),
('Disco duro', 89.00, 12),
('Webcam HD', 35.75, 20);

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    fecha DATE,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

INSERT INTO pedidos (cliente_id, fecha) VALUES
(1, '2024-01-15'),
(2, '2024-01-16'),
(1, '2024-02-10'),
(3, '2024-03-05'),
(4, '2024-03-12');

CREATE TABLE lineas_pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT,
    producto_id INT,
    cantidad INT,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

INSERT INTO lineas_pedido (pedido_id, producto_id, cantidad) VALUES
(1, 1, 2),
(1, 3, 1),
(2, 2, 1),
(3, 5, 3),
(4, 4, 1),
(5, 2, 2);
