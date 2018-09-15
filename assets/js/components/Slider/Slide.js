import React from "react";

export default class Slide extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className='slide'>
        <div className='avatar'>
          <img src={"assets/img/testimonials/" + this.props.image} />
          <div className='quote' style={{backgroundColor: this.props.color}}>
            <img src="assets/img/icon/quote.png" />
          </div>
        </div>
        <div className='human'>
          <h4 style={{color: this.props.color}}>{this.props.name}</h4>
          <h5>{this.props.position}</h5>
        </div>
        <div className='devider'>
        </div>
        <div className='content'>
          <p>{this.props.text}</p>
        </div>
        <div className="bottbom-boder"></div>
      </div>
    );
  }
}
