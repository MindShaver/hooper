import React from "react";
import "./otherSculpturesContainer.css";

export const OtherSculpturesContainer: React.FC = () => {
  return (
    <div className="other-sculptures-container">
      <div className="other-sculptures-row">
        <ul className="inner-row">
          <li>
            <div className="other-sculptures-item">
              <img
                className="single-image"
                src={
                  process.env.PUBLIC_URL +
                  "/images/other-sculptures/no-name.png"
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
