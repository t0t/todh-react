import React, { Component } from 'react'
import Rebase from 're-base'
import SocialLinks from './links'
import Contacto from '../contacto'

var base = Rebase.createClass('https://sergiofores.firebaseio.com/')

export default class Social extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      data: [],
      template: {}
    };
  }

  componentDidMount(){
    this.pageRef = base.bindToState('social', {
      context: this,
      state: 'data',
      asArray: true
    });
    this.template = base.bindToState('site/header', {
      context: this,
      state: 'template',
      asArray: false
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.pageRef);
  }

  render() {
    var socialLinks = this.state.data.map((data) => {
      return <SocialLinks {...data} />
    });
    return (
      <div className="Social">
        <h3 className="Social__title">{this.state.template.social_titulo}</h3>
        <Contacto/>
        <ul className="Social__links">
          {socialLinks}
        </ul>
      </div>
    )
  }
}
