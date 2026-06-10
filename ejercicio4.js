// EJERCICIO 4 - Consumir un servicio externo desde Node
// Llamamos a la API pública agify.io, que estima la edad a partir
// de un nombre, y devolvemos una respuesta JSON propia.

import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

// GET /edad?name=Juan -> { "nombre": "Juan", "edad_estimada": 52 }
app.get("/edad", async (req, res) => {
  const name = req.query.name;

  try {
    const respuesta = await fetch(`https://api.agify.io?name=${name}`);
    const datos = await respuesta.json();

    // Transformamos la respuesta de agify a nuestro propio formato
    res.json({
      nombre: datos.name,
      edad_estimada: datos.age,
    });
  } catch (error) {
    res.status(500).json({ error: "No se pudo consultar el servicio externo" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
