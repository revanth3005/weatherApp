import React from "react";
import "./header.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { TiWeatherCloudy } from "react-icons/ti";
const Header = () => {
  return (
    <div className="row">
      <header>
        <div className="logo">
          <TiWeatherCloudy /> <h5>Weather</h5>
        </div>
        <div className="icons">
          <AiFillFacebook />
          <AiFillLinkedin />
          <AiFillInstagram />
        </div>
      </header>
    </div>
  );
};

export default Header;
