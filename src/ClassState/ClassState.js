import React from "react";
import { Loading } from "./loading";

export class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: true,
      loading: true,
    };
  }

  componentDidUpdate() {
    console.log("actualizacion");
    if (!!this.state.loading) {
      setTimeout(() => {
        this.setState({ ...this.state, loading: false });
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor,escribe el código de seguridad.</p>

        {this.state.error && <p>Error: codigo</p>}
        {this.state.loading && <Loading />}

        <input placeholder="Código de seguridad" />
        <button onClick={() => this.setState({ loading: !this.state.loading })}>
          Comprobar
        </button>
      </div>
    );
  }
}
