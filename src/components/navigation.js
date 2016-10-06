import React, { Component } from 'react'
import { Link } from 'react-router'
import {IconToggle} from './Icons'
import Rebase from 're-base'
const base = Rebase.createClass('https://sergiofores.firebaseio.com/')

export default class MainNav extends Component {

  constructor (...args) {
    super(...args);
    this.state = {
      isActive: false,
      menuItems: {}
    };
  }

  componentDidMount(){
    base.fetch('site/menu', {
      context: this,
      asArray: false,
      then(data) {
        this.setState({
          menuItems: data
        })
      }
    });
  }

  toggleOnOff() {
    let active = !this.state.isActive;
    this.setState({
      isActive: active
    });
  }

  closeOverlay() {
    this.setState({
      isActive: false
    });
  }

  render() {
    let addClass = this.state.isActive && 'active';
    let active = this.closeOverlay.bind(this);
    return (
      <nav className="Nav-main-wrap">
        <button className={ addClass + ' toggle-btn' } onClick={this.toggleOnOff.bind(this)}>
          <IconToggle/>
        </button>

        <ul className="Nav-main">

          {this.state.menuItems.item_01 &&
            <li className="Nav-main__item">
            <Link to="/services" activeClassName="active" onClick={active}>
            {this.state.menuItems.item_01}</Link>
            </li>
          }

          {this.state.menuItems.item_02 &&
            <li className="Nav-main__item">
            <Link to="/works" activeClassName="active" onClick={active}> {this.state.menuItems.item_02}</Link>
            </li>
          }

          {this.state.menuItems.item_03 &&
            <li className="Nav-main__item">
            <Link to="/blog" activeClassName="active" onClick={active}> {this.state.menuItems.item_03}</Link>
            </li>
          }

          {this.state.menuItems.item_04 &&
            <li className="Nav-main__item">
            <Link to="/todh" activeClassName="active" onClick={active}> {this.state.menuItems.item_04}</Link>
            </li>
          }

        </ul>

      </nav>
    )
  }
}
