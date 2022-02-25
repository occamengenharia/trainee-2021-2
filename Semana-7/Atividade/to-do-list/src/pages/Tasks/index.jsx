import React, { useEffect, useState } from 'react';
import { Title, Page, InputTaskField, InputCheckField } from './styles.js'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import api from '../../services/api.js'

function InputTask(){
    return(
        <InputTaskField>
            <AiOutlinePlusCircle/>
            <input type="text" placeholder="Add a new task" />
        </InputTaskField>
    ) 
}

function InputCheck({ name, done, id, onUpdate }){
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
            {/* Erro está aqui na tag <button> */}
            <button type="button"><BsTrash/></button>
            <InputCheckField htmlFor={id}> 
            <input
                type="checkbox" 
                id={id} 
                placeholder="Add a new task" 
                defaultChecked={done} 
                checked={done ? true : undefined}
                onChange={handleCheckTask}
            />
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

    return(
        <Page>
            <Title>TaskDo</Title>
            <form onSubmit={handleSubmit}>
            <InputTask />
            </form>
            {
                tasks.map(task=>(
                    <InputCheck {...task} onUpdate={handleGetTasks}/>
                ))
            }
        </Page>
    )
}

export default Task