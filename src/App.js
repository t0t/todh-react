import React, { Component } from 'react';
import logo from './icons/logo.svg';
import './css/App.css';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App Site">

        <Header />

        <img src={logo} className="App-logo" alt="logo" />

        {this.props.children}

        <Footer />

      </div>
    );
  }
}

export default App;
