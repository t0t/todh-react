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
    let header = this.state.template.work;

    if (this.state.loading === true) {
      return  <IconLoader />
    }
    else {
      let worksList = this.state.works.map(function(datos){
      return <Work {...datos} />
    })
      
      return (
        <section className="Site__section Site__section--works">

          <h1>{header}</h1>
          {worksList}

        </section>
      )
    }
  }
}
