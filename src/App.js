import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TODH - React</h2>
        </div>
        <h1 className="App-intro">
          Hola mundo.
        </h1>
        <p>
          He usado <a href="https://github.com/facebookincubator/create-react-app" target="_blank">Create React App</a> para crear un entorno de desarrollo en 1 minuto con la librería frontend React. Simplemente Brutal.
        </p>
        <footer>
          <a href="http://t-o-d-h.com">Sergio Forés</a> Diseño y desarrollo prototipos de todo tipo para equipos multidisciplinares y emprendedores. Freelance. Un tanto Freaky. Peligroso en la cocina.
        </footer>
      </div>
    );
  }
}

export default App;
