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
      <div>
        <h2> </h2>
        <Slider {...settings}>
          <div className=" mx-20 font-semibold text-2xl flex ">
            <h3>เรียนรู้คำว่า งาน ของจริงในการทำงาน</h3>
          </div>
          <div className=" mx-20 font-semibold text-2xl flex ">
            <h3>เรียนรู้ผู้อื่น รู้จักสังคมการทำงาน</h3>
          </div>
          <div className=" mx-20 font-semibold text-2xl flex ">
            <h3>เรียนรู้อัพสกิลที่ใช้ในการทำงานจริง</h3>
          </div>
        </Slider>
      </div>
    );
  }
}