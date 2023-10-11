import { useState } from "react";

export default function useStorageListener(synchronized) {
  const [storageChange, setStorageChange] = useState(false);

  window.addEventListener("storage", (change) => {
    if (change.key === "TODOS_V1") {
      console.log("hubo cambios");
      setStorageChange(true);
    }
  });

  const toggleShow = () => {
    synchronized();
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow,
  };
}
