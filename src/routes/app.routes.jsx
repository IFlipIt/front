import { Routes, Route } from "react-router-dom";

import { EditUser } from "../pages/AppRoute/EditUser";
import { NewUser } from "../pages/AppRoute/NewUser";
import { UsersList } from "../pages/AppRoute/UsersList";
import { PasswordChange } from "../pages/PasswordChange";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/users" element={<UsersList />} />
      <Route path="/users/new" element={<NewUser />} />
      <Route path="/users/edit" element={<EditUser />} />

      <Route path="/set-password" element={<PasswordChange />} />
    </Routes>
  );
}
