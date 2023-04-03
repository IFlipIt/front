import { createContext, useContext } from "react";

export const AuthContext = createContext({})

function AuthProvider({ children }){ 
    return <MyContext.Provider value={{name: 'Gabriel Rennó'}}> 
        {children}
    </MyContext.Provider>
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth } 