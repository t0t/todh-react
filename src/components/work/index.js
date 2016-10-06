import React from 'react'
import Rebase from 're-base'
import Work from './Work'
import bgHago from '../../assets/icons/bg-hago.svg'

// import { IconLoader } from '../Icons'

const base = Rebase.createClass('https://sergiofores.firebaseio.com/')

export default class Works extends React.Component {

  constructor(...args){
    super(...args);
    this.state = {
      works: [],
      template: {}
    };
  }

  componentDidMount(){
    this.ref = base.fetch('works', {
      context: this,
      asArray: true,
      then(data) {
        this.setState({
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

      return (
        <section className="Site__section">

          <header className="Site__section__header  Site__section--hago" style={{backgroundImage: 'url(' + bgHago + ')'}}>
            <h1 className="Site__section__title">{titulo}</h1>
            <p>{subtitulo}</p>
          </header>

          <div className="Posts__list">
            {this.state.works.map( (datos) => {
              return <Work {...datos} />
            })}
          </div>

        </section>
      )
    }
  }
