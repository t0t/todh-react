import React, { Component } from 'react';
// import { Link } from 'react-router'

export default class Post extends Component {

  constructor() {
    super();
    this.state = {
      showAll: false,
      contador: 0
    }
  }

  showPost(){
    this.setState({
      showAll: !this.state.showAll
    })
  }

  render() {
    /*
      Al clicar en cada botón deberia:
        - Setear el actual showAll a true
        - Setear los showAll de los otros Posts a false
        - enrutar correctamente su href a #top (da error en consola)
    */
    return (
      <div className="Posts__list">

        {this.state.showAll &&
        <article id="top" className="Posts__list__item--opened">
          <hgroup>
          <h1>{this.props.title}</h1>
          <h4>{this.props.desc}</h4>
          </hgroup>
          {(this.props.img1) ? <img src={this.props.img1} role="presentation" /> : null}
          {(this.props.p01) ? <p>{this.props.p01}</p> : null}
          {(this.props.p02) ? <p>{this.props.p02}</p> : null}
          {(this.props.p03) ? <p>{this.props.p03}</p> : null}
          {(this.props.p04) ? <p>{this.props.p04}</p> : null}
          {(this.props.p05) ? <p>{this.props.p05}</p> : null}
          {(this.props.p06) ? <p>{this.props.p06}</p> : null}
          {(this.props.p07) ? <p>{this.props.p07}</p> : null}
          {(this.props.p08) ? <p>{this.props.p08}</p> : null}
          {(this.props.p09) ? <p>{this.props.p09}</p> : null}
          {(this.props.p10) ? <p>{this.props.p10}</p> : null}
          {(this.props.p11) ? <p>{this.props.p11}</p> : null}
          {(this.props.p12) ? <p>{this.props.p12}</p> : null}
          {(this.props.p13) ? <p>{this.props.p13}</p> : null}
          {(this.props.p14) ? <p>{this.props.p14}</p> : null}
        </article>}

        {!this.state.showAll &&
        <article className="Posts__list__item">
          {(this.props.title) ? <h3 className="Article-header">{this.props.title}</h3> : null}
          {(this.props.img1) ? <img src={this.props.img1} role="presentation" /> : null}

          <button className="btn">
            <a href="#top" onClick={this.showPost.bind(this)}> {this.props.more_btn} </a>
          </button>
        </article>}

      </div>
    );
  }
}
