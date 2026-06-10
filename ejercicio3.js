// EJERCICIO 3 - Persistencia simple con un fichero JSON
// Igual que el ejercicio 2 pero ahora las tareas se leen y se guardan
// en el fichero tareas.json. El id sigue siendo el índice del array.

import express from "express";
import fs from "fs/promises";

const app = express();
app.use(express.json());

const PORT = 3000;
const FILE = "./tareas.json";

// Lee el fichero y devuelve el array. Si el fichero todavía no existe,
// no se rompe: simplemente devolvemos una lista vacía.
async function leerTareas() {
  try {
    const datos = await fs.readFile(FILE, "utf-8");
    return JSON.parse(datos);
  } catch (error) {
    return [];
  }
}

async function guardarTareas(tareas) {
  await fs.writeFile(FILE, JSON.stringify(tareas, null, 2));
}

// GET /tareas-db -> lee el fichero y lo devuelve como JSON
app.get("/tareas-db", async (req, res) => {
  const tareas = await leerTareas();
  res.json(tareas);
});

// POST /tareas-db -> añade una tarea y la guarda en el fichero
app.post("/tareas-db", async (req, res) => {
  const tareas = await leerTareas();
  const nueva = { titulo: req.body.titulo };
  tareas.push(nueva);
  await guardarTareas(tareas);
  res.status(201).json(nueva);
});

// DELETE /tareas-db/:id -> borra por índice y vuelve a guardar el fichero
app.delete("/tareas-db/:id", async (req, res) => {
  const tareas = await leerTareas();
  const id = Number(req.params.id);

  if (id < 0 || id >= tareas.length) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  const eliminada = tareas.splice(id, 1)[0];
  await guardarTareas(tareas);
  res.json(eliminada);
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
