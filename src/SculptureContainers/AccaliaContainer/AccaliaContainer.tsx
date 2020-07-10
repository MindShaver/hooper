import React from "react";
import "./accaliaContainer.css";
import HelpYourself from "../../assets/images/sculptures/help-yourself.png";
import SomberSomeone from "../../assets/images/sculptures/somber-someone.png";
import BFA from "../../assets/images/sculptures/bfa-senior-exhibition.png";
import FoundObject from "../../assets/images/sculptures/found-object-insects.png";
import Accalia from "../../assets/images/sculptures/accalia.png";
import Heisenvictus from "../../assets/images/sculptures/heisenvictus.png";

export const AccaliaContainer: React.FC = () => {
  return (
    <div className="accalia-container">
      <div className="accalia-row">
        <ul className="inner-row">
          <li>
            <div className="accalia-item">
              <img src={HelpYourself} />
              <p>"Help Yourself"</p>
              <p>Series</p>
            </div>
          </li>
          <li>
            <div className="accalia-item">
              <img src={SomberSomeone} />
              <p>"Somber Someone"</p>
              <p>Series</p>
            </div>
          </li>
          <li>
            <div className="accalia-item">
              <img src={BFA} />
              <p>BFA Senior Exhibition</p>
              <p>&nbsp;</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="accalia-row">
        <ul className="inner-row">
          <li>
            <div className="accalia-item">
              <img src={FoundObject} />
              <p>Found Object Insects</p>
              <p>&nbsp;</p>
            </div>
          </li>
          <li>
            <div className="accalia-item">
              <img src={Accalia} />
              <p>Accalia</p>
              <p>&nbsp;</p>
            </div>
          </li>
          <li>
            <div className="accalia-item">
              <img src={Heisenvictus} />
              <p>Heisenvictus</p>
              <p>&nbsp;</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
