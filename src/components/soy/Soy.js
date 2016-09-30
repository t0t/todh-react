import React, { Component } from 'react'
import Rebase from 're-base'
// import { IconHeart } from '../Icons'
// import { Link } from 'react-router'

var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class Soy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      soy: []
    };
  }

  componentDidMount(){
    this.ref = base.fetch('soy', {
      context: this,
      asArray: false,
      then(data) {
        this.setState({
          soy: data
        })
      }
    });
  }

  render() {

    let soy = this.state.soy;

    return (
      <div className="Site__section__header">

          <h1 className="Site__section__title">{soy.title}</h1>
          {(soy.p1) ? <p>{soy.p1}</p> : null}
          {(soy.p2) ? <p>{soy.p2}</p> : null}
          {(soy.p3) ? <p>{soy.p3}</p> : null}
          {(soy.p4) ? <p>{soy.p1}</p> : null}
          {(soy.p5) ? <p>{soy.p5}</p> : null}

      </div>
    )
  }
}
