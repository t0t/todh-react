import React, { Component } from 'react';

export default class Slide extends Component {
  constructor(...args) {
    super(...args)
    this.state = {
      isActive: false
    }
  }
  handleClick() {
    let active = !this.state.isActive;
    this.setState({ isActive: active });
  }
  render() {
    let addClass = this.state.isActive && 'active'
    return (
      <figure className="slider__slide">
        <img
          src={ this.props.url }
          onClick={ this.handleClick.bind(this) }
          className={ addClass }
          role="presentation"
        />
        <figcaption>
          {this.props.title}
        </figcaption>
      </figure>

    )
  }
}
