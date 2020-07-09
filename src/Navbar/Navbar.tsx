import React from "react";
import "./navbar.css";
import LogoImage from "../assets/images/lightLogo.png";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <div className="nav-container">
      <div className="nav-row">
        <div className="nav-col">
          <div className="nav-item">
            <ul className="left-nav">
              <li>
                <Link className="link" to="/sculpture">
                  - Sculpture -
                </Link>
              </li>
              <li>
                <Link className="link" to="/pottery">
                  - Pottery -
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav-col">
          <div className="nav-item">
            <div className="logo">
              <Link to="/">
                <img className="logo-image" src={LogoImage} alt="Hooper Logo" />
              </Link>
            </div>
          </div>
        </div>

        <div className="nav-col">
          <div className="nav-item">
            <ul className="right-nav">
              <li>
                <Link className="link" to="/about">
                  - About -
                </Link>
              </li>
              <li>
                <Link className="link" to="/contact">
                  - Contact -
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
