import React, { Component } from 'react';

export default class Work extends Component {
  render() {
    return (
      <article className="Works__item Site__section__article">

        { (this.props.header) ?

          <h4 className="Works__item__title">
            {this.props.title}
          </h4> : null }

        { (this.props.image) ?

          <figure className="Works__figure">

            <img src={this.props.image} role="presentation" />

            <figcaption className="Works__figure__caption">
              {this.props.desc}
            </figcaption>

          </figure> : null }

      </article>
    );
  }
}
