const { response, request } = require("express");
const express = require("express");
const uuid = require("uuid");

const app = express();

var ToDoList = [
    {
        name: "Cortar a grama"
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
    return response.json('Erro 404 - Id Não encontrado')
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
    return response.json('Erro 404 - Id Não encontrado')
})

app.listen(3000, ()=> console.log("o servidor está on na porta 3000") );

