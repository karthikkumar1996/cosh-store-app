import React from "react";
import { useSelector } from "react-redux";
import CarouselTool from "./Display/Carousel";

import { AppState } from "../redux/store";
import { TabSection } from "./Display/TabSection";
import { SECTIONS } from "../redux/section/types";
import ToolBar from "./ToolBar/ToolBar";

import "./Home.scss";

const Home: React.FunctionComponent = () => {
  const sectionStore = useSelector((store: AppState) => store.section);

  return (
    <div className="Home">
      <ToolBar />
      <TabSection />
      {sectionStore.currentActivePage === SECTIONS.GALLERY_PAGE ? (
        <div className="carousel-holder">
          <CarouselTool />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
