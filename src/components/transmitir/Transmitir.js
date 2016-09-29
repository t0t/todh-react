import React, { Component } from 'react'
import Rebase from 're-base'
import { IconHeart } from '../Icons'
import { Link } from 'react-router'

var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class Transmitir extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transmitir: []
    };
  }

  componentDidMount(){
    this.ref = base.fetch('transmitir', {
      context: this,
      asArray: false,
      then(data) {
        this.setState({
          transmitir: data
        })
      }
    });
  }

  render() {
    console.log(this.state.transmitir)
    let transmitir = this.state.transmitir;

    return (
      <section className="Home">

        <div className="Site__section__header Site__section__header--home">
          <Link to="/" className=""><IconHeart /></Link>
          <h1 className="home-title">
            {transmitir.title}
          </h1>
          {(transmitir.p1) ? <p>{transmitir.p1}</p> : null}
          {(transmitir.boton) ? <button className="btn">{transmitir.boton}</button> : null}
        </div>

      </section>
    )
  }
}
