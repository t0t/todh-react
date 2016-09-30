import React, { Component } from 'react';

import Rebase from 're-base'
var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class Historia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount(){
    this.pageRef = base.bindToState('historia', {
      context: this,
      state: 'data',
      asArray: false
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.pageRef);
  }

  render() {
    return (
      <div>
        <h3>{this.state.data.valores}</h3>
        <p>{this.state.data.sinergias}</p>
        <p>{this.state.data.proceso}</p>
        <p>{this.state.data.innovacion}</p>
        <p>{this.state.data.franqueza}</p>
        <p>{this.state.data.foco}</p>
        <p>{this.state.data.escucha}</p>
        <p>{this.state.data.compartir}</p>
      </div>
    )
  }
}
