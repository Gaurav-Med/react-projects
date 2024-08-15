import React, { useContext } from 'react'
import UserContext from './ContextAPI/UserContext'
function Profile() {
    const {user} =useContext(UserContext)
  return (
    <>
      <h1>Profile page Start</h1>

    <div>Welcome: {user}</div>
    <h1>Profile page end</h1>

    </>
  )
}

export default Profile