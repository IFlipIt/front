import { createContext, useContext, useEffect } from "react";

import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }){ 

    async function signIn({ username, password }){
        try {
              const response = await api.post('/sessions', {username, password})

              const { idUser, token } = response.data;

              localStorage.setItem (`@erp:idUser`, JSON.stringify(idUser))
              localStorage.setItem (`@erp:token`, token)

              api.defaults.headers.common['Authorization'] = 'Bearer ${token}'
              setData({ idUser, token })
        
            } catch (error.response) {
            alert(error.response.data.message)
            } else {
            alert("Nao foi possivel entrar")
            }

    }

    function signOut(){
        const token = localStorage.removeItem("@erp:token")
        const idUser = localStorage.removeItem("@erp:idUser")
        
        setData({});
    }

    useEffect(() => {
        const token = localStorage.getItem("@erp:token")
        const idUser = localStorage.getItem("@erp:idUser")
        
        if(token && idUser) {
            api.defaults.headers.common['Authorization'] = 'Bearer ${token}'
        
            setData({
                token,
                idUser: JSON.parse(idUser)
            })
        }
    
    }, [])

    return (
    <MyContext.Provider value={{ signIn, signOut,  idUser: data.idUser }}> 
        {children}
    </MyContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth } 