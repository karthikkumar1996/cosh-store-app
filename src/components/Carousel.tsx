import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import './Carousel.scss'

class CarouselTool extends Component {
  render() {
    return (
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        <div>
          <img src="assets/images/1.jpg" alt="img not available" />
          <p className="legend">Buy Now!</p>
        </div>
        <div>
          <img src="assets/images/2.jpg" alt="img not available" />
          <p className="legend">Buy Now!</p>
        </div>
        <div>
          <img src="assets/images/3.jpg" alt="img not available" />
          <p className="legend">Buy Now!</p>
        </div>
      </Carousel>
    );
  }
}

export default CarouselTool;
