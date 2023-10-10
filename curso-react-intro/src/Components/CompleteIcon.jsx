import React from "react";
import TodoIcon from "./TodoIcon/TodoIcon";

export default function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type={"check"}
      color={completed ? "green" : "gray"}
      onClick={onComplete}
    />
  );
}
