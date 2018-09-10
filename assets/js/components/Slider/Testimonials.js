import React from "react";
import Slider from "react-slick";

export default class Testimonials extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1

    };
    return (
      <Slider {...settings} className='slider'>
        <div className='slide'>
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
        <div className='slide'>
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
        <div className='slide'>
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
        <div className='slide'>
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
        <div className='slide'>
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
        <div className='slide'>
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
    );
  }
}
