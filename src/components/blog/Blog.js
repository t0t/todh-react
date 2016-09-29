import React, { Component } from 'react'
import BlogEntry from './BlogEntry'
import { IconLoader } from '../Icons'
import Rebase from 're-base'
let base = Rebase.createClass('https://sergiofores.firebaseio.com/')


export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogPosts: [],
      loading: true,
      template: {}
    };
  }

  componentDidMount(){
    this.ref = base.fetch('blog', {
      context: this,
      asArray: true,
      then(data) {
        console.log(data)
        this.setState({
          loading: false,
          blogPosts: data
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
      }
    });
  }

  render() {
    let header = this.state.template.blog;
    if (this.state.loading === true) { return  <IconLoader/> } else {
      let blogPosts = this.state.blogPosts.map(function(data){
          return <BlogEntry {...data} />
      })
      return (
        <section className="Site__section--blog">
          <h1 className="Site__section__title">{header}</h1>
          <ul className="Posts__list">{blogPosts}</ul>
        </section>
      )
    }
  }
}
