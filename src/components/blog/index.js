import React, { Component } from 'react'
import Post from './Post'
import bgPienso from '../../assets/icons/bg-mountain.svg'

// import { IconLoader } from '../Icons'
import Rebase from 're-base'
let base = Rebase.createClass('https://sergiofores.firebaseio.com/')


export default class Blog extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      Posts: [],
      template: {}
    };
  }

  componentDidMount(){
    this.ref = base.fetch('blog', {
      context: this,
      asArray: true,
      then(data) {
        this.setState({
          Posts: data
        })
      }
    });
    this.tpl = base.fetch('site/header', {
      context: this,
      asArray: false,
      then(data) {
        this.setState({
          template: data
        })
        console.log(data);
      }
    });
  }

  render() {
    let titulo = this.state.template.blog_titulo;
    let subtitulo = this.state.template.blog_subtitulo;

    return (
      <section className="Site__section">
        <header className="Site__section__header Site__section--pienso"
        style={{backgroundImage: 'url(' + bgPienso + ')'}}>
          <h1 className="Site__section__title">{titulo}</h1>
          <p>{subtitulo}</p>
        </header>
        {this.state.Posts.map((data) => {
          return <Post {...data} />
        })}
      </section>
    )
  }
}
