import React from "react";
import "./potteryContainer.css";
import MugImage from "../assets/images/home-image-three.png";
import PlatterImage from "../assets/images/home-image-two.png";
import Logo from "../assets/images/lightLogo.png";
import { Link } from "react-router-dom";

export const PotteryContainer = () => {
  return (
    <div className="pottery-container">
      <div className="row">
        <div className="pottery-col">
          <div className="main-group">
            <div>
              <Link to="/mugs">
                <img src={MugImage} />
                <p>Mugs</p>
              </Link>
            </div>
            <div className="platter-group">
              <Link to="/platters-and-more">
                <img src={PlatterImage} />
                <p>Planters, Platters, and Plenty More</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pottery-row">
        <div className="pottery-col">
          <div className="info-group">
            <img src={Logo} />
            <div className="inner-info">
              <div className="first-info-item">
                <p>Interested in purchasing a piece?</p>
                <p>
                  Click here:{" "}
                  <a
                    href="https://www.etsy.com/shop/TheHooperHandcrafted"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Etsy Shop
                  </a>
                </p>
              </div>
              <div className="second-info-item">
                <p>
                  Follow me on Instagram for shop update reminders:{" "}
                  <a
                    href="https://www.instagram.com/wesleyhooperart/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @wesleyhooperart
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
