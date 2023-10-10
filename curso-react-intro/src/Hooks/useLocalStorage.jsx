import { useEffect, useState } from "react";
export function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);

  // persistencia de datos con localStorage, modifica el estado y en localStorage se guarda el nuevo estado de los todos con el nuevo todo agregado o eliminado o completado o lo que sea que se haga con el todo en cuestion (se guarda el nuevo estado de los todos)
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return { item, saveItem, error, loading };
}
