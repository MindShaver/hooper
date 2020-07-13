import React from "react";
import "./somberSomeoneContainer.css";

export const SomberSomeoneContainer: React.FC = () => {
  return (
    <div className="somber-someone-container">
      <div className="somber-someone-row">
        <ul className="inner-row">
          <li>
            <div className="somber-someone-item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/somber-someone/fifty-fifty.png"
                }
              />
              <p>
                <em>Fifty-Fifty</em>
              </p>
            </div>
          </li>
          <li>
            <div className="somber-someone-item">
              <img
                src={
                  process.env.PUBLIC_URL + "/images/somber-someone/atlas.png"
                }
              />
              <p>
                <em>Atlas</em>
              </p>
            </div>
          </li>
          <li>
            <div className="somber-someone-item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/somber-someone/penitence.png"
                }
              />
              <p>
                <em>Penitence is Bliss</em>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="somber-someone-row">
        <ul className="inner-row">
          <li>
            <div className="somber-someone-item">
              <img
                src={process.env.PUBLIC_URL + "/images/somber-someone/poe.png"}
              />
              <p>
                <em>Poe</em>
              </p>
            </div>
          </li>
          <li>
            <div className="somber-someone-item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/somber-someone/walk-the-plank.png"
                }
              />
              <p>
                <em>Walk the Plank</em>
              </p>
            </div>
          </li>
          <li>
            <div className="somber-someone-item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/somber-someone/walk-the-plank.png"
                }
              />
              <p>
                <em>Splinter</em>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
