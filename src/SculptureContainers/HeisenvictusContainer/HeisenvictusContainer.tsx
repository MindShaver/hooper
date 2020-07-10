import React from "react";
import "./heisenvictusContainer.css";
import NoName from "../../assets/images/heisenvictus/no-name.png";

export const HeisenvictusContainer: React.FC = () => {
  return (
    <div className="heisenvictus-container">
      <div className="heisenvictus-row">
        <ul className="inner-row">
          <li>
            <div className="heisenvictus-item">
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
