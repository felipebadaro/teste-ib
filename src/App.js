import React, { Component } from "react";
import Personagem from "./components/Personagem";
import "./style.css";
import axios from 'axios';

class App extends Component {
  state = {
    personagens: []
  };

componentDidMount() {
  axios
      .get('https://swapi.dev/api/people/')
      .then(res => this.setState({ personagens: res.data.results }));
}


  delPersonagem = name => {
    this.setState({
        personagens: [...this.state.personagens.filter(personagem => personagem.name !== name)]
      })
  };

  comparaNomes = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  render() {
    return (
      <div className="App">
        <div className="container">
            <h2>Lista de personagens</h2>
            {this.state.personagens.sort(this.comparaNomes).map((personagem) => {
              return <Personagem key={personagem.name} nome={personagem.name} cor={personagem.eye_color} delPersonagem={this.delPersonagem} />
            })}
        </div>
      </div>
    );
  }
}

export default App;
