import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks'
import { GlobalStyles } from './assets/globalStyles.js'

function Routes(){
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Route exact path="/" component={Home}/>
            <Route path="/tasks" component={Tasks}/>
            <Route />
        </BrowserRouter>
    )
}

export default Routes;