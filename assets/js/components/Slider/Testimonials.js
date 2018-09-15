import React from "react";
import Slider from "react-slick";

export default class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }
  next() {
    console.log(this.slider);
    this.slider.slickNext();
  }
  prev() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 250,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true

    };
    return (
      <div class="testimonials-slider-container">
        <div className='slide-controls'>
          <div className='slide-control slide-prev' onClick={this.prev}><ion-icon name="arrow-dropleft"></ion-icon></div>
          <div className='slide-control slide-next' onClick={this.next}><ion-icon name="arrow-dropright"></ion-icon></div>
        </div>
        <Slider ref={c => (this.slider = c)} {...settings} className='slider'>
          <div className='slide' style={{width: '500px'}}>
            <div className='avatar'>
              <img src="assets/img/testimonials/josip.png" />
              <div className='quote'>
                <img src="assets/img/icon/quote.png" />
              </div>
            </div>
            <div className='human'>
              <h4>Josip Rajković</h4>
              <h5>CEO of Apple</h5>
            </div>
            <div className='devider'>
            </div>
            <div className='content'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus lorem condimentum, pretium nisl lacinia, feugiat felis. Integer ultricies mi.</p>
            </div>
            <div className="bottbom-boder"></div>

          </div>
          <div className='slide' style={{width: '500px'}}>
            <div className='avatar'>
              <img src="assets/img/testimonials/josip.png" />
              <div className='quote'>
                <img src="assets/img/icon/quote.png" />
              </div>
            </div>
            <div className='human'>
              <h4>Josip Rajković</h4>
              <h5>CEO of Apple</h5>
            </div>
            <div className='devider'>
            </div>
            <div className='content'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus lorem condimentum, pretium nisl lacinia, feugiat felis. Integer ultricies mi.</p>
            </div>
            <div className="bottbom-boder"></div>

          </div>
          <div className='slide' style={{width: '500px'}}>
            <div className='avatar'>
              <img src="assets/img/testimonials/josip.png" />
              <div className='quote'>
                <img src="assets/img/icon/quote.png" />
              </div>
            </div>
            <div className='human'>
              <h4>Josip Rajković</h4>
              <h5>CEO of Apple</h5>
            </div>
            <div className='devider'>
            </div>
            <div className='content'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus lorem condimentum, pretium nisl lacinia, feugiat felis. Integer ultricies mi.</p>
            </div>
            <div className="bottbom-boder"></div>

          </div>
          <div className='slide' style={{width: '500px'}}>
            <div className='avatar'>
              <img src="assets/img/testimonials/josip.png" />
              <div className='quote'>
                <img src="assets/img/icon/quote.png" />
              </div>
            </div>
            <div className='human'>
              <h4>Josip Rajković</h4>
              <h5>CEO of Apple</h5>
            </div>
            <div className='devider'>
            </div>
            <div className='content'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus lorem condimentum, pretium nisl lacinia, feugiat felis. Integer ultricies mi.</p>
            </div>
            <div className="bottbom-boder"></div>

          </div>
          <div className='slide' style={{width: '500px'}}>
            <div className='avatar'>
              <img src="assets/img/testimonials/josip.png" />
              <div className='quote'>
                <img src="assets/img/icon/quote.png" />
              </div>
            </div>
            <div className='human'>
              <h4>Josip Rajković</h4>
              <h5>CEO of Apple</h5>
            </div>
            <div className='devider'>
            </div>
            <div className='content'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus lorem condimentum, pretium nisl lacinia, feugiat felis. Integer ultricies mi.</p>
            </div>
            <div className="bottbom-boder"></div>

          </div>
          <div className='slide' style={{width: '500px'}}>
            <div className='avatar'>
              <img src="assets/img/testimonials/josip.png" />
              <div className='quote'>
                <img src="assets/img/icon/quote.png" />
              </div>
            </div>
            <div className='human'>
              <h4>Josip Rajković</h4>
              <h5>CEO of Apple</h5>
            </div>
            <div className='devider'>
            </div>
            <div className='content'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas maximus lorem condimentum, pretium nisl lacinia, feugiat felis. Integer ultricies mi.</p>
            </div>
            <div className="bottbom-boder"></div>

          </div>

        </Slider>
      </div>
    );
  }
}
