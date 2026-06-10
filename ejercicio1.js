// EJERCICIO 1 - API REST sin persistencia
// Endpoints simples que no guardan nada en ningún sitio.

import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

// GET /saludo -> devuelve un mensaje fijo
app.get("/saludo", (req, res) => {
  res.json({ mensaje: "Hola alumno" });
});

// GET /fecha -> la fecha actual que genera JavaScript
app.get("/fecha", (req, res) => {
  const ahora = new Date();
  res.json({ fecha: ahora.toLocaleString("es-ES") });
});

// GET /sumar?a=2&b=3 -> suma los dos parámetros de la query
app.get("/sumar", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ resultado: a + b });
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
