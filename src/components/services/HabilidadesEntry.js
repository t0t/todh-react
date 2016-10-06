import React, { Component } from 'react';

export default class HabilidadesEntry extends Component {
  render() {
    return (
      <dl className="Widget__list">
        {(this.props.dt01) ? <dt>{this.props.dt01}</dt> : null}
        {(this.props.dd01) ? <dd>{this.props.dd01}</dd> : null}
        {(this.props.dd02) ? <dd>{this.props.dd02}</dd> : null}
        {(this.props.dd03) ? <dd>{this.props.dd03}</dd> : null}
        {(this.props.dd04) ? <dd>{this.props.dd04}</dd> : null}
        {(this.props.dd05) ? <dd>{this.props.dd05}</dd> : null}
        {(this.props.dd06) ? <dd>{this.props.dd06}</dd> : null}
      </dl>
    );
  }
}
