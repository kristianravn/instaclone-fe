import React, { useState } from 'react'
import "./Login.css"

const Login = () => {


  return (
  <div className='login'>
    <form className='login-form'>
      <h3>Login</h3>
      <div>
              <input
                type="text"
                placeholder="Username..."
              />
              <input
                type="text"
                placeholder="Password..."
              />
     </div>
            <button type="submit">Login</button>
          </form>
        </div>  
  )
  
}

export default Login