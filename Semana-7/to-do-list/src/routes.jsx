import React from "react";
import {Route,BrowserRouter} from 'react-router-dom'
import { GlobalStyle } from "./assets/globalstyles";
import Home from "./pages/Home";
import tasks from "./pages/Tasks";
function Routes(){
    return (
        <BrowserRouter>
        <GlobalStyle/> 
        <Route exact path="/" component = {Home}/>
        <Route path="/tasks" component = {tasks}/>

        </BrowserRouter>
    )
}
export default Routes