import React from "react";
import { MugCarousel } from "../MugCarousel/MugCarousel";
import "./mugContainer.css";

export const MugContainer: React.FC = () => {
  return (
    <div className="mug-container">
      {/* <MugCarousel /> */}
      <div className="wrapper">
        <div className="carousel">
          <MugCarousel />
        </div>
      </div>
    </div>
  );
};
