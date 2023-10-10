import React from "react";

export default function EmptySearch({ searchText }) {
  return (
    <p style={{ color: "red", borderRadius: "2px" }}>
      No hay TODOs que coincidan con {searchText}
    </p>
  );
}
