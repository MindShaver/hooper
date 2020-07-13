import React from "react";
import "./aboutContainer.css";
import { AboutData } from "./aboutData";

export const AboutContainer = () => {
  return (
    <div className="about-container">
      <div className="row">
        <div className="left-col">
          <div className="left-side-group">
            <div className="mobile-image-group">
              <img
                className="mobile-about-image"
                src={AboutData.aboutImage}
                alt="Wesley Hooper"
              />
            </div>
            {AboutData.aboutBio.map((paragraph: string) => {
              return <div className="paragraph-item"> {paragraph} </div>;
            })}
          </div>
        </div>
        <div className="right-col">
          <div className="right-side-group">
            <div className="image-group">
              <img
                className="about-image"
                src={AboutData.aboutImage}
                alt="Wesley Hooper"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
