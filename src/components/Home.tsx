import React from "react";
import { useSelector } from "react-redux";
import CarouselTool from "./Gallery/Carousel";

import { AppState } from "../redux/store";
import { TabSection } from "./ToolBar/TabSection";
import { SECTIONS } from "../redux/section/types";
import ToolBar from "./ToolBar/ToolBar";

import "./Home.scss";
import { AboutArtist } from "./About/AboutArtist";

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
      ) : sectionStore.currentActivePage === SECTIONS.ABOUT_PAGE ? (
        <AboutArtist />
      ) : null}
    </div>
  );
};

export default Home;
