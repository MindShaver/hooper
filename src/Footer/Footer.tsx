import React from "react";
import "./footer.css";

export const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-row">
        <div className="footer-col">
          <div className="footer-left">
            <a
              href="https://www.instagram.com/wesleyhooperart/"
              target="_blank"
              className="fa fa-instagram"
            ></a>
            <a href="#" className="fa fa-twitter"></a>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-center">&copy; Wesley Hooper 2020</div>
        </div>

        <div className="footer-col">
          <div className="footer-right"></div>
        </div>
      </div>
    </div>
  );
};
