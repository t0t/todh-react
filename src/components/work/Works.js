import React from 'react'
import Rebase from 're-base'
import Work from './Work'
import { IconLoader } from '../Icons'

const base = Rebase.createClass('https://sergiofores.firebaseio.com/')

export default class Works extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      works: [],
      loading: true,
      template: {}
    };
  }

  componentDidMount(){
    this.ref = base.fetch('works', {
      context: this,
      asArray: true,
      then(data) {
        this.setState({
          loading: false,
          works: data
        })
      }
    });
    this.tpl = base.fetch('site/header', {
      context: this, asArray: false,
      then(data) {
        this.setState({ template: data })
      }
    });
  }

  render() {
    let titulo = this.state.template.works_titulo;
    let subtitulo = this.state.template.works_subtitulo;

    if (this.state.loading === true) {
      return  <IconLoader />
    }
    else {
      let worksList = this.state.works.map(function(datos){
      return <Work {...datos} />
    })

      return (
        <section className="Site__section Site__section--works">

          <header className="Site__section__header">
            <h1 className="Site__section__title">{titulo}</h1>
            <p>{subtitulo}</p>
          </header>

          <div className="Posts__list">{worksList}</div>

        </section>
      )
    }
  }
}
