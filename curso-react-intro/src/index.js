import React from "react";
import ReactDOM from "react-dom/client";
/* import App from "./App/index"; */
import "./index.css";

function App(props) {
  return (
    <h1>
      ¡{props.saludo}, {props.name}!
    </h1>
  );
}

function WithSaludo(WrappedComponent) {
  return function ComponentWithSaludo(props) {
    return (
      <>
        <WrappedComponent {...props} />
        <p>Texto que acompaña al wrapped</p>
      </>
    );
  };
}

const NewApp = WithSaludo(App);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<NewApp saludo="hola" name="Sony" />);
