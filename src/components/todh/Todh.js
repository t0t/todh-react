import React, { Component } from 'react'
import Rebase from 're-base'
// import { IconHeart } from '../Icons'

var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class Todh extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todh: []
    };
  }

  componentDidMount(){
    this.ref = base.fetch('todh', {
      context: this,
      asArray: false,
      then(data) {
        this.setState({
          todh: data
        })
      }
    });
  }

  render() {

    let todh = this.state.todh;

    return (
      <section className="Site__section">

        <header className="Site__section__header">
          <h1 className="Site__section__title">{todh.title}</h1>
          {(todh.descripcion) ? <p>{todh.descripcion}</p> : null}
        </header>

        <div className="Site__section__content">
          {(todh.p1) ? <p>{todh.p1}</p> : null}
          {(todh.p2) ? <p>{todh.p2}</p> : null}
          {(todh.p3) ? <p>{todh.p3}</p> : null}
          {(todh.p4) ? <p>{todh.p4}</p> : null}
          {(todh.p5) ? <p>{todh.p5}</p> : null}
        </div>

      </section>
    )
  }
}
