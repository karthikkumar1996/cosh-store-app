import React from "react";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import ToggleButton from "@material-ui/lab/ToggleButton";

import { useDispatch } from "react-redux";

export default function Switches() {
  const [state, setState] = React.useState({
    checked: true,
  });
  const dispatch = useDispatch();

  const handleChange = (event: React.FormEvent<HTMLButtonElement>) => {
    setState({ ...state, checked: !state.checked });
    dispatch({
      type: state.checked ? "dark" : "light",
    });
  };

  return (
    <div>
      <ToggleButton
        value={state.checked}
        aria-label="list"
        onChange={(event) => handleChange(event)}
      >
        {state.checked ? <Brightness5Icon /> : <Brightness2Icon style={{ color: "white" }} />}
      </ToggleButton>
    </div>
  );
}
