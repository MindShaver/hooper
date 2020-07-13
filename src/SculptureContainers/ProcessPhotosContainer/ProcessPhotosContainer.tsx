import React from "react";
import "./processPhotosContainer.css";

export const ProcessPhotosContainer: React.FC = () => {
  return (
    <div className="process-photos-container">
      <div className="process-photos-row">
        <ul className="inner-row">
          <li>
            <div className="process-photos-item">
              <img
                className="process-image"
                src={
                  process.env.PUBLIC_URL + "/images/process-photos/no-name.png"
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
