import { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { users } from "./admin";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = ({ username }) => {
    const hisRole = users.find((user) =>
      user.name === username ? user.role : null
    );
    setUser({ username, hisRole });
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function AuthRoute(props) {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return props.children;
}

export function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}
