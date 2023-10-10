import React from "react";
import TodoIcon from "./TodoIcon/TodoIcon";

export default function DeleteIcon({ onDelete }) {
  return <TodoIcon type="delete" color="gray" onClick={onDelete} />;
}
