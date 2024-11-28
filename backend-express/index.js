// Importo Express
const express = require("express");

// Instanciamos Express
const app = express();

// Para que el servidor interprete los JSON
app.use(express.json());

// Definimos Endpoints
app.get("/", (req, res) => {
  console.log("El usuario ha hecho un petición al endpoint /");

  res.send("Petición correcta. Has llamado a /, que es la raíz");
});

app.post("/register", (req, res) => {
  console.log("El usuario ha hecho un petición al endpoint /register");

  console.log("BODY", req.body);
  const { name, age, city } = req.body;
  // const name = req.body.name
  // const age = req.body.age

  // res.send(`Usuario ${name} registrado correctamente`);
  res.json({
    success: true,
    message: `Usuario ${name} registrado correctamente`,
  });
});

// Arranco el servidor
app.listen(3002, () => {
  console.log("Servidor rulando!");
});
