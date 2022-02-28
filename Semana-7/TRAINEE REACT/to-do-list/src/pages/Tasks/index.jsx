import React, {useEffect, useState} from "react";
import { Page, Title, FieldInput, FieldInputCheck } from "./styles";
import {AiFillPlusCircle} from 'react-icons/ai'
import api from '../../services/api'

function InputTask(){
    return (
        <FieldInput>
            <AiFillPlusCircle />
            <input type= "text" placeholder="Add new task" />    
        </FieldInput>
    )
}

function InputCheck({name, done, id, onUpdate}){
    const handleCheckTask = () => {
        api.put(`/task/${id}`, {done: !done}).then(() => {
            onUpdate()
        }) .catch(error => {
            console.log(error)
        })
    }
    return (
        <FieldInputCheck htmlFor={name}>
            <input type= "checkbox" id={name} defaultChecked={done} checked={done === true ? true: undefined} onChange={handleCheckTask}/> 
            <span />
            {name}  
        </FieldInputCheck>
    )
}



function Tasks() {
    const [tasks, setTasks] = useState([])
    const handleGetTasks = () => {
        api.get('/task').then(response => {
            setTasks(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
    useEffect(handleGetTasks,[])
    const handleSubmit = async event => {
        event.preventDefault()
        const {value} = event.target.elements[0]
        await api.post('/task', {name: value}).then(() =>{
            handleGetTasks()
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <Page>
            <Title>TaskDo</Title>
            <form onSubmit={handleSubmit}>
                <InputTask />
            </form>
            {
                tasks.map(task => (

                    <InputCheck {...task} onUpdate={handleGetTasks}/>
                ))
            }
        </Page>
    )

}

export default Tasks