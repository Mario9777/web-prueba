// EJERCICIO 2 - CRUD en memoria (sin base de datos)
// Las tareas se guardan en un array. El id de cada tarea es su posición
// dentro del array (índice), tal y como pide el enunciado.

import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

let tareas = [];

// GET /tareas -> lista todas las tareas
app.get("/tareas", (req, res) => {
  res.json(tareas);
});

// POST /tareas -> añade una tarea nueva. body: { "titulo": "Estudiar JS" }
app.post("/tareas", (req, res) => {
  const nueva = { titulo: req.body.titulo };
  tareas.push(nueva);
  res.status(201).json(nueva);
});

// DELETE /tareas/:id -> borra la tarea cuyo índice coincide con el id
app.delete("/tareas/:id", (req, res) => {
  const id = Number(req.params.id);

  if (id < 0 || id >= tareas.length) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  const eliminada = tareas.splice(id, 1)[0];
  res.json(eliminada);
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
