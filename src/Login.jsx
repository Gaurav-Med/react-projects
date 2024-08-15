import React, { useContext, useState } from "react";
import UserContext from "./ContextAPI/UserContext";

function Login() {
  const { setUser } = useContext(UserContext);

  const [userName, setUserName] = useState("");
  const handleChange = (r) => {
    setUserName(r.target.value);
  };
  const handleSubmit = () => {
    setUser(userName);
  };
  return (
    <>
      <h1>Login page Start</h1>
      <input value={userName}  
      
      onChange={handleChange} 
      />
      <button onClick={handleSubmit}>Submit</button>
      <h1>Login page end</h1>
    </>
  );
}

export default Login;
