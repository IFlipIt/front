import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppRoutesComponent } from "../pages/AppRoute";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user ? <AppRoutesComponent /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
