import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className=" bg-[url('/img/space.jpg')]">
        
        <h2 className=" mt-10"> <img src=" /img/logo.png" alt="" /></h2>
        <Slider {...settings}>
          <div>
            <h3><img className="mx-auto" src="/img/c01.png" alt="" /></h3>
          </div>
          <div>
            <h3><img className="mx-auto"src="/img/c02.png" alt="" /></h3>
          </div>
          <div>
            <h3><img className="mx-auto"src="/img/c03.png" alt="" /></h3>
          </div>
          <div>
            <h3><img className="mx-auto"src="/img/c04.png" alt="" /></h3>
          </div>
          <div>
            <h3><img className="mx-auto"src="/img/c05.png" alt="" /></h3>
          </div>
          <div>
            <h3><img className="mx-auto"src="/img/c06.png" alt="" /></h3>
          </div>
        </Slider>
      </div>
    );
  }
}