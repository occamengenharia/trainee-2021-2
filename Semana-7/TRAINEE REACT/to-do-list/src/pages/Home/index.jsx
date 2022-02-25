import React from "react";
import {ButtonLink, Page, Subtitle, Title} from './styles'


function Home() {
    return (
        <Page>
            <Title>TaskDo</Title>
            <Subtitle>Manage You Task Checklist Easily</Subtitle>
            <ButtonLink to = "/tasks" >Let's Start</ButtonLink>
        </Page>
    )

}

export default Home