import React, { Component } from 'react';

import Rebase from 're-base'
var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount(){
    this.pageRef = base.bindToState('contacto', {
      context: this,
      state: 'data',
      asArray: false
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.pageRef);
  }

  render() {
    return (
      <div className="Contact-form">
        <form action="https://formspree.io/sergiofores@gmail.com" method="POST">
          <input type="text" name="name" placeholder="Nombre"/>
          <input type="email" name="_replyto" placeholder="Email"/>
          <input type="hidden" name="subject" value="sergiofores.es contact form"/>
          <textarea name="message" placeholder="Mensaje"></textarea>
          <input type="submit" value="Enviar"/>
          <input type="hidden" name="next" value="http://sergiofores.es/"/>
          <input type="text" name="gotcha"/>
        </form>
      </div>
    )
  }
}
