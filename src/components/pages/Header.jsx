import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";
import home1 from '../../assets/TBC.png';
import shadow from '../../assets/balck_shadow.png';
import CountdownTimer from "./CountdownTimer";
import ButtonContainer from "./ButtonContainer"; 

export const Header = () => {
  return (
    <div className="header-container">
      <img src={home1} alt="Landing Page Image" className="image_home"/>
      <ButtonContainer /> 
      {/* <CountdownTimer /> */}
      <img src={shadow} alt="shadow" className="shadow" />
      
      <h2>Watch the ‘23 Recap</h2>
      <iframe
        width="100%"
        height="545"
        src="https://www.youtube.com/embed/ihoniIyyHzQ?si=-AaP5KzTTG-SGbyU"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <img src={shadow} alt="shadow" className="shadow"/>
    </div>
  );
};
