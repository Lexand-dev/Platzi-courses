import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthProvider, AuthRoute } from "./Auth";
import { BlogPage } from "./BlogPage";
import BlogPost from "./BlogPost";
import HomePage from "./HomePage";
import Login from "./Login";
import Logout from "./Logout";
import Menu from "./Menu";
import ProfilePage from "./ProfilePage";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>

            <Route
              path="/profile"
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />

            <Route path="/login" element={<Login />} />

            <Route
              path="/logout"
              element={
                <AuthRoute>
                  <Logout />
                </AuthRoute>
              }
            />

            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
