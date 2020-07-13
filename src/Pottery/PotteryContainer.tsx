import React from "react";
import "./potteryContainer.css";
import { Link } from "react-router-dom";
import { PotteryData } from "./PotteryData";
import { InterestedTag } from "../InterestedTag/InterestedTag";

export const PotteryContainer = () => {
  return (
    <div className="pottery-container">
      <div className="row">
        <div className="pottery-col">
          <div className="main-group">
            {PotteryData.map((thumbnail) => {
              return (
                <div>
                  <Link to={thumbnail.linkTo}>
                    <img src={thumbnail.coverImage} alt={thumbnail.altText} />
                    <p>{thumbnail.description}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="pottery-row">
        <div className="pottery-col">
          <InterestedTag />
        </div>
      </div>
    </div>
  );
};
