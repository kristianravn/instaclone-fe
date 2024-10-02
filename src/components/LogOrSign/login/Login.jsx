import React from 'react'
import  {loginFetch}  from "./src/utils/fetch.js";
import "./Login.css"

const Login = () => {
  return (
  <div className='login'>
    <form>
      <h3>Login</h3>
      <div className='login-form'>
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