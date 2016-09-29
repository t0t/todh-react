import React, { Component } from 'react';
// import { Link } from 'react-router'

export default class BlogSingle extends Component {

  constructor() {
    super();
    this.state = {
      tag: "<button>XXXXX</button>"
    };
  }

  componentDidMount() {
    this.setState({
      tag: 23
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.tag}</h1>
        <h1>{this.props.p1}</h1>
      </div>
    );
  }
}
