import React from "react";
import useStorageListener from "./useStorageListener";

export default function ChangeAlert({ synchronized }) {
  const { show, toggleShow } = useStorageListener(synchronized);

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

export { ChangeAlert };
