import React from 'react';
import Slider from 'react-slick';

export default class Project2 extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="content-container project">
        <h2>Stickley Table</h2>
        <Slider {...settings}>
          <div><img className="slider-img" src="../assets/project_2.0.jpg"/></div>
          <div><img className="slider-img" src="../assets/project_2.1.jpg"/></div>
          <div><img className="slider-img" src="../assets/project_2.2.jpg"/></div>
          <div><img className="slider-img" src="../assets/project_2.3.jpg"/></div>
          <div><img className="slider-img" src="../assets/project_2.4.jpg"/></div>
        </Slider>
      </div>
    );
  };
}
