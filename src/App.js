import React, { Component } from 'react';
import './css/App.css';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App Site">

        <Header />

        {this.props.children}

        <Footer />

      </div>
    );
  }
}

export default App;
