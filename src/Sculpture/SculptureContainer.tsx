import React from "react";
import "./sculptureContainer.css";
import { Link } from "react-router-dom";

export const SculptureContainer: React.FC = () => {
  return (
    <div className="sculpture-container">
      <div className="sculpture-row">
        <ul className="inner-row">
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/help-yourself"}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/sculptures/help-yourself.png"
                  }
                />
                <p>"Help Yourself"</p>
                <p>Series</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/somber-someone"}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/sculptures/somber-someone.png"
                  }
                />
                <p>"Somber Someone"</p>
                <p>Series</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/bfa-senior-exhibition"}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/sculptures/bfa-senior-exhibition.png"
                  }
                />
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
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/sculptures/found-object-insects.png"
                  }
                />
                <p>Found Object Insects</p>
                <p>&nbsp;</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/accalia"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/sculptures/accalia.png"
                  }
                />
                <p>Accalia</p>
                <p>&nbsp;</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/heisenvictus"}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/sculptures/heisenvictus.png"
                  }
                />
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
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/sculptures/like-no-tomorrow.png"
                  }
                />
                <p>Like No Tomorrow</p>
                <p>&nbsp;</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/rorschach"}>
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/sculptures/rorschach.png"
                  }
                />
                <p>"Rorschach"</p>
                <p>Series</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="sculpture-item">
              <Link className="series-link" to={"/other-sculptures"}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/sculptures/other-sculptures.png"
                  }
                />
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
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/sculptures/process-photos.png"
                  }
                />
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
