import React from "react";
import { Link } from "react-router-dom";
import LogoImage from "../assets/images/lightLogo.png";

export const LogoComponent: React.FC = () => {
  return (
    <div>
      <Link to="/">
        <img className="logo-image" src={LogoImage} />
      </Link>
    </div>
  );
};
