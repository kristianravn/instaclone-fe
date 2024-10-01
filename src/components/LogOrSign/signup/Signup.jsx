import React from 'react'

const Signup = () => {
  return (

    <div>
        <form>
            <h3>Signup</h3>
            <div>
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