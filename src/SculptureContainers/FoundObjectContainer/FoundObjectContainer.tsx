import React from "react";
import "./foundObjectContainer.css";

export const FoundObjectContainer: React.FC = () => {
  return (
    <div className="found-object-container">
      <div className="found-object-row">
        <ul className="inner-row">
          <li>
            <div className="found-object-item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/found-object-insects/coleoptera.png"
                }
              />
              <p>
                <em>Anisoptera</em>
              </p>
            </div>
          </li>
          <li>
            <div className="found-object-item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/found-object-insects/anisoptera.png"
                }
              />
              <p>
                <em>Coleoptera</em>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
