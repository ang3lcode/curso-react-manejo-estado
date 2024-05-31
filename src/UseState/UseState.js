import React from "react";

const SEGURITY_CODE = "paradigma";

export const UseState = ({ name }) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!!loading) {
      setTimeout(() => {
        if (value === SEGURITY_CODE) {
          setLoading(false);
        } else {
          setError(true);
        }
        setLoading(false);
      }, 3000);
    }
  }, [loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor,escribe el código de seguridad.</p>

      {(error && !loading) && <p>Error: codigo</p>}
      {loading && <p>Cargando...</p>}

      <input
        placeholder="Código de seguridad"
        value={value}
        onChange={(e) => {setValue(e.target.value);}}
      />
      <button onClick={() => setLoading(true) }>Comprobar</button>
    </div>
  );
};
