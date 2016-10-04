import React, { Component } from 'react';
import { IconLogoSF } from './Icons';
import Social from './social'

export default class Footer extends Component {
  render() {
    return (
      <footer className="Site__footer">
        <Social/>
        <p className="Site__footer__credits">
        Handcoded with love using React + Firebase by Sergio Forés <IconLogoSF /></p>
      </footer>
    )
  }
}
