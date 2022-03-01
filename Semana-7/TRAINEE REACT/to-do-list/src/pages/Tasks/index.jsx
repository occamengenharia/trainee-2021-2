import React, {useEffect, useState} from "react";
import { Page, Title, FieldInput, FieldInputCheck, TaskExec, Container } from "./styles";
import {HiOutlineTrash} from 'react-icons/hi';
import {AiFillPlusCircle} from 'react-icons/ai';
import api from '../../services/api';

function InputTask(){
    return (
        <FieldInput>
            <AiFillPlusCircle />
            <input type= "text" placeholder="Add new task" />    
        </FieldInput>
    )
}

function InputCheck({name, done, id, onUpdate, TaskDelete, onChange}){
    const handleCheckTask = () => {
        api.put(`/task/${id}`, {done: !done}).then(() => {
            onUpdate()
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <TaskExec>
        <HiOutlineTrash onClick={TaskDelete}/>
        <FieldInputCheck htmlFor={name}>
            <input 
                type= "checkbox" 
                id={name} 
                defaultChecked={done} 
                checked={done === true ? true: undefined} 
                onChange={onChange}/> 
            <span />
            {name}  
        </FieldInputCheck>
        </TaskExec>
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

    const TaskDelete = async(id) =>{
        await api.delete('/task/'+id)
        handleGetTasks()
    }

    const TaskDone = async (id, done)=>{
        await api.put('/task/'+id, {done: done})
        handleGetTasks()

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
            <Container>

            <form onSubmit={handleSubmit}>
                <InputTask />
            </form>
            {
                tasks.map(task => (

                    <InputCheck {...task} 
                    TaskDelete={()=>{TaskDelete(task.id)}}
                    onUpdate={handleGetTasks}
                    onChange={()=> {TaskDone(task.id, task.done)}}
                    
                    />
                ))
            }
            </Container>
        </Page>
    )

}

export default Tasks