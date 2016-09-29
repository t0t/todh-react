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
        <p>{this.state.data.biografia}</p>
        <p>{this.state.data.formacion}</p>
      </div>
    )
  }
}
