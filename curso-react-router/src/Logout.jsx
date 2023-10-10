import { useAuth } from "./Auth";

export default function Logout() {
  const auth = useAuth();
  const logout = (e) => (e.preventDefault(), auth.logout());

  return (
    <div>
      <h1>Logout</h1>
      <form onSubmit={logout}>
        <label>Deseas salir: </label>

        <button type="submit">Salir</button>
      </form>
    </div>
  );
}
