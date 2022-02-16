import React from "react";
import {AiFillPlusCircle} from 'react-icons/ai'
import { Page,Title,Input, Inputcheck } from "./styles";

function InputTasks(){
    return(
        <Input>
        <AiFillPlusCircle/>
        <input type="text" placeholder="Adicione uma nova tarefa"/>
        </Input>
    )
}
function InputTaskscheck(){
    return(
        <Inputcheck htmlFor="check">
        <input type="checkbox" id="check"/>
        <span/>
        </Inputcheck>
    )
}
function tasks() {

    return (
        <Page>
            <Title>TaskDo</Title>
            <InputTasks/>
            <InputTaskscheck/>
        </Page>
    )
}
export default tasks