import React, { Component } from 'react'
import Rebase from 're-base'

import ConocimientosEntry from './ConocimientosEntry'
import HabilidadesEntry from './HabilidadesEntry'
import Historia from '../historia/Historia'
import Slider from '../slider/Slider'
import Soy from '../soy/Soy'

var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habilidades: [],
      conocimientos: [],
      template: {}
    };
  }

  componentDidMount() {
    this.ref = base.fetch('habilidades', {
      context: this, asArray: true,
      then(data) {
        this.setState({
          habilidades: data
        })
      }
    });

    this.ref = base.fetch('conocimientos', {
      context: this, asArray: true,
      then(data) {
        this.setState({
          conocimientos: data
        })
      }
    });

    this.tpl = base.fetch('site/header', {
      context: this, asArray: false,
      then(data) {
        this.setState({
          template: data
        })
      }
    });
  }

  render() {
    let headerHabilidades = this.state.template.habilidades;
    let headerConocimientos = this.state.template.conocimientos;

    let habilidades = this.state.habilidades.map( function(data) {
      return <HabilidadesEntry {...data} />
    });
    let conocimientos = this.state.conocimientos.map( function(data) {
      return <ConocimientosEntry {...data} />
    });

    return (
      <section className="Site__section Site__section--services">

        <Soy />

        <Slider />
        <div className="Site__section__content">
          <Historia />
        </div>

        <div className="Widget Widget--list">
        <h3 className="Widget__title">{headerConocimientos}</h3>
        {conocimientos}
        </div>

        <div className="Widget Widget--list">
        <h3 className="Widget__title">{headerHabilidades}</h3>
        {habilidades}
        </div>

      </section>
    )
  }
}
