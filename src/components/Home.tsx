import React from "react";
import CarouselTool from "./Carousel";
import "./Home.scss";

const Home: React.FunctionComponent = () => {
  return (
    <div className="Home">
      <div className="carousel-holder">
        <CarouselTool />
      </div>
    </div>
  );
};

export default Home;
