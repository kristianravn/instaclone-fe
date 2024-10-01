import React from 'react'
import Login from './login/Login'
import Signup from './signup/Signup'
import './LogOrSign.css'

const LogOrSign = () => {
  return (
      <div className="logOrSign-container">
        <Login /> 
        <Signup />
    </div>
  )
}

export default LogOrSign