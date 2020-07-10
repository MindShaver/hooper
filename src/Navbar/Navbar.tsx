import React, { useState } from "react";
import "./navbar.css";
import LogoImage from "../assets/images/lightLogo.png";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);
  return (
    <div className="nav-container">
      <div className="nav-row">
        <div className="nav-col">
          <div className="nav-item">
            <ul className="left-nav">
              <li>
                <div className="mobile-nav">
                  <div
                    className="hamburger"
                    onClick={() => setShowSubMenu(!showSubMenu)}
                  >
                    <i className="fa fa-bars"></i>
                  </div>
                </div>
              </li>
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
      {showSubMenu && (
        <div className="sub-menu">
          <ul className="mobile-nav">
            <li>
              <Link
                className="mobile-link"
                to="/sculpture"
                onClick={() => setShowSubMenu(false)}
              >
                - Sculpture -
              </Link>
            </li>
            <li>
              <Link
                className="mobile-link"
                to="/pottery"
                onClick={() => setShowSubMenu(false)}
              >
                - Pottery -
              </Link>
            </li>
            <li>
              <Link
                className="mobile-link"
                to="/about"
                onClick={() => setShowSubMenu(false)}
              >
                - About -
              </Link>
            </li>
            <li>
              <Link
                className="mobile-link"
                to="/contact"
                onClick={() => setShowSubMenu(false)}
              >
                - Contact -
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
