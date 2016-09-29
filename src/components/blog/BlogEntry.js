import React, { Component } from 'react';
import BlogSingle from './BlogSingle'


export default class BlogEntry extends Component {

  constructor() {
    super();
    this.state = {
      showAll: false
    }
  }

  onClick(e){
    e.preventDefault();
    this.setState({showAll: !this.state.showAll})
  }

  render() {
    if (this.state.showAll === true) {
      return (
        <div>
          <BlogSingle/>
          <h1>{this.props.name}</h1>
          {(this.props.img1) ? <img src={this.props.img1} role="presentation" /> : null}
          <p>{this.props.p1}</p>
          <p>{this.props.p2}</p>
          <p>{this.props.p3}</p>
          <button className="btn">
            <a onClick={this.onClick.bind(this)}>Disminuir</a>
          </button>
        </div>
      )
    }

    return (
      <li className="Posts__list__item">
        {(this.props.name) ? <h3 className="Article-header">{this.props.name}</h3> : null}
        {(this.props.img1) ? <img src={this.props.img1} role="presentation" /> : null}
        {(this.props.desc) ? <p>{this.props.desc}</p> : null}

        <button className="btn">
          <a onClick={this.onClick.bind(this)}>Agrandar</a>
        </button>

      </li>
    );
  }
}
