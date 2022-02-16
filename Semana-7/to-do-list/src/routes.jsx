import React from "react"
import { Route, BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './assets/globalStyles'
import Home from './pages/Home'
import Tasks from './pages/Tasks'


function Routes() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route exact path="/" component={Home} />
      <Route path="/tasks" component={Tasks} />
    </BrowserRouter>
  )
}
export default Routes
