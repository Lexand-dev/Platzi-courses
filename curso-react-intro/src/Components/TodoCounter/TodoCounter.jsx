import React from "react";

import "./TodoCounter.css";

export default function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <div className={`${!!loading && "TodoCounter--loading"}`}>
      <h2 className="">
        Has completado {completedTodos} de {totalTodos} TODOs
      </h2>
    </div>
  );
}
