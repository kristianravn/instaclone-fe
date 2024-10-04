import React from 'react'
import Login from './login/Login'
import Signup from './signup/Signup'
import './LogOrSign.css'

const LogOrSign = ({setLoggedUser,setIsLoggedIn, setApprovedUser}) => {
  return (
      <div className="logOrSign-container">
        <Login setApprovedUser={setApprovedUser}/> 
        <Signup setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn}/>
    </div>
  )
}

export default LogOrSign