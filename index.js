import express from "express";
import { readFile, writeFile } from "node:fs/promises";
import tareas from "./tareas.json" with { type: 'json' };

const app = express();
app.use(express.json());

const PORT = 3000;

/* =========================================================
   EJERCICIO 1 - API REST sin persistencia
   ========================================================= */

// Ruta 1: devuelve un mensaje de saludo
app.get("/saludo", (req, res) => {
  res.json({ mensaje: "Hola alumno" });
});

// Ruta 2: devuelve la fecha actual generada por JavaScript
app.get("/fecha", (req, res) => {
  const hoy = new Date();
  res.json({ fecha: hoy.toLocaleDateString("es-ES") });
});

// Ruta 3: devuelve la suma de los parámetros pasados por query (?a=2&b=3)
app.get("/sumar", (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ resultado: a + b });
});

/* =========================================================
   EJERCICIO 2 - CRUD en memoria (array, sin BD)
   ========================================================= */

// Copia de trabajo en memoria a partir de los datos iniciales
let tareasMemoria = [...tareas];

// Leer todas
app.get("/memoria/tareas", (req, res) => {
  res.json(tareasMemoria);
});

// Leer una por id
app.get("/memoria/tareas/:id", (req, res) => {
  const id = Number(req.params.id);
  const tarea = tareasMemoria.find(t => t.id === id);
  if (!tarea) return res.status(404).json({ error: "Tarea no encontrada" });
  res.json(tarea);
});

// Crear
app.post("/memoria/tareas", (req, res) => {
  const { titulo, completada = false } = req.body;
  if (!titulo) return res.status(400).json({ error: "El título es obligatorio" });
  const nuevaId = tareasMemoria.length ? Math.max(...tareasMemoria.map(t => t.id)) + 1 : 1;
  const nueva = { id: nuevaId, titulo, completada };
  tareasMemoria.push(nueva);
  res.status(201).json(nueva);
});

// Actualizar
app.put("/memoria/tareas/:id", (req, res) => {
  const id = Number(req.params.id);
  const tarea = tareasMemoria.find(t => t.id === id);
  if (!tarea) return res.status(404).json({ error: "Tarea no encontrada" });
  const { titulo, completada } = req.body;
  if (titulo !== undefined) tarea.titulo = titulo;
  if (completada !== undefined) tarea.completada = completada;
  res.json(tarea);
});

// Borrar
app.delete("/memoria/tareas/:id", (req, res) => {
  const id = Number(req.params.id);
  const existe = tareasMemoria.some(t => t.id === id);
  if (!existe) return res.status(404).json({ error: "Tarea no encontrada" });
  tareasMemoria = tareasMemoria.filter(t => t.id !== id);
  res.json({ mensaje: "Tarea eliminada" });
});

/* =========================================================
   EJERCICIO 3 - Persistencia simple en fichero .json
   ========================================================= */

const ARCHIVO = "./tareas.json";

async function leerTareas() {
  const datos = await readFile(ARCHIVO, "utf-8");
  return JSON.parse(datos);
}

async function guardarTareas(lista) {
  await writeFile(ARCHIVO, JSON.stringify(lista, null, 2), "utf-8");
}

// Listar leyendo del fichero
app.get("/tareas", async (req, res) => {
  const lista = await leerTareas();
  res.json(lista);
});

// Crear y guardar en el fichero
app.post("/tareas", async (req, res) => {
  const { titulo, completada = false } = req.body;
  if (!titulo) return res.status(400).json({ error: "El título es obligatorio" });
  const lista = await leerTareas();
  const nuevaId = lista.length ? Math.max(...lista.map(t => t.id)) + 1 : 1;
  const nueva = { id: nuevaId, titulo, completada };
  lista.push(nueva);
  await guardarTareas(lista);
  res.status(201).json(nueva);
});

// Eliminar y guardar en el fichero
app.delete("/tareas/:id", async (req, res) => {
  const id = Number(req.params.id);
  const lista = await leerTareas();
  const filtradas = lista.filter(t => t.id !== id);
  if (filtradas.length === lista.length) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }
  await guardarTareas(filtradas);
  res.json({ mensaje: "Tarea eliminada" });
});

/* =========================================================
   EJERCICIO 4 - Consumir un servicio externo desde Node
   ========================================================= */

// Usa fetch (nativo en Node 18+) para consumir una API pública de terceros
app.get("/externo/tareas", async (req, res) => {
  try {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    if (!respuesta.ok) throw new Error("Error al consultar el servicio externo");
    const datos = await respuesta.json();
    res.json(datos);
  } catch (error) {
    res.status(502).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
