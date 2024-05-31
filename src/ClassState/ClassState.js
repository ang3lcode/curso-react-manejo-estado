import React from "react";
import { Loading } from "./loading";

const SEGURITY_CODE = "paradigma";

export class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }

  componentDidUpdate() {
    console.log("actualizacion");
    if (!!this.state.loading) {
      setTimeout(() => {
        // this.setState({ ...this.state, loading: false });
        if (this.state.value === SEGURITY_CODE) {
          this.setState({ ...this.state, loading: false, error: false });
        } else {
          this.setState({ ...this.state, loading: false, error: true });
        }
      }, 3000);
    }
  }

  render() {
    // const {error, loading, value} = this.state; // para poder usar sin tanta direccion
    return (
      <div>
        <h2>Eliminar {this.props.name}</h2>
        <p>Por favor,escribe el código de seguridad.</p>

        {this.state.error && !this.state.loading && <p>Error: codigo</p>}
        {this.state.loading && <Loading />}

        <input
          value={this.state.value}
          placeholder="Código de seguridad"
          onChange={(e) => {
            this.setState({ ...this.state, value: e.target.value });
          }}
        />
        <button onClick={() => this.setState({ loading: !this.state.loading })}>
          Comprobar
        </button>
      </div>
    );
  }
}
