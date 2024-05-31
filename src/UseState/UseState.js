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

  React.useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
        if (state.value === SEGURITY_CODE) {
          setState({
            ...state,
            loading: false,
            error: false,
            confirmed: true,
          });
        } else {
          setState({
            ...state,
            error: true,
            loading: false,
          });
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
            setState({ ...state, value: e.target.value });
          }}
        />
        <button
          onClick={() =>
            setState({
              ...state,
              loading: true,
            })
          }
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!!state.confirmed && !state.delete) {
    return (
      <React.Fragment>
        <p>pedimos confirmacion ¿estas seguro?</p>
        <button
          onClick={() => {
            setState({ ...setState, deleted: true });
          }}
        >
          si, eliminar
        </button>
        <button
          onClick={() => {
            setState({ ...setState, confirmed: false, value: '', });
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
            setState({ ...setState, deleted: false, confirmed: false, value: '', });
          }}
        >
          Resetear, volver atras
        </button>
      </React.Fragment>
    );
  }
};
