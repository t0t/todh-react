import React, { Component } from 'react'
import Slide from './Slide'
import Rebase from 're-base'

import { IconArrowLeft } from '../Icons'
import { IconArrowRight } from '../Icons'

var base = Rebase.createClass('https://sergiofores.firebaseio.com/');

export default class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      slide: 0
    };
  }

  componentDidMount() {
    this.ref = base.bindToState('photos', {
      context: this,
      state: 'slides',
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  handlePrevSlide() {
    const totalSlides = this.state.slides.length;
    if ( this.state.slide < 1 ) {
      this.setState({ slide: totalSlides - 1 })
    } else {
      this.setState({ slide: this.state.slide - 1 })
    }
  }

  handleNextSlide() {
    const totalSlides = this.state.slides.length;
    if ( this.state.slide < totalSlides - 1) {
      this.setState({ slide: this.state.slide + 1 })
    } else {
      this.setState({ slide: 0 })
    }
  }

  render() {
    let slides = this.state.slides.map( (data) => {
      return <Slide {...data} />
    })
    let slide = slides[this.state.slide]
    return (
      <div className="slider">
        <button onClick={this.handlePrevSlide.bind(this)}> <IconArrowLeft /> </button>
        {slide}
        <button onClick={this.handleNextSlide.bind(this)}> <IconArrowRight /> </button>
      </div>
    );
  }
}
