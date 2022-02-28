import React, { useEffect, useState } from 'react';
import { Title, Page, InputTaskField, InputCheckField, InputDeleteBtn } from './styles.js'
import { AiOutlinePlusCircle } from 'react-icons/ai'
// import { BsTrash } from 'react-icons/bs'
import { BiTrash } from "react-icons/bi";
import api from '../../services/api.js'

function InputTask(){
    return(
        <InputTaskField>
            <AiOutlinePlusCircle/>
            <input type="text" placeholder="Add a new task" />
        </InputTaskField>
    ) 
}

function InputCheck({ name, done, id, onUpdate, handleDeleteTask }){
    const handleCheckTask = ()=>{
        api.put(`/task/${id}`, {done: !done})
        .then(()=> {
            onUpdate()
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return(
        <div>
            <InputDeleteBtn onClick={handleDeleteTask}>
                <BiTrash/>
            </InputDeleteBtn>
            <InputCheckField htmlFor={id}> 
            <input type="checkbox" id={id} placeholder="Add a new task" checked={done ? true : undefined} onChange={handleCheckTask}/>{/* defaultChecked={done} */}
            <span/>
            { name }
            </InputCheckField>    
        </div>
        
    )
}

function Task(){
    const [tasks, setTasks] = useState([])

    const handleGetTasks = () => {
        api.get('/task')
        .then(response=>{
            setTasks(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    useEffect(handleGetTasks, [])

    const handleSubmit = async event => {
        event.preventDefault()
        const { value } = event.target.elements[0]
        await api.post('/task', {name: value}).then(
            ()=>{
                handleGetTasks()
            }).catch(error=>{
                console.log(error)
            })
    }

    const handleDeleteTask = async (id) => { 
        await api.delete(`/task/${id}`)
        handleGetTasks();
    }

    return(
        <Page>
            <Title>TaskDo</Title>
            <form onSubmit={handleSubmit}>
                <InputTask />
            </form>
            {
                tasks.map(task=>(
                    <InputCheck {...task} onUpdate={handleGetTasks} handleDeleteTask={()=>{handleDeleteTask(task.id)}}
                    />
                ))
            }
        </Page>
    )
}



export default Task