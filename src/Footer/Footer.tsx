import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-row">
        <div className="footer-col">
          <div className="footer-left">
            <a
              href="https://www.instagram.com/wesleyhooperart/"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-instagram"
            ></a>
            <a
              href="https://www.etsy.com/shop/TheHooperHandcrafted"
              className="fa fa-etsy"
              rel="noopener noreferrer"
              target="_blank"
            ></a>
            <Link to="/contact" className="fa fa-envelope" />
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-center">&copy; Wesley Hooper 2020</div>
        </div>

        <div className="footer-col">
          <div className="footer-right">&copy; 2020</div>
        </div>
      </div>
    </div>
  );
};
