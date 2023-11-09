import { useEffect, useState } from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [state, setState] = useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  /*   const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); */

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
    setState({
      ...state,
      error: true,
      loading: false,
    });
  };

  const onConfirm = () => {
    setState({
      ...state,
      loading: false,
      confirmed: true,
    });
  };

  const onCheck = () => {
    setState({
      ...state,
      loading: true,
      error: false,
    });
  };

  const onWrite = (newValue) => {
    setState({
      ...state,
      value: newValue,
    });
  };

  const onDelete = () => {
    setState({
      ...state,
      deleted: true,
    });
  };

  const onReset = () => {
    setState({
      ...state,
      deleted: false,
      confirmed: false,
    });
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
          onChange={(event) => {
            onWrite(event.target.value);
          }}
        />
        <button
          onClick={() => {
            onCheck();
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!state.deleted && state.confirmed) {
    return (
      <>
        <p>Seguro que quiere eliminar?</p>
        <button
          onClick={() => {
            onDelete();
          }}
        >
          si, eliminar
        </button>
        <button
          onClick={() => {
            onReset();
          }}
        >
          no, quiero cancelar
        </button>
      </>
    );
  } else {
    return (
      <>
        <p>Eliminado con éxito</p>
        <button
          onClick={() => {
            onReset();
          }}
        >
          resetear, volver atrás
        </button>
      </>
    );
  }
}

export { UseState };
