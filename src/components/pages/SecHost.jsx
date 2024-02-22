import React from 'react';
import OurTeam from '/Users/dm/Desktop/tbc-lastest/src/assets/image-8.png';
import RSlogo from '/Users/dm/Desktop/tbc-lastest/src/assets/logo_rs.png';
import shadow from '/Users/dm/Desktop/tbc-lastest/src/assets/balck_shadow.png';
import '../Home.css';


export const SecHost = () => {
  return (
    <div className="sechost-container">
      <h2>Host</h2>
      <div className='grid1'>
        <img src={RSlogo} alt="Right Shift logo" className='rs' />
        <img src={OurTeam} alt="OurTeam" />
      </div>
      <img src={ shadow } alt="shadow" className="shadow"/>
    </div>
  );
};
