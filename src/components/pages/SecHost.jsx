import React from 'react';
import OurTeam from '../../assets/image-8.png';
import RSlogo from '../../assets/logo_rs.png';
import shadow from '../../assets/balck_shadow.png';
import '../Home.css';

export const SecHost = () => {
  return (
    <div className="sechost-container">
      <h2>Host</h2>
      <div className="grid1">
        <img src={RSlogo} alt="Right Shift logo" className="rs" />
        <img src={OurTeam} alt="OurTeam" className="our-team" />
      </div>
      <img src={shadow} alt="shadow" className="shadow" />
    </div>
  );
};
