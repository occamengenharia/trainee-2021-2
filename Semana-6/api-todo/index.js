
const { request } = require('express');
const express = require('express');

const uuid = require("uuid");

const app = express();



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
