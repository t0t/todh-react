import React, { Component } from 'react'
import { Link } from 'react-router'
import {IconToggle} from './Icons'

export default class MainNav extends Component {
  constructor() {
    super()
    this.state = { isActive: false }
  }
  handleClick() {
    let active = !this.state.isActive
    this.setState({ isActive: active })
  }
  render () {
    let addClass = this.state.isActive && 'active'
    return (
      <nav className="Nav-main-wrap">
        <button className={ addClass + ' toggle-btn' } onClick={this.handleClick.bind(this)}>
          <IconToggle/>
        </button>

        <ul className="Nav-main">

          <li className="Nav-main__item">
            <Link to="/services" activeClassName="active"> Soy </Link>
          </li>
          <li className="Nav-main__item">
            <Link to="/works" activeClassName="active"> Observación </Link>
          </li>
          <li className="Nav-main__item">
            <Link to="/blog" activeClassName="active"> Pienso </Link>
          </li>
          <li className="Nav-main__item">
            <Link to="/todh" activeClassName="active"> Actúo </Link>
          </li>

        </ul>

      </nav>
    )
  }
}
