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
import { Link } from "react-router-dom";

export const SculptureContainer: React.FC = () => {
  return (
    <div className="sculpture-container">
      <div className="sculpture-row">
        <ul className="inner-row">
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/help-yourself"}>
                <img src={HelpYourself} />
                <p>"Help Yourself"</p>
                <p>Series</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/somber-someone"}>
                <img src={SomberSomeone} />
                <p>"Somber Someone"</p>
                <p>Series</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/bfa-senior-exhibition"}>
                <img src={BFA} />
                <p>BFA Senior Exhibition</p>
                <p>&nbsp;</p>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="sculpture-row">
        <ul className="inner-row">
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/found-object-insects"}>
                <img src={FoundObject} />
                <p>Found Object Insects</p>
                <p>&nbsp;</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/accalia"}>
                <img src={Accalia} />
                <p>Accalia</p>
                <p>&nbsp;</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/heisenvictus"}>
                <img src={Heisenvictus} />
                <p>Heisenvictus</p>
                <p>&nbsp;</p>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="sculpture-row">
        <ul className="inner-row">
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/like-no-tomorrow"}>
                <img src={LikeNoTomorrow} />
                <p>Like No Tomorrow</p>
                <p>&nbsp;</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/rorschach"}>
                <img src={Rorschach} />
                <p>"Rorschach"</p>
                <p>Series</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/other-sculptures"}>
                <img src={Other} />
                <p>Other Sculptures</p>
                <p>&nbsp;</p>
              </Link>
            </div>
          </li>
        </ul>
      </div>
      <div className="sculpture-row">
        <ul className="inner-row">
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/process-photos"}>
                <img src={Process} />
                <p>Process Photos</p>
                <p>&nbsp;</p>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
