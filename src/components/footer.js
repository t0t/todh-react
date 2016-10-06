import React, { Component } from 'react';
import { IconLogoSF } from './Icons';
import Social from './social'
import Rebase from 're-base'
const base = Rebase.createClass('https://sergiofores.firebaseio.com/')

export default class Footer extends Component {

  constructor (...args) {
    super(...args);
    this.state = {
      footer: {}
    };
  }

  componentDidMount(){
    base.fetch('site/footer', {
      context: this,
      asArray: false,
      then(data) {
        this.setState({
          footer: data
        })
      }
    });
  }

  render() {
    return (
      <footer className="Site__footer">

        <Social/>

        {this.state.footer.pie_pagina &&
          <small className="Site__footer__credits">
          {this.state.footer.pie_pagina}
          <IconLogoSF /></small>
        }

      </footer>
    )
  }
}
