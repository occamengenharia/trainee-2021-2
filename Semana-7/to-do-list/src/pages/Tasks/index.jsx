import React, { useState, useEffect } from "react";
import { Conteiner, FieldInput, InputLabel, FieldInputCheck, Page, Title } from "./styles";
import {AiFillPlusCircle} from 'react-icons/ai'
import {HiOutlineTrash} from 'react-icons/hi'
import api from '../../services/api'


function InputTask(){
    return(
        <FieldInput>
            <AiFillPlusCircle />
            <input type="text" placeholder="Add new task"/>
        </FieldInput>
    )
}


function InputCheck({ name, done, id, handleUpdate }){

    const handleCheckTask = () => {
        api
        .put(`/task/${id}`, { done: !done })
        .then(()=>{
            handleUpdate()
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handleDeleteTask = () => {
        api
        .delete(`/task/${id}`, {  })
        .then(()=>{
            handleUpdate()
        })
        .catch(error=>{
            console.log(error);
        })
    }

    return(
        <InputLabel>
            <HiOutlineTrash onClick={(handleDeleteTask)}/>
            <FieldInputCheck htmlFor={id}>
                <input 
                type="checkbox" 
                id={id} 
                defaultChecked={done} 
                checked={done ? true : undefined}
                onChange={ handleCheckTask }
                />
                <span />
                {name}
            </FieldInputCheck>
        </InputLabel>

    )
}




function Tasks(){
    const [tasks, setTasks] = useState([])

    const handleGetTasks = () => {
        api
        .get('/task')
        .then(response=>{
            setTasks(response.data)
        })
        .catch(error=>{
            console.log(error);
        })
    } 

    useEffect(handleGetTasks, []);

    const handleSubmit = async event => {
        
        event.preventDefault()
        const { value } = event.target.elements[0]
        await api
        .post('/task', { name: value })
        .then(()=>{
            handleGetTasks()
        })
        .catch(error=>{
            console.log(error);
        })
        
    }



    return (
        <Page>
            <Title>TaskDo</Title>
            <Conteiner>
                <form onSubmit={handleSubmit}>
                    <InputTask />
                </form>
                {
                    tasks.map(task=>(
                        <InputCheck {...task} handleUpdate={handleGetTasks}/>
                    ))
                }
            </Conteiner>
        </Page>
    )
}

export default Tasks