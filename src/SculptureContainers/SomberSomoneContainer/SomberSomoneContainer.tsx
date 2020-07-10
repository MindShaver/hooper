import React from "react";
import HelpYourself from "../../assets/images/sculptures/help-yourself.png";
import SomberSomeone from "../../assets/images/sculptures/somber-someone.png";
import BFA from "../../assets/images/sculptures/bfa-senior-exhibition.png";
import FoundObject from "../../assets/images/sculptures/found-object-insects.png";
import Accalia from "../../assets/images/sculptures/accalia.png";
import Heisenvictus from "../../assets/images/sculptures/heisenvictus.png";
import "./somberSomeoneContainer.css";

export const SomberSomeoneContainer: React.FC = () => {
  return (
    <div className="somber-someone-container">
      <div className="somber-someone-row">
        <ul className="inner-row">
          <li>
            <div className="somber-someone-item">
              <img src={HelpYourself} />
              <p>"Help Yourself"</p>
              <p>Series</p>
            </div>
          </li>
          <li>
            <div className="somber-someone-item">
              <img src={SomberSomeone} />
              <p>"Somber Someone"</p>
              <p>Series</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
