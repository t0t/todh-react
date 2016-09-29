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
      <ul className="List">
        <li className="List__item">{this.state.data.biografia}</li>
        <li className="List__item">{this.state.data.formacion}</li>
      </ul>
    )
  }
}
