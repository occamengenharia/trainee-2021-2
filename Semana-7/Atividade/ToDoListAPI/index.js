const express = require('express');
const cors = require('cors')
const uuid = require("uuid");

const app = express();


app.use(express.json());


app.use(cors());


var ToDoList = [{ id: uuid.v4(), name: "lavar cachorro", createdAt: new Date(), done: false },]



app.get('/task', (request, response) => {

  return response.json(ToDoList);
})



app.post('/task', (request, response) => {
  const newTask = request.body.name;

  const todo = { id: uuid.v4(), name: newTask, createdAt: new Date(), done: false };

  ToDoList.push(todo);
  return response.json(ToDoList);
})






app.delete('/task/:id', (request, response) => {
  var TaskId = request.params.id;

  function find(element, index, array) {
    if (TaskId === element.id) {
      element.done = true;
      return true;
    }
  }

  let Index = ToDoList.findIndex(find);

  if (Index === -1)
    throw "task id not found";

  else
    ToDoList = ToDoList.filter((task) => task.id !== TaskId);
  return response.json(ToDoList);

})


app.put('/task/:id', (request, response) => {

  var TaskId = request.params.id;

  function find(element, index, array) {
    if (TaskId === element.id) {
      element.done = true;
      return true;
    }
  }

  let Index = ToDoList.findIndex(find);

  if (Index === -1)
    throw "task id not found";

  else
    return response.json(ToDoList);

})
app.listen(3001, () => console.log('servidor rodando na porta 3001'))
