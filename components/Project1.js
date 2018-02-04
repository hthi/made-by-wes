import React from 'react';
import Slider from 'react-slick';

export default class Project1 extends React.Component {
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
        <h2>Modern End Table</h2>
        <Slider {...settings}>
          <div><img className="slider-img" src="../assets/project_1.0.jpg"/></div>
          <div><img className="slider-img" src="../assets/project_1.1.jpg"/></div>
          <div><img className="slider-img" src="../assets/project_1.2.jpg"/></div>
        </Slider>
      </div>
    );
  };
}
