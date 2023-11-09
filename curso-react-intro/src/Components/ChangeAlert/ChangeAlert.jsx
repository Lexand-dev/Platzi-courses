import React from "react";
import "./changeAlert.css";
import useStorageListener from "./useStorageListener";

export default function ChangeAlert({ synchronized }) {
  const { show, toggleShow } = useStorageListener(synchronized);

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Hubo cambios</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            cargar informacion
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
