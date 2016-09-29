import React, { Component } from 'react'
import Rebase from 're-base'
var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

import { IconLogoSF } from './Icons'
import { Link } from 'react-router'
import MainNav from './navigation'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: {}
    };
  }

  getPage() {
    base.fetch('brand', {
      context: this,
      asArray: false,
      then(data) { this.state.brand = data; }
    });
  }

  componentDidMount(){
    this.blogRef = base.bindToState('brand', {
      context: this,
      state: 'brand',
      asArray: false
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.blogRef);
  }

  render() {
    this.getPage();
    return (
      <header className="Site__header">
        <div className="Brand">
          <Link to="/"><IconLogoSF /></Link>
          <h1 className="Site__name">{this.state.brand.name}</h1>
          <h5 className="Site__description">{this.state.brand.title}</h5>
        </div>
        <MainNav />
      </header>
    )
  }
}
