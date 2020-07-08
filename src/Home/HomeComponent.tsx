import React from "react";
import "./homeComponent.css";
import HomeImage from "../assets/images/home-image.png";
import SubImageOne from "../assets/images/home-image-two.png";
import SubImageTwo from "../assets/images/home-image-three.png";

export const HomeComponent: React.FC = () => {
  return (
    <div className="home-container">
      <div className="row">
        <div className="col">
          <div className="home-left-side">
            <div className="header-group">
              <h1>Wesley Hooper</h1>
              <h3>Visual Artist</h3>
            </div>
            <div className="divider"></div>
            <div className="intro-text">
              <div className="paragraph-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="paragraph-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="paragraph-item">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="button-group">
              <a
                href="https://www.etsy.com/shop/TheHooperHandcrafted"
                target="_blank"
              >
                <div className="etsy-button">Check out my store on Etsy</div>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="home-right-side">
            <div>
              <img className="home-image" src={HomeImage} />
            </div>
            <div>
              <img className="sub-image left-image" src={SubImageTwo} />
              <img className="sub-image right-image" src={SubImageOne} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
