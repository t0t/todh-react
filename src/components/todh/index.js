import React, { Component } from 'react'
import Rebase from 're-base'
// import { IconHeart } from '../Icons'

var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class Todh extends Component {

  constructor(...args) {
    super(...args);
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
          {todh.descripcion && <p>{todh.descripcion}</p>}

        </header>

        <div className="Site__section__content">
          {todh.p03 && <h2>{todh.p03}</h2>}
          <dl className="Widget__list">
            <dt>Planificación + Diseño + Desarrollo + Producción</dt>
            <dd>Sketching y Wireframes</dd>
            <dd>Prototipado low/fi y árbol de contenidos</dd>
            <dd>Diseño visual y UI con Sketch</dd>
            <dd>Entorno de desarrollo local con bundle JS</dd>
            <dd>Control de versiones</dd>
            <dd>Entorno de pruebas tanto en desarrollo como producción</dd>
            <dd>Preprocesamiento en Sass</dd>
            <dd>Rich Snippets de SEO</dd>
            <dd>Maquetación atómica y modular por componentes</dd>
            <dd>Arquitectura <abbr title="Single Page Application">SPA</abbr> con ReactJS</dd>
            <dd>Implementación de Firebase como CMS</dd>
            <dd></dd>
          </dl>

          {todh.p04 && <h2>{todh.p04}</h2>}
          <dl className="Widget__list">
            <dt>Especialmente idóneo en ciertos casos</dt>
            <dd>Necesitas validar hipótesis en entornos reales</dd>
            <dd>Quieres asegurarte antes de invertir fuerte en desarrollo.</dd>
            <dd>Quieres reducir costes y riesgos al máximo</dd>
            <dd>Lo quieres "todo" ya y sin letra pequeña</dd>
            <dd>Quieres crecer de forma sostenida</dd>
            <dd>Eres consciente de la importancia de la mejora contínua</dd>
            <dd>Estás montando un equipo multidisciplinar de desarrollo</dd>
            <dd>Quieres optimizar los procesos para invertir más energía en innovar de forma disruptiva</dd>
          </dl>
        </div>

          {todh.p01 && <p>{todh.p01}</p>}
          {todh.p02 && <p>{todh.p02}</p>}
          {todh.p05 && <p>{todh.p05}</p>}

          {todh.p06 && <h3>{todh.p06}</h3>}
          {todh.p07 && <p>{todh.p07}</p>}
          {todh.p08 && <p>{todh.p08}</p>}
          {todh.p09 && <p>{todh.p09}</p>}
          {todh.p10 && <p>{todh.p10}</p>}
          {todh.p11 && <p>{todh.p11}</p>}
          {todh.p12 && <p>{todh.p12}</p>}

      </section>
    )
  }
}
