import Login from './login/Login'
import Signup from './signup/Signup'
import './LogOrSign.css'

const LogOrSign = ({setLoggedUser,setIsLoggedIn }) => {
  return (
      <div className="logOrSign-container">
        <Signup setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn}/>
        <Login setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn}/> 
    </div>
  )
}

export default LogOrSign