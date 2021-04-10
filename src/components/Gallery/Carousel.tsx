import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./Carousel.scss";
import PurchaseForm from "./PurchaseForm";
import Paper from "@material-ui/core/Paper";

class CarouselTool extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      purchaseFormOpen: false,
      isImageLoaded: false,
    };
  }
  render() {
    return (
      <>
        <Paper
          elevation={20}
          variant="elevation"
          className={this.state.isImageLoaded ? "show" : "hide"}
        >
          <Carousel
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            autoPlay={false}
            infiniteLoop={true}
          >
            <div>
              <img
                src="assets/images/1.jpg"
                alt="img not available"
                onLoad={() => this.setState({ isImageLoaded: true })}
              />
              <Button
                className="legend"
                variant="contained"
                color="secondary"
                startIcon={<ShoppingCartIcon />}
                onClick={() => this.setState({ purchaseFormOpen: true })}
              >
                Buy Now
              </Button>
            </div>
            <div>
              <img src="assets/images/2.jpg" alt="img not available" />
              <Button
                className="legend"
                variant="contained"
                color="secondary"
                startIcon={<ShoppingCartIcon />}
                onClick={() => this.setState({ purchaseFormOpen: true })}
              >
                Buy Now
              </Button>
            </div>
            <div>
              <img src="assets/images/3.jpg" alt="img not available" />
              <Button
                className="legend"
                variant="contained"
                color="secondary"
                startIcon={<ShoppingCartIcon />}
                onClick={() => this.setState({ purchaseFormOpen: true })}
              >
                Buy Now
              </Button>
            </div>
          </Carousel>
          <PurchaseForm
            open={this.state.purchaseFormOpen}
            handleClose={() => this.setState({ purchaseFormOpen: false })}
            handlePurchase={() => {
              this.setState({ purchaseFormOpen: false });
              console.log("purchased");
            }}
          />
        </Paper>
      </>
    );
  }
}

export default CarouselTool;
