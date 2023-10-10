import React from "react";
import CompleteIcon from "../CompleteIcon";
import DeleteIcon from "../DeleteIcon";
import "./TodoItem.css";
export default function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li>
      <CompleteIcon completed={completed} onComplete={onComplete} />
      <p className={`todo-item ${completed && "todo-item--check"}`}>{text}</p>
      <DeleteIcon onDelete={onDelete} />
    </li>
  );
}
