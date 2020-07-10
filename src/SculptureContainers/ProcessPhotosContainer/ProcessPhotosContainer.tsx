import React from "react";
import "./processPhotosContainer.css";
import NoName from "../../assets/images/process-photos/no-name.png";

export const ProcessPhotosContainer: React.FC = () => {
  return (
    <div className="process-photos-container">
      <div className="process-photos-row">
        <ul className="inner-row">
          <li>
            <div className="process-photos-item">
              <img className="process-image" src={NoName} />
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
