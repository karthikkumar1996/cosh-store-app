import React, { useState } from "react";
import "./App.css";
import "./theme.scss";

import Home from "./components/Home";
import { useSelector } from "react-redux";
import {AppState} from "./redux/store";

const App = () => {
  const theme = useSelector(
    (store: AppState) => store.theme
  );
  return (
    <div className={`App ${theme.currentTheme}`}>
      <Home />
    </div>
  );
};

export default App;
