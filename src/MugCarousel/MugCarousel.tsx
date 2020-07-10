import React from "react";
import { Carousel } from "react-responsive-carousel";
import ImageOne from "../assets/images/mug-carousel/mug-1.png";
import ImageTwo from "../assets/images/mug-carousel/mug-2.png";
import ImageThree from "../assets/images/mug-carousel/mug-3.png";
import ImageFour from "../assets/images/mug-carousel/mug-4.png";
import ImageFive from "../assets/images/mug-carousel/mug-5.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./mugCarousel.css";

export const MugCarousel = () => {
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
