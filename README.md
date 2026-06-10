# Prueba práctica - Desarrollo de APIs con Node.js, Express y MySQL

Solución de la prueba. Hay **un archivo por cada ejercicio**.

## Puesta en marcha

```bash
npm install
```

Cada ejercicio es un servidor independiente que escucha en `http://localhost:3000`,
así que se ejecuta **uno cada vez**:

```bash
npm run ej1   # node ejercicio1.js
npm run ej2   # node ejercicio2.js
npm run ej3   # node ejercicio3.js
npm run ej4   # node ejercicio4.js
```

Para probar los endpoints está el fichero `peticiones.http` (extensión
*REST Client* de VS Code), o se puede usar `curl`.

## Ejercicios

### Ejercicio 1 — API REST sin persistencia (`ejercicio1.js`)
- `GET /saludo` → `{ "mensaje": "Hola alumno" }`
- `GET /fecha` → la fecha actual generada por JavaScript
- `GET /sumar?a=2&b=3` → la suma de los parámetros

### Ejercicio 2 — CRUD en memoria (`ejercicio2.js`)
Las tareas viven en un array (sin base de datos). El id es el índice del array.
- `GET /tareas` → lista todas
- `POST /tareas` → body `{ "titulo": "Estudiar JS" }`
- `DELETE /tareas/:id`

### Ejercicio 3 — Persistencia con fichero JSON (`ejercicio3.js`)
Lo mismo pero guardando en `tareas.json`. Si el fichero no existe, devuelve `[]`.
- `GET /tareas-db`
- `POST /tareas-db`
- `DELETE /tareas-db/:id`

### Ejercicio 4 — Consumir un servicio externo (`ejercicio4.js`)
Consume la API pública `agify.io` con `fetch` y devuelve un JSON propio.
- `GET /edad?name=Juan` → `{ "nombre": "Juan", "edad_estimada": 52 }`

### Ejercicio 5 — Consultas SQL (`ejercicio5.sql`)
Las 20 consultas sobre la base de datos `tienda`. El fichero `db.sql` crea la
base de datos de partida:

```bash
mysql -u root -p < db.sql
mysql -u root -p < ejercicio5.sql
```
