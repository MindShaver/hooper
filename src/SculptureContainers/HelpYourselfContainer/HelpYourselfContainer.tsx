import React from "react";
import "./helpYourselfContainer.css";

export const HelpYourselfContainer: React.FC = () => {
  return (
    <div className="help-yourself-container">
      <div className="help-yourself-row">
        <ul className="inner-row">
          <li>
            <div className="help-yourself-item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/help-yourself/couldnt-resist.png"
                }
              />
              <p>
                <em>Just Couldn't Resist</em>
              </p>
            </div>
          </li>
          <li>
            <div className="help-yourself-item">
              <img
                src={
                  process.env.PUBLIC_URL + "/images/help-yourself/comfort.png"
                }
              />
              <p>
                <em>Comfort</em>
              </p>
            </div>
          </li>
          <li>
            <div className="help-yourself-item">
              <img
                src={process.env.PUBLIC_URL + "/images/help-yourself/faith.png"}
              />
              <p>
                <em>Faith</em>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="help-yourself-row">
        <ul className="inner-row">
          <li>
            <div className="help-yourself-item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/help-yourself/help-yourself.png"
                }
              />
              <p>
                <em>Help Yourself</em>
              </p>
            </div>
          </li>
          <li>
            <div className="help-yourself-item">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/images/help-yourself/marionette.png"
                }
              />
              <p>
                <em>Marionette</em>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
