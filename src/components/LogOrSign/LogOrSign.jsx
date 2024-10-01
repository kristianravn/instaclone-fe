import React from 'react'
import Login from './login/Login'
import Signup from './signup/Signup'
import './LogOrSign.css'

const LogOrSign = () => {
  return (
    <div>
      <div className="logOrSign-container">
        <Login /> 
        <Signup />
    </div>
    </div>
  )
}

export default LogOrSign