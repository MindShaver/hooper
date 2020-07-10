import React from "react";
import "./rorschachContainer.css";
import Presager from "../../assets/images/rorschach/presager.png";
import Erethizon from "../../assets/images/rorschach/erethizon-dos.png";
import Convergent from "../../assets/images/rorschach/convergent-crown.png";
import Bubonic from "../../assets/images/rorschach/bubonic-queen.png";

export const RorschachContainer: React.FC = () => {
  return (
    <div className="rorschach-container">
      <div className="rorschach-row">
        <ul className="inner-row">
          <li>
            <div className="rorschach-item">
              <img src={Presager} />
              <p>
                <em>Presager</em>
              </p>
            </div>
          </li>
          <li>
            <div className="rorschach-item">
              <img src={Erethizon} />
              <p>
                <em>Erethizon Dos</em>
              </p>
            </div>
          </li>
          <li>
            <div className="rorschach-item">
              <img src={Convergent} />
              <p>
                <em>Convergent Crown</em>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="rorschach-row">
        <ul className="inner-row">
          <li>
            <div className="rorschach-item">
              <img src={Bubonic} />
              <p>
                <em>Bubonic Queen</em>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
