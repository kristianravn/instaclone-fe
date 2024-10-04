import React from 'react'
import Login from './login/Login'
import Signup from './signup/Signup'
import './LogOrSign.css'

export const Test = () => {
  return (
    <div>Test</div>
  )
}


const LogOrSign = ({setLoggedUser,setIsLoggedIn }) => {
  return (
      <div className="logOrSign-container">
        <Signup setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn}/>
        <Test/>
        <Login setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn}/> 
    </div>
  )
}

export default LogOrSign