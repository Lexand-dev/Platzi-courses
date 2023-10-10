import React from "react";
import "./TodoSearch.css";
export default function TodoSearch({ searchValue, setSearchValue, loading }) {
  return (
    <div className="imputSearch">
      <input
        placeholder="cortar cebolla"
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        disabled={loading}
      />
    </div>
  );
}
