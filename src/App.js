import React from "react";
import UserContextProvider from "./ContextAPI/UserContextProvider";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <>
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
    </>
  );
}

export default App;
