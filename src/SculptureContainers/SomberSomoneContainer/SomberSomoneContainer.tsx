import React from "react";
import FiftyFifty from "../../assets/images/somber-someone/fifty-fifty.png";
import Atlas from "../../assets/images/somber-someone/atlas.png";
import Penitence from "../../assets/images/somber-someone/penitence.png";
import Poe from "../../assets/images/somber-someone/poe.png";
import WalkThePlank from "../../assets/images/somber-someone/walk-the-plank.png";
import Splinter from "../../assets/images/somber-someone/walk-the-plank.png";
import "./somberSomeoneContainer.css";

export const SomberSomeoneContainer: React.FC = () => {
  return (
    <div className="somber-someone-container">
      <div className="somber-someone-row">
        <ul className="inner-row">
          <li>
            <div className="somber-someone-item">
              <img src={FiftyFifty} />
              <p>
                <em>Fifty-Fifty</em>
              </p>
            </div>
          </li>
          <li>
            <div className="somber-someone-item">
              <img src={Atlas} />
              <p>
                <em>Atlas</em>
              </p>
            </div>
          </li>
          <li>
            <div className="somber-someone-item">
              <img src={Penitence} />
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
              <img src={Poe} />
              <p>
                <em>Poe</em>
              </p>
            </div>
          </li>
          <li>
            <div className="somber-someone-item">
              <img src={WalkThePlank} />
              <p>
                <em>Walk the Plank</em>
              </p>
            </div>
          </li>
          <li>
            <div className="somber-someone-item">
              <img src={Splinter} />
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
