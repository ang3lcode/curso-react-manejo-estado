import React from "react";

const SEGURITY_CODE = "paradigma";

export const UseReducer = ({ name }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  console.log(state)

 
  React.useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
        if (state.value === SEGURITY_CODE) {
          dispatch({ type: "CONFIRM" }); // payload: opcional
          // onConfirm();
        } else {
          dispatch({ type: "ERROR" });
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
            console.log( e.target.value)
            dispatch({ type: 'WRITE', payload: e.target.value });
            // onWhite(e.target.value);
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: "CHECK" });
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
            dispatch({ type: "DELETE" });
          }}
        >
          si, eliminar
        </button>
        <button
          onClick={() => {
            dispatch({ type: "RESET" });
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
            dispatch({ type: "RESET" });
          }}
        >
          Resetear, volver atras
        </button>
      </React.Fragment>
    );
  }
};

const initialState = {
  value: "paradigma",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};
const reducerObject = (state, payload) => ({
  'CONFIRM': {
    ...state,
    loading: false,
    error: false,
    confirmed: true,
  },
  'ERROR': {
    ...state,
    error: true,
    loading: false,
  },

  'WRITE': { ...state, value: payload},

  'CHECK': {
    ...state,
    loading: true,
  },
  'DELETE': { ...state, deleted: true },
  'RESET': {
    ...state,
    deleted: false,
    confirmed: false,
    value: "",
  },
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]){
      return reducerObject(state, action.payload)[action.type]
  } else {
      return state;
  }
}; 