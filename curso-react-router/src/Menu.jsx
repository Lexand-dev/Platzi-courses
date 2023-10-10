import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

export default function Menu() {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        {routes.map((route) => {
          if (route.publicOnly && auth.user) return null;
          if (route.private && !auth.user) return null;

          return (
            <li key={route.text}>
              <NavLink to={route.to}>{route.text}</NavLink>
            </li>
          );
        })}
      </ul>

      <p>{auth.user && `Bienvenido, ${auth.user.username}`}</p>
    </nav>
  );
}

const routes = [
  {
    to: "/",
    text: "Home",
    private: false,
  },
  {
    to: "/blog",
    text: "Blog",
    private: false,
  },
  {
    to: "/profile",
    text: "Profile",
    private: true,
  },
  {
    to: "/login",
    text: "login",
    private: false,
    publicOnly: true,
  },
  {
    to: "/logout",
    text: "logout",
    private: true,
  },
];
