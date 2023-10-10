import React from "react";
import "./CreateTodoButton.css";

export default function CreateTodoButton({ onClick }) {
  return (
    <button onClick={onClick} className="neomorph-button">
      +
    </button>
  );
}
