import React from 'react';
import { Page, Title, Subtitle, Button} from './styles.js'

function Home(){
    return(
        <Page>
            <Title>TaskDo</Title>
            <Subtitle>Manage Your Task Checklist Easily</Subtitle>
            <Button to="/tasks">Let's Start</Button>
        </Page>
        
    )
}

export default Home