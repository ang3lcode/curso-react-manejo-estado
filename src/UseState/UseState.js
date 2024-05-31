import React from "react";

const SEGURITY_CODE = "paradigma";

export const UseState = ({ name }) => {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
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
          setState({...state, value: e.target.value, });
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
};
