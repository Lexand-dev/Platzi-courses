import { useEffect, useReducer } from "react";
export function useLocalStorage(itemName, initialValue) {
  const initialState = {
    synchronizedItem: true,
    loading: true,
    error: false,
    item: initialValue,
  };

  const actionTypes = {
    error: "ERROR",
    success: "SUCCSESS",
    save: "SAVE",
    loading: "LOADING",
    sincronize: "SINCRONIZE",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.error:
        return {
          ...state,
          loading: false,
          error: true,
        };
      case actionTypes.success:
        return {
          synchronizedItem: true,
          error: false,
          loading: false,
          item: action.payload,
        };
      case actionTypes.sincronize:
        return {
          ...state,
          synchronizedItem: false,
          loading: true,
        };
      case actionTypes.save:
        return {
          ...state,
          item: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const { synchronizedItem, loading, error, item } = state;

  const onError = (error) => {
    dispatch({
      type: actionTypes.error,
      payload: error,
    });
  };

  const onSyncronize = () => {
    dispatch({
      type: actionTypes.sincronize,
    });
  };

  const onSave = (item) => {
    dispatch({
      type: actionTypes.save,
      payload: item,
    });
  };

  const onSuccsess = (item) => {
    dispatch({
      type: actionTypes.success,
      payload: item,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        onSuccsess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 3000);
  }, [synchronizedItem]);

  const synchronized = () => {
    onSyncronize();
  };

  // persistencia de datos con localStorage, modifica el estado y en localStorage se guarda el nuevo estado de los todos con el nuevo todo agregado o eliminado o completado o lo que sea que se haga con el todo en cuestion (se guarda el nuevo estado de los todos)
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  return { item, saveItem, loading, error, synchronized };
}
