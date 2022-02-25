import React from "react";
import reactRouterDom from "react-router-dom";
import { ButtonLink, Page, SubTitle, Title } from "./styles";
import {Link} from "react-router-dom";


function Home(){
    return (
        <Page>
            <Title>TaskDo</Title>
            <SubTitle>Manage You Task Checklist Easily</SubTitle>
            <ButtonLink to="/tasks" >Lets Start</ButtonLink>

        </Page>
    )
}

export default Home