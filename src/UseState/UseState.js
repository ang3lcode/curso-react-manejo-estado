import React from "react";

const SEGURITY_CODE = "paradigma";

export const UseState = ({ name }) => {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  //   const [value, setValue] = React.useState("");
  //   const [error, setError] = React.useState(false);
  //   const [loading, setLoading] = React.useState(false);

  const onConfirm = () => {
    setState({
      ...state,
      loading: false,
      error: false,
      confirmed: true,
    });
  };
  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
    });
  };
  const onWhite = (newValue) => {
    setState({ ...state, value: newValue });
  };
  const onCheck = () => {
    setState({
      ...state,
      loading: true,
    });
  };
  const onDelete = () => {
    setState({ ...state, deleted: true });
  };
  const onReset = () => {
    setState({
      ...state,
      deleted: false,
      confirmed: false,
      value: "",
    });
  };

  React.useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
        if (state.value === SEGURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }
        // setLoading(false);
      }, 3000);
    }
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div>
        <h2>Eliminar {name}</h2>
        <p>Por favor,escribe el código de seguridad.</p>

        {state.error && !state.loading && <p>Error: codigo</p>}
        {state.loading && <p>Cargando...</p>}

        <input
          placeholder="Código de seguridad"
          value={state.value}
          onChange={(e) => {
            onWhite(e.target.value);
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
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>pedimos confirmacion ¿estas seguro?</p>
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
          no, eliminar
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Eliminado</p>
        <button
          onClick={() => {
            onReset();
          }}
        >
          Resetear, volver atras
        </button>
      </React.Fragment>
    );
  }
};
