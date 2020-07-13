import React from "react";
import "./likeNoTomorrowContainer.css";

export const LikeNoTomorrowContainer: React.FC = () => {
  return (
    <div className="like-no-tomorrow-container">
      <div className="like-no-tomorrow-row">
        <ul className="inner-row">
          <li>
            <div className="like-no-tomorrow-item">
              <img
                className="single-image"
                src={
                  process.env.PUBLIC_URL +
                  "/images/like-no-tomorrow/no-name.png"
                }
              />
              <p>
                <em>No Name</em>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
