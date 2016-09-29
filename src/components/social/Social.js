import React, { Component } from 'react'
import Rebase from 're-base'
import SocialLinks from './SocialLinks'
import Contacto from '../contacto/Contacto'

var base = Rebase.createClass('https://sergiofores.firebaseio.com/')

export default class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    this.pageRef = base.bindToState('social', {
      context: this,
      state: 'data',
      asArray: true
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.pageRef);
  }

  render() {
    var socialLinks = this.state.data.map(function(data){
      return <SocialLinks {...data} />
    });
    return (
      <div className="Social">
        <h3 className="Social__title">¿Hablamos?</h3>
        <Contacto/>
        <ul className="Social__links">
          {socialLinks}
        </ul>
      </div>
    )
  }
}
