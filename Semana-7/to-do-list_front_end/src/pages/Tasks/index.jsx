import React, {useEffect, useState} from "react";
import { AiFillPlusCircle } from 'react-icons/ai'
import { HiOutlineTrash } from 'react-icons/hi'
import { Page, Title, Input, Inputcheck, Taskactions } from "./styles";
import api from '../../services/api'


function InputTasks() {
    return (
        <Input>

            <AiFillPlusCircle />
            <input type="text" placeholder="Adicione uma nova tarefa" />
        </Input>
    )
}
function InputTaskscheck({name, done}) {
    return (
        <Taskactions>
            <HiOutlineTrash />
            <Inputcheck htmlFor={name}>
                <input type="checkbox" id={name} defaultChecked = {done}/>
                <span />
                {name}
            </Inputcheck>


        </Taskactions>
    )
}
function Tasks() {
    const [tasks,setTasks] = useState([])
    const handleGetTasks = () =>{
        api.get('/task')
        .then (response=>{
            setTasks(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    useEffect(handleGetTasks,[])
    const handleSubmit = async event => {
        event.preventDefault()
        const { value } = event.target.elements[0]
        await api.post('/task', { name: value }).then(()=>{
            handleSubmit()
        }).catch((error)=>{
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
                tasks.map(task=>(
                    <InputTaskscheck name = {task.name} done={task.done}/>
                ),)
            }
        </Page>
    )
}
export default Tasks