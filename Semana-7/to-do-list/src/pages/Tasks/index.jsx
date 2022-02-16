import React from "react";
import { FieldInput, FieldInputCheck, Page, Title } from "./styles";
import {AiFillPlusCircle} from 'react-icons/ai'

function InputTask(){
    return(
        <FieldInput>
            <AiFillPlusCircle />
            <input type="text" placeholder="Add new task"/>
        </FieldInput>
    )
}

function InputCheck(){
    return(
        <FieldInputCheck htmlFor="check">
            <input type="checkbox" id="check"/>
            <span />
            testee
        </FieldInputCheck>
    )
}

function Tasks(){
    return (
        <Page>
            <Title>TaskDo</Title>
            <InputTask />
            <InputCheck />
        </Page>
    )
}

export default Tasks