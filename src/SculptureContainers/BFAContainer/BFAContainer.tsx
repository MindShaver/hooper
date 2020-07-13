import React from "react";
import "./bfaContainer.css";

export const BFAContainer: React.FC = () => {
  return (
    <div className="bfa-container">
      <div className="bfa-row">
        <ul className="inner-row">
          <li>
            <div className="bfa-item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/bfa-exhibition/low-spirits.png"
                }
              />
              <p>
                <em>Low Spirits</em>
              </p>
            </div>
          </li>
          <li>
            <div className="bfa-item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/bfa-exhibition/desert-hope.png"
                }
              />
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
              <img
                src={process.env.PUBLIC_URL + "/images/bfa-exhibition/loom.png"}
              />
              <p>
                <em>Loom</em>
              </p>
            </div>
          </li>
          <li>
            <div className="bfa-item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/bfa-exhibition/strange-loop.png"
                }
              />
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
