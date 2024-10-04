import React, { useState } from 'react'

import  {loginFetch}  from "../../../utils/fetch";

import "./Login.css"

const Login = ({setApprovedUser}) => {
  const [username, setUsername]= useState("");
  const [userPassword, setUserPassword]= useState("");  
  
  const handleChange = (e, setter) => {
    setter(e.target.value);
    };
  const handleSubmit = async(e) =>{  e.preventDefault();
    console.log("login handleSubmit");
    const data = loginFetch(username,userPassword);
  
    if (data.message==="success"){
    setUsername(username.data)
    setUserPassword(userPassword.data)
    setApprovedUser(true)
    };
    
  return (
  <div className='login'>
    <form 
    onSubmit={(e)=> handleSubmit(e)}
    className='login-form'>
      <h3>Login</h3>
      <div>
              <input
              onChange={(e)=> handleChange(e,setUsername)}
                type="text"
                placeholder="Username..."
              />
              <input
              onChange={(e)=> handleChange(e,setUserPassword)}
                type="text"
                placeholder="Password..."
              />
          </div>
            <button type="submit">Login</button>
          </form>
        </div>  
  );
};
};
export default Login; 