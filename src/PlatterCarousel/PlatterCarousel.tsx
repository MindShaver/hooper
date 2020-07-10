import React from "react";
import { Carousel } from "react-responsive-carousel";
import ImageOne from "../assets/images/platter-carousel/platter-1.png";
import ImageTwo from "../assets/images/platter-carousel/platter-2.png";
import ImageThree from "../assets/images/platter-carousel/platter-3.png";
import ImageFour from "../assets/images/platter-carousel/platter-4.png";
import ImageFive from "../assets/images/platter-carousel/platter-5.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./platterCarousel.css";

export const PlatterCarousel = () => {
  return (
    <div className="carosuel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src={ImageOne} />
        </div>
        <div>
          <img src={ImageTwo} />
        </div>
        <div>
          <img src={ImageThree} />
        </div>
        <div>
          <img src={ImageFour} />
        </div>
        <div>
          <img src={ImageFive} />
        </div>
      </Carousel>
    </div>
  );
};
