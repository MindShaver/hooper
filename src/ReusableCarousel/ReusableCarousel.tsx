import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ICarouselItem } from "../Domain/ICarouselItem";
import "./reusableCarousel.css";

interface IReusableCarouselProps {
  items: ICarouselItem[];
}

export const ReusableCarousel: React.FC<IReusableCarouselProps> = ({
  items,
}) => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <Carousel infiniteLoop useKeyboardArrows autoPlay>
          {items.map((item) => {
            return (
              <div>
                <img
                  src={process.env.PUBLIC_URL + item.imgPath}
                  alt={item.altText}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
