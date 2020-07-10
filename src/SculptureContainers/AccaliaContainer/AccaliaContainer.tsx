import React from "react";
import "./accaliaContainer.css";
import NoName from "../../assets/images/accalia/no-name.png";

export const AccaliaContainer: React.FC = () => {
  return (
    <div className="accalia-container">
      <div className="accalia-row">
        <ul className="inner-row">
          <li>
            <div className="accalia-item">
              <img src={NoName} />
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
