import React, { Component } from 'react';
import Rebase from 're-base';
import { Link } from 'react-router';

import logo from '../../icons/logo.svg';
import bg from '../../assets/img/bg.jpg'
import bgHago from '../../assets/icons/bg-hago.svg'
import bgSiento from '../../assets/icons/bg-hago.svg'
import bgPienso from '../../assets/icons/bg-mountain.svg'


var base = Rebase.createClass('https://sergiofores.firebaseio.com/');


export default class Home extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      home: []
    };
  }

  componentDidMount(){
    this.ref = base.fetch('home', {
      context: this,
      asArray: false,
      then(data) {
        this.setState({
          home: data
        })
      }
    });
  }

  render() {
    let path = process.env.PUBLIC_URL;
    let home = this.state.home;

    return (
      <div className="Site__section">

        <div className="Site__section__header  Site__section--siento"
        style={{backgroundImage: 'url(' + bgSiento + ')'}}>
          <div className="home-img">
            <img src={logo} className="App-logo" alt="logo" /> v0.1
          </div>
          <h1 className="Site__section__title">
            {home.title}
          </h1>
          <div className="home-wrap">
            {home.p1 && <p>{home.p1}</p>}
            {home.boton && <button className="btn"><Link to="/todh" activeClassName="active">{home.boton}</Link></button>}
          </div>
        </div>

        <section className="Site__section  Site__section__header  Site__section--hago"
        style={{backgroundImage: 'url(' + bgHago + ')'}}>

          <h1 className="Site__section__title">
            {home.title_hago}
          </h1>
          <div className="container">
            {home.descripcion_hago && <p>{home.descripcion_hago}</p>}
          </div>
          {home.boton_hago && <button className="btn">
          <Link to="/works" activeClassName="active"> {home.boton_hago} </Link>
          </button>}
        </section>

        <div className="Site__section  Site__section__header  Site__section--pienso"
        style={{backgroundImage: 'url(' + bgPienso + ')'}}>
          <h1 className="Site__section__title">
          {home.title_pienso}
          </h1>
          <div className="container">
            {home.descripcion_pienso && <p>{home.descripcion_pienso}</p>}
          </div>
          {home.boton_pienso && <button className="btn"><Link to="/blog" activeClassName="active"> {home.boton_pienso} </Link></button>}
        </div>

        <div className="Site__section  Site__section__header  Site__section--digo"
        style={{backgroundImage: 'url(' + bgHago + ')'}}>
          <h1 className="Site__section__title">
            {home.title_siento}
          </h1>
          <div className="container">
            {home.descripcion_siento && <p>{home.descripcion_siento}</p>}
          </div>
          {home.boton_siento && <button className="btn"><Link to="/services" activeClassName="active"> {home.boton_siento} </Link></button>}
        </div>

      </div>
    )
  }
}
