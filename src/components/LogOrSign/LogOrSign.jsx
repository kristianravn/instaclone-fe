import Login from "./login/Login";
import Signup from "./signup/Signup";
import "../../general.css";

const LogOrSign = ({ setIsLoggedIn, setLoggedUser }) => {
    return (
      <div className="flex-column container">
        <div className="flex-row inner-container logOrSign-container">
          <Login setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn} />
          <Signup setLoggedUser={setLoggedUser} setIsLoggedIn={setIsLoggedIn} />
        </div>
      </div>
      );
  };
  
  export default LogOrSign;