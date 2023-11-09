import { useEffect, useReducer } from "react";

const SECURITY_CODE = "paradigma";

function UseReducer({ name }) {
  const initialState = {
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  };

  const actionTypes = {
    error: "ERROR",
    confirm: "CONFIRM",
    check: "CHECK",
    write: "WRITE",
    delete: "DELETE",
    reset: "RESET",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.error:
        return {
          ...state,
          error: true,
          loading: false,
        };
      case actionTypes.confirm:
        return {
          ...state,
          loading: false,
          confirmed: true,
        };
      case actionTypes.check:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case actionTypes.write:
        return {
          ...state,
          value: action.payload,
        };
      case actionTypes.delete:
        return {
          ...state,
          deleted: true,
        };
      case actionTypes.reset:
        return {
          ...state,
          deleted: false,
          confirmed: false,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("iniciando efecto");

    if (state.loading) {
      console.log("Haciendo validación en efecto");
      setTimeout(() => {
        if (state.value !== SECURITY_CODE) {
          onError();
        } else {
          onConfirm();
        }
      }, 3000);
    }
  }, [state.loading]);

  const onError = () => {
    dispatch({ type: actionTypes.error });
  };

  const onConfirm = () => {
    dispatch({ type: actionTypes.confirm });
  };

  const onCheck = () => {
    dispatch({ type: actionTypes.check });
  };

  const onWrite = (event) => {
    dispatch({ type: actionTypes.write, payload: event.target.value });
  };

  const onDelete = () => {
    dispatch({ type: actionTypes.delete });
  };

  const onReset = () => {
    dispatch({ type: actionTypes.reset });
  };

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>{name}</h2>
        <p>Por favor, escribe el código de seguridad.</p>
        {state.error && <p>Error codigo incorrecto</p>}
        {state.loading && <p>cargando... </p>}
        <input
          type="text"
          placeholder="escribe el godigo de seguridad"
          onChange={onWrite}
        />
        <button onClick={onCheck}>Comprobar</button>
      </div>
    );
  } else if (!state.deleted && state.confirmed) {
    return (
      <>
        <p>Seguro que quiere eliminar?</p>
        <button onClick={onDelete}>si, eliminar</button>
        <button onClick={onReset}>no, quiero cancelar</button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con éxito</p>
        <button onClick={onReset}>resetear, volver atrás</button>
      </>
    );
  }
}

export { UseReducer };
