
import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

import { AppRoutesComponent } from "../pages/AppRoute";

export function Routes(){
    const { user } = useAuth()

    return(
        <BrowserRouter>
        { user ? <AppRoutes /> : <AuthRoutes/>}
        </BrowserRouter>
    )
}
