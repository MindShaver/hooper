import React from "react";
import { PlatterCarousel } from "../PlatterCarousel/PlatterCarousel";
import "./platterContainer.css";

export const PlatterContainer: React.FC = () => {
  return (
    <div className="platter-container">
      <div className="carousel">
        <PlatterCarousel />
      </div>
    </div>
  );
};
