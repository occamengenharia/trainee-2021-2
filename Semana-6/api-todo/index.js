<<<<<<< HEAD
const { response, request } = require("express");
const express = require("express");
=======

const { request } = require('express');
const express = require('express');

>>>>>>> 2401b2df40c238dd8c8957c0875077d47d1b1c2d
const uuid = require("uuid");

const app = express();

<<<<<<< HEAD
var ToDoList = [
    {
        name: "Cortar o Tratorzão"
        ,
        id: uuid.v4()
        ,
        data: new Date()
        ,
        done: false
    },
]

app.use(express.json());

app.get( '/', (request,response)=> {
    console.log('Sucesso')
    return response.json({ok:true})
})

app.get( '/showToDo', (request,response)=> {

    return response.json(ToDoList);

})

app.post('/Adicionar', (request,response)=> {

    const NovaTarefa = request.body.name 
    ToDoList.push({name: NovaTarefa, id: uuid.v4(), data: new Date(),done: false})
    return response.json(ToDoList)

})

app.put('/ConcluirPorId/:id', (request, response)=> {
    const id = request.params.id
    ToDoList.forEach(task => {
        if(task.id === id) {
            task.done = true;
            return response.json(ToDoList)
        }
    })
    response.status(404)
    throw new Error('Id não encontrado')
})

app.delete('/DeletarPrimeira', (request, response) => {
    ToDoList.shift()
    return response.json(ToDoList)
})

app.delete('/DeletarUltima', (request, response) => {
    ToDoList.pop()
    return response.json(ToDoList)
})

app.delete('/DeletarPorId/:id', (request, response) => {
    const id = request.params.id;
    ToDoList.forEach(task => {
        if(task.id === id) {
            ToDoList = ToDoList.filter((task)=> task.id !==id)
            return response.json(ToDoList)
        }
    }) 
    response.status(404)
    throw new Error('Id não encontrado')
})

app.listen(3000, ()=> console.log("o servidor está on na porta 3000") );

=======


var ToDoList = [{id : uuid.v4()  ,name: "lavar cachorro", createdAt : new Date()  , done :false },   ]

app.use(express.json());

app.get('/showToDo',(request,response)=>{
  
  return response.json(ToDoList);
} )

app.post('/post',(request,response)=>{
  const newTask = request.body.task; 

  const todo = {id : uuid.v4()  ,name: newTask, createdAt : new Date()  , done :false } ;
  
  ToDoList.push(todo);
  return response.json(ToDoList);
} )

app.delete('/delete/:id',(request,response)=>{
  var TaskId = request.params.id;

   ToDoList = ToDoList.filter((task)=> task.id !==TaskId);

   return response.json(ToDoList);

  })

  app.put('/put/:id',(request,response)=>{
    var TaskId = request.params.id;
  
     ToDoList.forEach(task =>{
      if(TaskId === task.id)
      
      {
        task.done = true;
      }
    })
  
     return response.json(ToDoList);
  
    })
app.listen(3000, () => console.log('servidor rodando na porta 3000'))
>>>>>>> 2401b2df40c238dd8c8957c0875077d47d1b1c2d
