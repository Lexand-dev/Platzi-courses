import "./App.css";
import { UseReducer } from "./components/UseReducer";
import { UseState } from "./components/UseState";

function App() {
  return (
    <>
      <UseState name="Eliminar useState" />
      <UseReducer name="Eliminar useReducer" />
      {/* <ClassState name="Eliminar ClaState" /> */}
    </>
  );
}

export default App;
