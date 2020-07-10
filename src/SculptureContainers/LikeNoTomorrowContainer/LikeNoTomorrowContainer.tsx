import React from "react";
import "./likeNoTomorrowContainer.css";
import NoName from "../../assets/images/like-no-tomorrow/no-name.png";

export const LikeNoTomorrowContainer: React.FC = () => {
  return (
    <div className="like-no-tomorrow-container">
      <div className="like-no-tomorrow-row">
        <ul className="inner-row">
          <li>
            <div className="like-no-tomorrow-item">
              <img className="single-image" src={NoName} />
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
