// Importo Express
const express = require("express");
const crypto = require('crypto');

// Instanciamos Express
const app = express();

// Para que el servidor interprete los JSON
app.use(express.json());


const taskList = []

const foldersList = [ 
  {  
    id: 1,
    name: "Tareas",
  },
  {
    id: 2,
    name: "Trabajo",
  }
]


// Definimos Endpoints
app.get("/", (req, res) => {
  console.log("El usuario ha hecho un petición al endpoint /");

  res.send("Petición correcta. Has llamado a /, que es la raíz");
});

app.get("/tasks", (req, res) => {
  console.log("El usuario ha hecho un petición al endpoint /tasks");

  console.log("QUERY", req.query);
  if (req.query.size) {
    const filteredTaskList = taskList.filter((task) => task.size === req.query.size);
    res.json(filteredTaskList);
    return;
  }

  res.json(taskList);
});

app.post("/tasks", (req, res) => {
  console.log("El usuario ha hecho un petición al endpoint /tasks");

  console.log("BODY", req.body);

  // esta es la forma pro
  // const { name, description, age, price } = req.body;
  // esta es la forma no pro
  const name = req.body.name;
  const size = req.body.size;

  const newTask = { 
    id: crypto.randomUUID(), 
    name,
    size,
    done: false 
  };

  taskList.push(newTask);

  res.json({
    message: `Tarea con name: ${name} registrada correctamente`,
    payload: newTask,
  });
});

app.delete("/tasks/:iddelatareaaborrar", (req, res) => {
  const id = req.params.iddelatareaaborrar;

  // ahora nos toca filtrar la lista de tareas quitando la que coincida con el id que nos han pasado
  // taskList = taskList.filter((task) => task.id !== id);
  const taskIndex = taskList.findIndex((task) => task.id === id);
  if (taskIndex === -1) {
    res.status(404).json({
      message: `No se ha encontrado ninguna tarea con id: ${id}`,
    });
    return;
  }
  taskList.splice(taskIndex, 1);

  res.json({
    message: `Tarea con id: ${id} ha sido borrada correctamente`,
  });
});






app.get("/folders", (req, res) => {
  console.log("El usuario ha hecho un petición al endpoint /folders");

  res.json(foldersList);
});


app.post("/folders", (req, res) => {
  console.log("El usuario ha hecho un petición al endpoint /folders");

  console.log("BODY", req.body);

  // esta es la forma pro
  // const { name, description, age, price } = req.body;
  // esta es la forma no pro
  const name = req.body.name;

  const newFolder = { id: foldersList.length + 1, name };

  foldersList.push(newFolder);

  res.json({
    message: `Carpeta con name: ${name} registrada correctamente`,
    payload: newFolder,
  });
});

// Arranco el servidor
app.listen(3002, () => {
  console.log("Servidor rulando!");
});
