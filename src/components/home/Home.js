import React, { Component } from 'react';
import Rebase from 're-base';
import { Link } from 'react-router';

import logo from '../../icons/logo.svg';

var base = Rebase.createClass('https://sergiofores.firebaseio.com/');


export default class Home extends Component {
  constructor(props) {
    super(props);
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
    console.log(this.state.home);
    let home = this.state.home;
    var bgHagoUrl = "./assets/icons/bg-hago.svg";
    var bgMountainUrl = "./assets/icons/bg-mountain.svg";
    var bgHago = {
      backgroundImage: 'url(' + bgHagoUrl + ')'
    };
    var bgMountain = {
      backgroundImage: 'url(' + bgMountainUrl + ')'
    };
    return (
      <article className="Home">

        <div className="Site__section Site__section--home">

          <div className="home-img"><img src={logo} className="App-logo" alt="logo" /></div>
          <h1 className="home-title">{home.title}</h1>
          <div className="home-wrap">
            {(home.p1) ? <p>{home.p1}</p> : null}
            {(home.boton) ? <button className="btn"><Link to="/todh" activeClassName="active">{home.boton}</Link></button> : null}
          </div>

        </div>

        <div className="Site__section  Site__section--hago"
        style={bgHago}
        >

          <h1>
          {home.title_hago}
          </h1>
          <div className="container">
            {(home.descripcion_hago) ? <p>{home.descripcion_hago}</p> : null}
          </div>
          {(home.boton_hago) ? <button className="btn">
          <Link to="/works" activeClassName="active"> {home.boton_hago} </Link>
          </button> : null}
        </div>

        <div className="Site__section  Site__section--pienso"
        style={bgMountain}
        >
          <h1>
          {home.title_pienso}
          </h1>
          <div className="container">
            {(home.descripcion_pienso) ? <p>{home.descripcion_pienso}</p> : null}
          </div>
          {(home.boton_pienso) ? <button className="btn"><Link to="/blog" activeClassName="active"> {home.boton_pienso} </Link></button> : null}
        </div>

        <div className="Site__section  Site__section--siento"
        style={bgHago}
        >
          <h1>
            {home.title_siento}
          </h1>
          <div className="container">
            {(home.descripcion_siento) ? <p>{home.descripcion_siento}</p> : null}
          </div>
          {(home.boton_siento) ? <button className="btn"><Link to="/services" activeClassName="active"> {home.boton_siento} </Link></button> : null}
        </div>

      </article>
    )
  }
}
