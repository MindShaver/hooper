import React from "react";
import "./foundObjectContainer.css";
import Coleoptera from "../../assets/images/found-object-insects/coleoptera.png";
import Anisoptera from "../../assets/images/found-object-insects/anisoptera.png";

export const FoundObjectContainer: React.FC = () => {
  return (
    <div className="found-object-container">
      <div className="found-object-row">
        <ul className="inner-row">
          <li>
            <div className="found-object-item">
              <img src={Coleoptera} />
              <p>
                <em>Anisoptera</em>
              </p>
            </div>
          </li>
          <li>
            <div className="found-object-item">
              <img src={Anisoptera} />
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
