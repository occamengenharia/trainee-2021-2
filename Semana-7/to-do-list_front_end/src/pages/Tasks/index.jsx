import React, { useEffect, useState } from "react";
import { AiFillPlusCircle } from 'react-icons/ai'
import { HiOutlineTrash } from 'react-icons/hi'
import { Page, Title, Input, Inputcheck, Taskactions } from "./styles";
import api from '../../services/api'
import axios from "axios";


function InputTasks() {
    return (
        <Input>

            <AiFillPlusCircle />
            <input type="text" placeholder="Adicione uma nova tarefa" />
        </Input>
    )
}
function InputTaskscheck({ name, done, handledelete,put}) {
    
    return (
        <Taskactions>
            <HiOutlineTrash onClick={handledelete}/>
            <Inputcheck htmlFor={name}>
                <input type="checkbox" id={name} checked={done === true ? true : undefined} defaultChecked={done} onChange={put }/>
                <span />
                {name}
            </Inputcheck>
        </Taskactions>
    )
}

   
   


function Tasks() {
    const [tasks, setTasks] = useState([])
    const handleGetTasks = () => {
        api.get('/task')
            .then(response => {
                setTasks(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }
    function deletar(id){
    
        api.delete('/task/'+id )
        handleGetTasks()
        
    }
    function put(task){
        api.put('/task/'+task.id,{done: !task.done})
        handleGetTasks()
        
    }
    useEffect(handleGetTasks, [])
    const handleSubmit = async event => {
        event.preventDefault()
        const { value } = event.target.elements[0]
        await api.post('/task', { name: value }).then(() => {
            handleGetTasks()
        }).catch((error) => {
            console.log(error)
        })
    }
    return (
        <Page>
            <Title>TaskDo</Title>
            <form onSubmit={handleSubmit}>
                <InputTasks />
            </form>
            {
                tasks.map(task => (
                    <InputTaskscheck name={task.name} done={task.done} handledelete={()=>{deletar(task.id)}} put={()=>{put(task)}} />
                ))
            }
        </Page>
    )

}

export default Tasks