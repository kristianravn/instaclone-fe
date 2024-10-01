import React from 'react'
import "./Signup.css"

const Signup = () => {
  return (

    <div className='signup-outer'>
        <form>
            <h3>Signup</h3>
            <div className='Signup-form'>
                <input
                type="text"
                placeholder= "Username..."
                />

                <input
                type="text"
                placeholder= "Email..."
                />
            
                <input
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