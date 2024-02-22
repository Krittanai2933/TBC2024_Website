import React from "react";
import "../SecsSpon.css";
import techsauce from "../../assets/techsauce.png";
import trueD from "../../assets/sponsor/true.png";
import Lumen from "../../assets/sponsor/lumen.png";
import crossVibe from "../../assets/sponsor/cross_vibe.png";
import cakeChon from "../../assets/sponsor/cake_chon.png";
import chitbeer from "../../assets/sponsor/chitbeer-1.png";

const links = [chitbeer, chitbeer, chitbeer];

export default function SecSpon() {
  return (
    <div className="container">
      <h2>Our Sponsor</h2>
      <div className="grid">
        <div className="row-big">
          {links.map((link, index) => (
            <img key={index} src={link} alt={`Sponsor ${index + 1}`} className="sponsor-image" />
          ))}
        </div>
        <div className="row-big">
          {links.map((link, index) => (
            <img key={index} src={link} alt={`Sponsor ${index + 1}`} className="sponsor-image" />
          ))}
        </div>
        <div className="row">
          <img src={trueD} alt="Sponsor 1" className="sponsor-image" />
          <img src={Lumen} alt="Sponsor 2" className="sponsor-image" />
          <img src={cakeChon} alt="Sponsor 3" className="sponsor-image" />
          <img src={crossVibe} alt="Sponsor 4" className="sponsor-image" />
        </div>
        <div className="row">
          <img src={trueD} alt="Sponsor 1" className="sponsor-image" />
          <img src={Lumen} alt="Sponsor 2" className="sponsor-image" />
          <img src={cakeChon} alt="Sponsor 3" className="sponsor-image" />
          <img src={crossVibe} alt="Sponsor 4" className="sponsor-image" />
        </div>
        <div className="row">
          <img src={trueD} alt="Sponsor 1" className="sponsor-image" />
          <img src={Lumen} alt="Sponsor 2" className="sponsor-image" />
          <img src={cakeChon} alt="Sponsor 3" className="sponsor-image" />
          <img src={crossVibe} alt="Sponsor 4" className="sponsor-image" />
        </div>
        <div className="row">
          <img src={trueD} alt="Sponsor 1" className="sponsor-image" />
          <img src={Lumen} alt="Sponsor 2" className="sponsor-image" />
          <img src={cakeChon} alt="Sponsor 3" className="sponsor-image" />
          <img src={crossVibe} alt="Sponsor 4" className="sponsor-image" />
        </div>

      </div>
    </div>
  );
}
