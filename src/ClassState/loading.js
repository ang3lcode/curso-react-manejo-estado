import React from "react";

export class Loading extends React.Component {
    componentDidMount(){
        console.log('desmontar')
    }

  render() {
    return (
      <div>
        cargando ...
      </div>
    );
  }
}
