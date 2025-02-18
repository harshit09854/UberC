import React, { createContext, useState } from 'react'

export const UserDataContext = createContext(); 

// Rename the component to start with capital letter to match React conventions
const UserContext = ({children}) => {
  const [user, setUser] = useState({
    email:'',
    fullName:{
      firstName:'',
      lastName:''
    }
  });
  return (
    <div>
        <UserDataContext.Provider value={{ user, setUser }}>
          {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext  // Export with capital letter name
