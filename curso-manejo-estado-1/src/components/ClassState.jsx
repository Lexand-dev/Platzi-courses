import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "paradigma";

class ClassState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }

  componentDidUpdate() {
    console.log("update");
    if (this.state.loading) {
      setTimeout(() => {
        if (this.state.value !== SECURITY_CODE) {
          this.setState({ error: true });
        }
        console.log("Haciendo validación");
        this.setState({ loading: false });
        console.log("terminando validación");
      }, 3000);
    }
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>Por favor, escribe el código de seguridad.</p>
        {this.state.error && <p>Error codigo incorrecto</p>}
        {this.state.loading && <Loading />}

        <input
          type="text"
          placeholder="escribe el godigo de seguridad"
          onChange={(event) => this.setState({ value: event.target.value })}
        />
        <button
          onClick={() => {
            this.setState((prevState) => ({ loading: !prevState.loading }));
            if (this.state.error) this.setState({ error: false });
          }}
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
