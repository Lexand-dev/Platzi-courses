import React from "react";
import withStorageListener from "./withStorageListener";

export default function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div>
        <p>Hubo cambios</p>;
        <button onClick={() => toggleShow(false)}>cargar informacion</button>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
