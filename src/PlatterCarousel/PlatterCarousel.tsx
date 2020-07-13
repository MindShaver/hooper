import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./platterCarousel.css";

export const PlatterCarousel = () => {
  return (
    <div className="carosuel-wrapper">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img
            src={
              process.env.PUBLIC_URL + "/images/platter-carousel/platter-1.png"
            }
          />
        </div>
        <div>
          <img
            src={
              process.env.PUBLIC_URL + "/images/platter-carousel/platter-2.png"
            }
          />
        </div>
        <div>
          <img
            src={
              process.env.PUBLIC_URL + "/images/platter-carousel/platter-3.png"
            }
          />
        </div>
        <div>
          <img
            src={
              process.env.PUBLIC_URL + "/images/platter-carousel/platter-4.png"
            }
          />
        </div>
        <div>
          <img
            src={
              process.env.PUBLIC_URL + "/images/platter-carousel/platter-5.png"
            }
          />
        </div>
      </Carousel>
    </div>
  );
};
