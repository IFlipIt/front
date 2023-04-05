import { createContext, useContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [idUser, setIdUser] = useState("");

  async function signIn({ username, password }) {
    try {
      const response = await api.get("/auth/login", {
        auth: { username, password },
      });

      const { idUser, token } = response.data;
      setIdUser(idUser);

      localStorage.setItem(`@erp:idUser`, idUser);
      localStorage.setItem(`@erp:token`, token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ idUser, token });
    } catch (error) {
      alert(error);
    }
  }

  function signOut() {
    const token = localStorage.removeItem("@erp:token");
    const idUser = localStorage.removeItem("@erp:idUser");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@erp:token");
    const idUser = localStorage.getItem("@erp:idUser");

    if (token && idUser) {
      api.defaults.headers.common["Authorization"] = "Bearer ${token}";

      setData({
        token,
        idUser: JSON.parse(idUser),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, idUser }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
