import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./mugCarousel.css";

export const MugCarousel = () => {
  return (
    <div className="carosuel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/mug-carousel/mug-1.png"}
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/mug-carousel/mug-2.png"}
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/mug-carousel/mug-3.png"}
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/mug-carousel/mug-4.png"}
          />
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + "/images/mug-carousel/mug-5.png"}
          />
        </div>
      </Carousel>
    </div>
  );
};
