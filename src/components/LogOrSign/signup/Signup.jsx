import React, { useState } from 'react'

import  {loginFetch}  from "./src/utils/fetch.js";

import "./Signup.css"
import e from 'express';

const Signup = ({setLoggedUser, setIsLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  }; 
const handleSubmit = async(e) =>{
  e.preventDefault();
  console.log("signup handleSubmit");
  const data = await SignupFetch(username, email, password);

  if (data.message === "success"){
  setLoggedUser(data);
  setIsLoggedIn(true);
  }
};

  return (

    <div className='signup-outer'>
        <form 
        onSubmit={(e) => handleSubmit(e)}
        >    
          <h3>Signup</h3>
            <div className='Signup-form'>
              
                <input
                onChange={(e)=> handleChange(e,setUsername)}
                type="text"
                placeholder= "Username..."
                />

                <input
                onChange={(e)=> handleChange(e,setEmail)}
                type="text"
                placeholder= "Email..."
                />
            
                <input
                onChange={(e)=> handleChange(e,setPassword)}
                type="text"
                placeholder= "Password..."
                />
            </div>
            <button type="submit">Signup </button>
        </form>
    </div>
  )
}

export default Signup