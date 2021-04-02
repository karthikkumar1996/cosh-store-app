import React from "react";
import CarouselTool from "./Display/Carousel";
import "./Home.scss";
import ToolBar from "./ToolBar/ToolBar";

const Home: React.FunctionComponent = () => {
  return (
    <div className="Home">
      <ToolBar/>
      <div className="carousel-holder">
        <CarouselTool />
      </div>
    </div>
  );
};

export default Home;
