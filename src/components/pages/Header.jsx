import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";
import home1 from '../../assets/TBC.png';
import via_baht from '../../assets/via_bath.png';
import via_lightning from '../../assets/via_lightning.png';
import shadow from '../../assets/balck_shadow.png';
import CountdownTimer from "./CountdownTimer";

export const Header = () => {
  return (
    <div className="header-container">
      <img src={home1} alt="Landing Page Image" className="image_home"/>
      <div className="button-container">
        <Link to="https://www.eventpop.me/s/tbc2024">
          <img src={via_baht} alt="Via baht" className="btn" /> 
        </Link> 
        <Link to="https://rightshift.to/product/tbc2024-event-ticket/">
          <img src={via_lightning} alt="Via Lightning" className="btn"/>
        </Link>
      </div>
      <CountdownTimer />
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
