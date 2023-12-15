import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import LoginPanel from './home/LoginPanel/LoginPanel'
import { RegistrationPanel } from './home/RegistrationPanel.js/index.js'
import Home from './home/Home'
import Calendar from './components/Calendar'
import ResetPasswordPanel from './home/ResetPassword/ResetPasswordPanel'

function App() {

  return (
    <Router>
      <Routes>
      <Route exact path={'/'} element = {<Home/>}/>
      <Route exact path={'/login'} element = {<LoginPanel/>}/>
      <Route exact path={'/registration'} element = {<RegistrationPanel/>}/>
      <Route exact path = {'/resetPassword'} element = {<ResetPasswordPanel/>}/>
      <Route exact path = {'/calendar'} element = {<Calendar/>} />
      </Routes>
      </Router>
    )
  }

  export default App;




