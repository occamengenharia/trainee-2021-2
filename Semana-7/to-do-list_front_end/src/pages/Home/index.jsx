import React from "react";
import {Title,Page,SubTitle,Button} from "./style"

function Home(){

    return(
        <Page>
            <Title>TaskDo</Title>
            <SubTitle>Manage You Task Checklist Easily</SubTitle>
            <Button to="/Tasks">Lets start</Button>
            
        </Page>
    )
}
export default Home