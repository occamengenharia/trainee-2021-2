const { response } = require("express");
const express = require("express");
const uuid = require("uuid");
const app = express();
var toDOlist = [
  { name: "fazer um cafe", id: uuid.v4(), data: new Date(), done: false },
];
app.use(express.json());
app.get("/", (request, response) => {
  return response.json(toDOlist);
});

app.post("/post", (request, response) => {
  const newtask = request.body.task;
  toDOlist.push({
    name: newtask,
    id: uuid.v4(),
    data: new Date(),
    done: false,
  });

  return response.json(toDOlist);
});

app.put("/put/:id", (request, response) => {
  const id = request.params.id;
  const done = request.body.done;
  const encontrado = toDOlist.find(function (element) {
    return element.id == id;
  });
  if (!encontrado) {
    response.status(404);
    throw new Error("não encontrado");
  }
  const index = toDOlist.indexOf(encontrado);

  toDOlist[index] = {
    ...toDOlist[index],
    done: done,
  };
  return response.json(toDOlist);
});
app.delete("/delete/:id", (request, response) => {
  const id = request.params.id;
  const encontrado = toDOlist.find(function (element) {
    return element.id !== id;
  });
  if (!encontrado) {
    response.status(404);
    throw new Error("não encontrado");
  }
  const index = toDOlist.indexOf(encontrado);
  toDOlist.splice(index, 1);
  return response.json(toDOlist);
});

app.listen(3000, () => {
  console.log("servidor local rodando");
});
