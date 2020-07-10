import React from "react";
import "./helpYourselfContainer.css";
import CouldntResist from "../../assets/images/help-yourself/couldnt-resist.png";
import Comfort from "../../assets/images/help-yourself/comfort.png";
import Faith from "../../assets/images/help-yourself/faith.png";
import HelpYourself from "../../assets/images/help-yourself/help-yourself.png";
import Marionette from "../../assets/images/help-yourself/marionette.png";

export const HelpYourselfContainer: React.FC = () => {
  return (
    <div className="help-yourself-container">
      <div className="help-yourself-row">
        <ul className="inner-row">
          <li>
            <div className="help-yourself-item">
              <img src={CouldntResist} />
              <p>
                <em>Just Couldn't Resist</em>
              </p>
            </div>
          </li>
          <li>
            <div className="help-yourself-item">
              <img src={Comfort} />
              <p>
                <em>Comfort</em>
              </p>
            </div>
          </li>
          <li>
            <div className="help-yourself-item">
              <img src={Faith} />
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
              <img src={HelpYourself} />
              <p>
                <em>Help Yourself</em>
              </p>
            </div>
          </li>
          <li>
            <div className="help-yourself-item">
              <img src={Marionette} />
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
