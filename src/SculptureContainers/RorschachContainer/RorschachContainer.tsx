import React from "react";
import "./rorschachContainer.css";

export const RorschachContainer: React.FC = () => {
  return (
    <div className="rorschach-container">
      <div className="rorschach-row">
        <ul className="inner-row">
          <li>
            <div className="rorschach-item">
              <img
                src={process.env.PUBLIC_URL + "/images/rorschach/presager.png"}
              />
              <p>
                <em>Presager</em>
              </p>
            </div>
          </li>
          <li>
            <div className="rorschach-item">
              <img
                src={
                  process.env.PUBLIC_URL + "/images/rorschach/erethizon-dos.png"
                }
              />
              <p>
                <em>Erethizon Dos</em>
              </p>
            </div>
          </li>
          <li>
            <div className="rorschach-item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/rorschach/convergent-crown.png"
                }
              />
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
              <img
                src={
                  process.env.PUBLIC_URL + "/images/rorschach/bubonic-queen.png"
                }
              />
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
