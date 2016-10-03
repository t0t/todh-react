import React, { Component } from 'react'
import { Link } from 'react-router'
import {IconToggle} from './Icons'

export default class MainNav extends Component {

  constructor() {
    super()
    this.state = {
      isActive: false
    }
  }

  toggleOnOff() {
    let active = !this.state.isActive;
    this.setState({
      isActive: active
    })
  }

  closeOverlay() {
    this.setState({
      isActive: false
    })
  }

  render () {
    let addClass = this.state.isActive && 'active';

    return (
      <nav className="Nav-main-wrap">

        <button className={ addClass + ' toggle-btn' } onClick={this.toggleOnOff.bind(this)}>
          <IconToggle/>
        </button>

        <ul className="Nav-main">

          <li className="Nav-main__item">
            <Link to="/services" activeClassName="active" onClick={this.closeOverlay.bind(this)}> Soy </Link>
          </li>
          <li className="Nav-main__item">
            <Link to="/works" activeClassName="active" onClick={this.closeOverlay.bind(this)}> Observación </Link>
          </li>
          <li className="Nav-main__item">
            <Link to="/blog" activeClassName="active" onClick={this.closeOverlay.bind(this)}> Pienso </Link>
          </li>
          <li className="Nav-main__item">
            <Link to="/todh" activeClassName="active" onClick={this.closeOverlay.bind(this)}> Actúo </Link>
          </li>

        </ul>

      </nav>
    )
  }
}
