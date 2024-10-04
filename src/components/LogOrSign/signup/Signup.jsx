import { useState, useNavigate } from 'react'
import  {signupFetch}  from "../../../utils/fetch";
import "./Signup.css"

const Signup = ({setLoggedUser, setIsLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate () 

  const handleChange = (e, setter) => {
    setter(e.target.value);
  }; 
  const handleSubmit = async(e) =>{
  e.preventDefault();
  console.log("signup handleSubmit");
  const data = await signupFetch(username, email, password);

  if (data.message === "success"){
  setLoggedUser(data);
  setIsLoggedIn(true);
  navigate('/images');
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