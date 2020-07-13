import React from "react";
import "./heisenvictusContainer.css";

export const HeisenvictusContainer: React.FC = () => {
  return (
    <div className="heisenvictus-container">
      <div className="heisenvictus-row">
        <ul className="inner-row">
          <li>
            <div className="heisenvictus-item">
              <img
                src={
                  process.env.PUBLIC_URL + "/images/heisenvictus/no-name.png"
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
