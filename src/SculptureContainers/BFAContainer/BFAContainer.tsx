import React from "react";
import "./bfaContainer.css";
import LowSpirits from "../../assets/images/bfa-exhibition/low-spirits.png";
import DesertHope from "../../assets/images/bfa-exhibition/desert-hope.png";
import Loom from "../../assets/images/bfa-exhibition/loom.png";
import StrangeLoop from "../../assets/images/bfa-exhibition/strange-loop.png";

export const BFAContainer: React.FC = () => {
  return (
    <div className="bfa-container">
      <div className="bfa-row">
        <ul className="inner-row">
          <li>
            <div className="bfa-item">
              <img src={LowSpirits} />
              <p>
                <em>Low Spirits</em>
              </p>
            </div>
          </li>
          <li>
            <div className="bfa-item">
              <img src={DesertHope} />
              <p>
                <em>Desert Hope</em>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="bfa-row">
        <ul className="inner-row">
          <li>
            <div className="bfa-item">
              <img src={Loom} />
              <p>
                <em>Loom</em>
              </p>
            </div>
          </li>
          <li>
            <div className="bfa-item">
              <img src={StrangeLoop} />
              <p>
                <em>Strange Loop</em>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
