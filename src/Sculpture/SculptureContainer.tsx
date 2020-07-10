import React from "react";
import "./sculptureContainer.css";
import HelpYourself from "../assets/images/sculptures/help-yourself.png";
import SomberSomeone from "../assets/images/sculptures/somber-someone.png";
import BFA from "../assets/images/sculptures/bfa-senior-exhibition.png";
import FoundObject from "../assets/images/sculptures/found-object-insects.png";
import Accalia from "../assets/images/sculptures/accalia.png";
import Heisenvictus from "../assets/images/sculptures/heisenvictus.png";
import LikeNoTomorrow from "../assets/images/sculptures/like-no-tomorrow.png";
import Rorschach from "../assets/images/sculptures/rorschach.png";
import Other from "../assets/images/sculptures/other-sculptures.png";
import Process from "../assets/images/sculptures/process-photos.png";

export const SculptureContainer: React.FC = () => {
  return (
    <div className="sculpture-container">
      <div className="sculpture-row">
        <ul className="inner-row">
          <li>
            <div className="sculpture-item">
              <img src={HelpYourself} />
              <p>"Help Yourself"</p>
              <p>Series</p>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <img src={SomberSomeone} />
              <p>"Somber Someone"</p>
              <p>Series</p>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <img src={BFA} />
              <p>BFA Senior Exhibition</p>
              <p>&nbsp;</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="sculpture-row">
        <ul className="inner-row">
          <li>
            <div className="sculpture-item">
              <img src={FoundObject} />
              <p>Found Object Insects</p>
              <p>&nbsp;</p>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <img src={Accalia} />
              <p>Accalia</p>
              <p>&nbsp;</p>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <img src={Heisenvictus} />
              <p>Heisenvictus</p>
              <p>&nbsp;</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="sculpture-row">
        <ul className="inner-row">
          <li>
            <div className="sculpture-item">
              <img src={LikeNoTomorrow} />
              <p>Like No Tomorrow</p>
              <p>&nbsp;</p>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <img src={Rorschach} />
              <p>"Rorschach"</p>
              <p>Series</p>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <img src={Other} />
              <p>Other Sculptures</p>
              <p>&nbsp;</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="sculpture-row">
        <ul className="inner-row">
          <li>
            <div className="sculpture-item">
              <img src={Process} />
              <p>Process Photos</p>
              <p>&nbsp;</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
