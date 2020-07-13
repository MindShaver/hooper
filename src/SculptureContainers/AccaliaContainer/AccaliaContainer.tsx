import React from "react";
import "./accaliaContainer.css";

export const AccaliaContainer: React.FC = () => {
  return (
    <div className="accalia-container">
      <div className="accalia-row">
        <ul className="inner-row">
          <li>
            <div className="accalia-item">
              <img
                src={process.env.PUBLIC_URL + "/images/accalia/no-name.png"}
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
