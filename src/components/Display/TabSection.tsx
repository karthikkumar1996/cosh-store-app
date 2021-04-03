import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";

import "./TabSection.scss";
import { AppState } from "../../redux/store";
import { SECTIONS } from "../../redux/section/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export const TabSection = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const sectionStore = useSelector((store: AppState) => store.section);

  return (
    <div className={classes.root + " section-menu"}>
      <Button
        color="primary"
        variant={
          sectionStore.currentActivePage === SECTIONS.HOME_PAGE
            ? "outlined"
            : "text"
        }
        onClick={() => {
          dispatch({ type: "HOME_PAGE" });
        }}
      >
        Home
      </Button>
      <Button
        color="primary"
        variant={
          sectionStore.currentActivePage === SECTIONS.GALLERY_PAGE
            ? "outlined"
            : "text"
        }
        onClick={() => {
          dispatch({ type: "GALLERY_PAGE" });
        }}
      >
        Art Work
      </Button>
      <Button
        color="primary"
        variant={
          sectionStore.currentActivePage === SECTIONS.ABOUT_PAGE
            ? "outlined"
            : "text"
        }
        onClick={() => {
          dispatch({ type: "ABOUT_PAGE" });
        }}
      >
        About Artist
      </Button>
    </div>
  );
};
