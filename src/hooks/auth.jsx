import { createContext, useContext } from "react";

import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }){ 

    // // async function signIn({ username, password }){
    //     try {
    //         //     const response = await api.post('/sessions', {email, password})
    //     } catch (error.response) {
    //         alert(error.response.data.message)
    //     } else {
    //         alert("Nao foi possivel entrar")
    //     }

    // // }

    return <MyContext.Provider value={{ signIn }}> 
        {children}
    </MyContext.Provider>
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth } 