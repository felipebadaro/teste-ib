import React, { Component } from "react";
import PropTypes from "prop-types";

export class Personagem extends Component {
  getStyle = (color) => {
    return {
      border: "1px solid #CCC",
      color: color,
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 5px",
      marginBottom: "5px"
    };
  };

  componentDidMount = () => {
     console.log(this.props);
  };

  render() {
    return (
      <div style={this.getStyle(this.props.cor)}>
        <span>
          {this.props.nome} 
        </span>
        <span>
          <button onClick={this.props.delPersonagem.bind(this, this.props.nome)}>Delete</button>
        </span>
      </div>
    );
  }
}

// PropTypes
Personagem.propTypes = {
  cor: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
  delPersonagem: PropTypes.func.isRequired,
};

export default Personagem;