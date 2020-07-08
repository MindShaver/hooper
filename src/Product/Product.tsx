import React from "react";
import "./product.css";

export const Product: React.FC = () => {
  return (
    <div className="card">
      <div className="img">
        <img
          src="https://c4.wallpaperflare.com/wallpaper/630/43/768/space-earth-sun-solar-system-wallpaper-preview.jpg"
          alt="image univers"
        />
      </div>
      <div className="content">
        <h3 className="title">Product Title</h3>
        <p className="artist">Artist Name</p>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <span>$15</span>
        <div className="buttons">
          <button className="btn-continue">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};
