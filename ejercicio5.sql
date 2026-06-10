-- EJERCICIO 5 - Consultas básicas SQL sobre la base de datos "tienda"
-- (Antes de ejecutar estas consultas hay que cargar la base de datos: db.sql)

USE tienda;

-- 1. Mostrar todos los clientes
SELECT * FROM clientes;

-- 2. Mostrar todos los productos
SELECT * FROM productos;

-- 3. Mostrar productos con precio mayor de 90
SELECT * FROM productos WHERE precio > 90;

-- 4. Mostrar clientes de "Madrid"
SELECT * FROM clientes WHERE ciudad = 'Madrid';

-- 5. Productos ordenados por precio (descendente)
SELECT * FROM productos ORDER BY precio DESC;

-- 6. Clientes ordenados alfabéticamente
SELECT * FROM clientes ORDER BY nombre ASC;

-- 7. Productos con stock menor de 10
SELECT * FROM productos WHERE stock < 10;

-- 8. Clientes cuyo email termina en gmail.com
SELECT * FROM clientes WHERE email LIKE '%gmail.com';

-- 9. Insertar 3 clientes
INSERT INTO clientes (nombre, email, ciudad) VALUES
('Pedro Gómez', 'pedro@gmail.com', 'Bilbao'),
('Sara Díaz', 'sara@hotmail.com', 'Zaragoza'),
('Marcos Vidal', 'marcos@email.com', 'Toledo');

-- 10. Insertar 3 productos
INSERT INTO productos (nombre, precio, stock) VALUES
('Alfombrilla', 9.99, 50),
('Cable HDMI', 7.50, 40),
('Memoria USB 64GB', 12.25, 35);

-- 11. Actualizar el precio de un producto
UPDATE productos SET precio = 19.99 WHERE id = 1;

-- 12. Reducir el stock de un producto
UPDATE productos SET stock = stock - 1 WHERE id = 2;

-- 13. Eliminar un cliente por id
DELETE FROM clientes WHERE id = 5;

-- 14. Mostrar pedidos con el nombre del cliente
SELECT pedidos.id, clientes.nombre, pedidos.fecha
FROM pedidos
JOIN clientes ON pedidos.cliente_id = clientes.id;

-- 15. Mostrar líneas de pedido con el nombre del producto
SELECT lineas_pedido.id, productos.nombre, lineas_pedido.cantidad
FROM lineas_pedido
JOIN productos ON lineas_pedido.producto_id = productos.id;

-- 16. Mostrar el total de líneas por pedido
SELECT pedido_id, COUNT(*) AS total_lineas
FROM lineas_pedido
GROUP BY pedido_id;

-- 17. Número total de clientes
SELECT COUNT(*) AS total_clientes FROM clientes;

-- 18. Precio medio de los productos
SELECT AVG(precio) AS precio_medio FROM productos;

-- 19. Producto más caro
SELECT * FROM productos ORDER BY precio DESC LIMIT 1;

-- 20. Total de pedidos por cliente
SELECT clientes.nombre, COUNT(pedidos.id) AS total_pedidos
FROM clientes
LEFT JOIN pedidos ON clientes.id = pedidos.cliente_id
GROUP BY clientes.id, clientes.nombre;
