import React, { Component } from 'react';

export default class ServicesEntry extends Component {
  render() {
    return (
      <dl>
        {(this.props.header) ? <dt>{this.props.header}</dt> : null}
        {(this.props.p1) ? <dd>{this.props.p1}</dd> : null}
        {(this.props.p2) ? <dd>{this.props.p2}</dd> : null}
        {(this.props.p3) ? <dd>{this.props.p3}</dd> : null}
        {(this.props.p4) ? <dd>{this.props.p4}</dd> : null}
        {(this.props.p5) ? <dd>{this.props.p5}</dd> : null}
        {(this.props.p6) ? <dd>{this.props.p6}</dd> : null}
      </dl>
    );
  }
}
