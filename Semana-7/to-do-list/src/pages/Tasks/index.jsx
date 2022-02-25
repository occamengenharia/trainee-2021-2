import React, {useEffect, useState}from "react";
import {FieldInput, FieldInputCheck, Page, Title, Container } from './styles';
import {AiFillPlusCircle} from 'react-icons/ai';
import {HiOutlineTrash} from 'react-icons/hi';
import api from '../../services/api';


function InputTask() {
    return (
        <FieldInput >
            <AiFillPlusCircle />
            <input type="text" placeholder="Add new task"/>
        </FieldInput>
    )   
}

function InputCheck({name, done, onChange, handleDelete}) {
 return (

 <FieldInputCheck >
    <HiOutlineTrash onClick={handleDelete}/>
    <label htlmFor={name}>
    <input type="checkbox" 
    id={name} 
    defaultChecked={done} 
    checked={done === true ? true : undefined} 
    onChange={onChange}/>
    <span />
    </label>
    {name}
 </FieldInputCheck>
 
 )
}

function Tasks() {
    const [tasks,setTasks] = useState([])

    const handleGetTasks = () => { 
        api
            .get('/task')
            .then(response => {
                setTasks(response.data);
            }).catch(error =>{
                console.log(error);
            })
    }
    useEffect(handleGetTasks,[])

    const handleSubmit = async event => {
        event.preventDefault();
        const { value } = event.target.elements[0];
        await api
        .post('/task', {name: value})
        .then(()=>{
            handleGetTasks();
        }).catch(error => {
            console.log(error);
        })       
    } 

    const handleDone = async (id, done) => {
        await api.put('/task/'+id, {done: done})
        handleGetTasks();
    }

    const handleDelete = async (id) => { 
        await api.delete('/task/'+id)
        handleGetTasks();
    }

    return (
        <Page>
            <Title>TaskDo</Title>
            <Container>
            <form onSubmit={handleSubmit}>
                <InputTask />
            </form>
            {
                tasks.map(task=>(
                    <InputCheck name={task.name} done={task.done} 
                        handleDelete={()=> {handleDelete(task.id)} } 
                        onChange={() => {handleDone(task.id,task.done)} }/>
                ))
            }
            </Container>
        </Page>
    )
}

export default Tasks