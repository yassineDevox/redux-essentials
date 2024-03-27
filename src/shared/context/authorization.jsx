import React, { useDebugValue, useState } from "react"

const USER = "user"
const ACCESS_TOKEN = "access_token"


export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {

   const [userSession, setuserSession] = useState(JSON.parse(localStorage.getItem(USER)) || '')
   const [accessToken, setAccessToken] = useState(localStorage.getItem(ACCESS_TOKEN) || '')
   
   useDebugValue(userSession)
   useDebugValue(accessToken)

   const setUser = (user) => {
      localStorage.setItem(USER, JSON.stringify(user))
      setuserSession(user)
   }

   const setToken = (token) => {
      localStorage.setItem(ACCESS_TOKEN, JSON.stringify(token))
      setAccessToken(token)
   }

   const clearSession = () => {
      localStorage.removeItem(USER);
      localStorage.removeItem(ACCESS_TOKEN);
      setuserSession(null);
      setAccessToken(null);
   }

   const value = { user: userSession, accessToken, setUser, setToken, clearSession };

   return (
      <AuthContext.Provider {...{ value }}>
         {children}
      </AuthContext.Provider>
   )
}