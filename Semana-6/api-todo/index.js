const express = require("express");
const uuid = require("uuid");
const app = express();

const todos = [{id: uuid.v4(), name: "fazer pão de batata", date: new Date(), done: false}];

app.use(express.json());

app.post("/todos", (request, response) => {
  const todo = request.body;

  todos.push(todo);

  return response.json(todo);
});

app.get("/todos", (request, response) => {
  return response.json(todos);
});

app.get("/todos/:id", (request, response) => {
  const todoId = request.params.id;

  const todo = todos.find(t => t.id===todoId);

  if(!todo) {
    return response.status(404).json({error: "todo not found"});
  }
  
  return response.json(todo);
});

app.delete("/todos/:id", (request, response) => {
  const todoId = request.params.id;

  const todo = todos.find(t => t.id===todoId);

  if(!todo) {
    return response.status(404).json({error: "todo not found"});
  } 

  todos = todos.filter(t=> t.id !==todoId);

  return response.status(204).send();
});

app.put("/todos/:id", (request, response) => {
  const todoId = request.params.id;

  const indexTodo = todos.findIndex(t => t.id===todoId);

  if(indexTodo<0) {
    return response.status(404).json({error: "todo not found"});
  } 

  const partialTodo = request.body;

  const updatedTodo = {...todos[indexTodo], partialTodo};

  todos[indexTodo] = updatedTodo;
  
  return response.json(updatedTodo);
});

app.listen(3333, () => console.log("server running on http://localhost:3333"));