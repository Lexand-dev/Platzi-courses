import React from "react";
import "./TodoList.css";
export default function TodoList({
  error,
  loading,
  searchedTodos,
  onError,
  onLoading,
  onEmpty,
  render,
  onEmptySearch,
  totalTodos,
  searchText,
}) {
  return (
    <div className="todoListContainer">
      <ul>
        {error && onError()}
        {loading && onLoading()}
        {!loading && !totalTodos && onEmpty()}
        {!searchedTodos.length && !!totalTodos && onEmptySearch(searchText)}

        {!loading && searchedTodos.map(render)}
      </ul>
    </div>
  );
}
