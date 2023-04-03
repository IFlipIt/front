import { BrowserRouter } from "react-router-dom";

import { AppRoutesComponent } from "../pages/AppRoute";

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutesComponent />
    </BrowserRouter>
  );
}
