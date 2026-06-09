# Parte 1 - Prueba teórica

Respuestas del cuestionario (35 preguntas, una opción correcta cada una).

| Nº | Respuesta | Nº | Respuesta | Nº | Respuesta |
|----|-----------|----|-----------|----|-----------|
| 1  | b | 13 | b | 25 | b |
| 2  | b | 14 | b | 26 | b |
| 3  | c | 15 | b | 27 | b |
| 4  | a | 16 | c | 28 | b |
| 5  | b | 17 | c | 29 | b |
| 6  | b | 18 | b | 30 | b |
| 7  | c | 19 | c | 31 | a |
| 8  | b | 20 | b | 32 | a |
| 9  | b | 21 | b | 33 | b |
| 10 | a | 22 | a | 34 | b |
| 11 | b | 23 | b | 35 | b |
| 12 | b | 24 | b |    |   |

---

## Justificación breve de cada respuesta

**1. b) npm init** — Es el comando que arranca un proyecto y te va preguntando los datos para generar el `package.json`. `node init` o `npm create` no sirven para esto.

**2. b) package.json** — Ahí están las dependencias, la versión, los scripts... `node_modules` es la carpeta donde se descargan, que es distinto.

**3. c) npm install --save-dev paquete** — El `--save-dev` (o `-D`) lo mete en devDependencies, o sea solo para desarrollo. El `-g` es global.

**4. a) app.get()** — Cada verbo HTTP tiene su método: get para GET, post para POST, etc.

**5. b) Una función con acceso a req, res y next** — Esa es la definición de middleware. El `next` es justo lo que la diferencia de un manejador normal de ruta.

**6. b) MVC (Modelo-Vista-Controlador)** — Es el patrón clásico que separa datos (Modelo), presentación (Vista) y lógica/control (Controlador).

**7. c) Controlador** — El controlador es el que recibe la petición y decide qué hacer; el router solo dirige hacia él.

**8. b) res.json()** — Manda la respuesta ya serializada como JSON y pone el Content-Type correcto. `res.send()` también valdría pero la específica es json().

**9. b) /users/:id** — En Express los parámetros de ruta se ponen con dos puntos delante.

**10. a) fs** — El módulo "file system". `path` sirve para rutas de archivos, no para leer/escribir.

**11. b) multer** — Es el middleware que se usa normalmente para gestionar subida de ficheros (multipart/form-data).

**12. b) fs.readFile()** — La versión asíncrona. La que lleva "Sync" detrás (readFileSync) es la bloqueante.

**13. b) En req.file o req.files** — Cuando usas multer los archivos te quedan ahí disponibles.

**14. b) SELECT * FROM usuarios** — SELECT es la sentencia para consultar; el resto no existen en SQL.

**15. b) WHERE** — Filtra filas antes de agrupar. HAVING también filtra pero después de un GROUP BY.

**16. c) INNER JOIN** — Devuelve solo lo que coincide en las dos tablas. Los LEFT/RIGHT incluyen además los que no casan de un lado.

**17. c) CREATE DATABASE** — Sintaxis estándar de SQL para crear la base de datos.

**18. b) COUNT()** — Cuenta filas. SUM() suma valores, que no es lo mismo.

**19. c) DECIMAL** — Para dinero se usa DECIMAL porque guarda el valor exacto. Con tipos float habría errores de redondeo.

**20. b) ORDER BY** — Ordena el resultado. GROUP BY agrupa, que es otra cosa.

**21. b) INSERT INTO** — La sentencia para meter registros nuevos.

**22. a) fetch()** — La propia llamada a fetch() ya devuelve una Promise.

**23. b) res.json()** — El método json() del objeto Response devuelve una promesa con el cuerpo parseado.

**24. b) 201** — "Created". El 200 es OK genérico; el 201 es concretamente cuando se crea un recurso.

**25. b) 400** — Bad Request. Los 4xx son errores de cliente, los 5xx del servidor.

**26. b) Content-Type** — Indica el tipo de contenido que viaja en el cuerpo (por ejemplo application/json). Accept es lo que el cliente espera recibir.

**27. b) Un pequeño dato almacenado en el navegador del cliente** — Definición de cookie.

**28. b) Un conjunto de datos almacenados en el servidor asociados a un usuario** — La sesión vive en el servidor; la cookie solo guarda el identificador.

**29. b) Un estándar para transmitir información de forma segura como JSON** — JWT es eso, un token firmado en formato JSON.

**30. b) En localStorage o sessionStorage** — Es lo más habitual en el cliente, aunque también se puede guardar en cookies.

**31. a) express-session** — El middleware estándar para sesiones en Express.

**32. a) Linux, Apache, MySQL, PHP** — Las siglas de LAMP, la pila típica donde corre WordPress.

**33. b) Una extensión que añade funcionalidades** — Eso es un plugin. Lo visual lo controla el theme.

**34. b) Definir la apariencia y diseño visual** — El theme es el aspecto; las funcionalidades las ponen los plugins.

**35. b) Panel de administración sin programar** — La gran ventaja de WordPress: gestionas el contenido desde el panel sin tocar código.
