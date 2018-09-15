import React from "react";
import Slider from "react-slick";
import Slide from "./Slide.js";

export default class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numSlides: 0,
      currentSlide: 0
    }

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  prev() {
    this.slider.slickPrev();
  }

  componentDidMount() {
    this.setState({
      numSlides: this.slider.props.children.length,
    });
  }

  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 250,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: false,
      beforeChange: (current, next) => this.setState({ currentSlide: next }),

    };
    return (
      <div class="testimonials-slider-container">
        <div className='slide-controls'>
          <div className={'slide-control slide-prev ' + (this.state.currentSlide === 0 ? 'disabled' : '')} onClick={this.prev}><img src="/assets/img/icon/arrow-left.svg" /></div>
          <div className={'slide-control slide-next ' + (this.state.currentSlide === (this.state.numSlides - 3)  ? 'disabled' : '')} onClick={this.next}><img src="/assets/img/icon/arrow-right.svg" /></div>
        </div>
        <Slider ref={c => (this.slider = c)} {...settings} className='slider'>
          <Slide color="#3BD3F4" image="josip.png" name="Josip Rajković" position="CEO of Apple" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus lorem condimentum, pretium nisl lacinia, feugiat felis. Integer ultricies mi." />
          <Slide color="#F4C03B" image="miha.jpg" name="Miha Vidakovič" position="Klošar" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus lorem condimentum, pretium nisl lacinia, feugiat felis. Integer ultricies mi." />
          <Slide color="#F43B3B" image="nejc.jpg" name="Nejc Kralj" position="CEO of Mañana" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus lorem condimentum, pretium nisl lacinia, feugiat felis. Integer ultricies mi." />
          <Slide color="#3BD3F4" image="josip.png" name="Josip Rajković" position="CEO of Apple" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus lorem condimentum, pretium nisl lacinia, feugiat felis. Integer ultricies mi." />
          <Slide color="#F4C03B" image="miha.jpg" name="Miha Vidakovič" position="Klošar" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus lorem condimentum, pretium nisl lacinia, feugiat felis. Integer ultricies mi." />
          <Slide color="#F43B3B" image="nejc.jpg" name="Nejc Kralj" position="CEO of Mañana" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus lorem condimentum, pretium nisl lacinia, feugiat felis. Integer ultricies mi." />
        </Slider>
      </div>
    );
  }
}
