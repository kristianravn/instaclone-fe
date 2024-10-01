import { useState } from "react";
import  {loginFetch}  from "../../../utils/fetch";
import "./Login.css";

// eslint-disable-next-line react/prop-types
const Login = ({ setLoggedUser, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const Login = (username, password) => {
    console.log("User is logged in");
    console.log(username, password);
    return {
      message: "success",
      user: {
        id: 1,
        username: username,
      },
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
// loginFetch Here
    const data = await loginFetch(username, password);
    console.log(data);
        // add setLoggedUser and setIsLoggedIn
        setLoggedUser(data)      
        setIsLoggedIn(true);
  };

  return (
    <div className="flex flex-column login">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-column login-form"
      >
        <h3>Login</h3>
        <div>
          <input
            onChange={(e) => handleChange(e, setUsername)}
            type="text"
            placeholder="Username..."
          />
          <input
            onChange={(e) => handleChange(e, setPassword)}
            type="text"
            placeholder="Password..."
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
