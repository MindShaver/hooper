import React from "react";

export const InterestedTag: React.FC = () => {
  return (
    <div className="info-group">
      <img src={process.env.PUBLIC_URL + "/images/lightLogo.png"} alt="Logo" />
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
  );
};
