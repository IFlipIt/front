import { Routes, Route } from 'react-router-dom'

import { EditUser } from '../pages/EditUser'
import { NewUser } from '../pages/NewUser'
import { PasswordChange } from '../pages/PasswordChange'

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/new" element={<NewUser/>} />
            <Route path="/edit" element={<EditUser/>} />
            <Route path="/password" element={<PasswordChange/>} />

        </Routes>
        )
}