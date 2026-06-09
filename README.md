# Examen de programación - Teoría y práctica

Resolución completa del examen. La parte teórica está en `teoria.md` y la parte
práctica es la API de tareas hecha con Node.js y Express, más las consultas SQL
del ejercicio 5.

## Puesta en marcha

```bash
npm install
npm start
```

El servidor queda activo en `http://localhost:3000`.

## Ejercicios

### Ejercicio 1 - API REST sin persistencia
- `GET /saludo` → `{ "mensaje": "Hola alumno" }`
- `GET /fecha` → devuelve la fecha actual
- `GET /sumar?a=2&b=3` → devuelve la suma de los parámetros

### Ejercicio 2 - CRUD en memoria
Operaciones sobre un array en memoria (sin base de datos):
- `GET /memoria/tareas`
- `GET /memoria/tareas/:id`
- `POST /memoria/tareas`
- `PUT /memoria/tareas/:id`
- `DELETE /memoria/tareas/:id`

### Ejercicio 3 - Persistencia en fichero .json
Las tareas se leen y se guardan en `tareas.json`:
- `GET /tareas`
- `POST /tareas`
- `DELETE /tareas/:id`

### Ejercicio 4 - Consumir un servicio externo
- `GET /externo/tareas` → consume una API pública de terceros con `fetch`.

### Ejercicio 5 - Consultas a base de datos
- `db.sql` → base de datos de partida (`tienda`).
- `consultas.sql` → las 20 consultas resueltas.
