import React, { createContext, useContext, useState } from 'react'

export const AuthContext = createContext()

export default function Authprovider({children}) {
  const getfromstorage = localStorage.getItem("Users");

  const [authUser , setAuthUSer] = useState(
    getfromstorage ? JSON.parse(getfromstorage) : undefined
  );

  return(
    <AuthContext.Provider value={[authUser , setAuthUSer]} >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

