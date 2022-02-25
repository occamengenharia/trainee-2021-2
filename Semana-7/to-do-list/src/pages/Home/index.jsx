import React from "react";
import {Page, Title, Texto, ButtonLink} from './styles';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <Page>
            <Title>TaskDo</Title>
            <Texto>Manage You Task Checklist Easily</Texto>
            <ButtonLink to="/tasks">Lets Start</ButtonLink>
        </Page>
    )
}

export default Home