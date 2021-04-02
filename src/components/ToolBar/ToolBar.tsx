import React from "react";
import ThemeToggle from "./ThemeToggle";
import "./ToolBar.scss";

const ToolBar: React.FunctionComponent = () => {
  return (
    <div className="toggle">
      <ThemeToggle />
    </div>
  );
};

export default ToolBar;
