import {createContext, useState} from 'react'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user,Setuser] = useState(null)


  return (
    <AuthContext.Provider value={{user, Setuser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
