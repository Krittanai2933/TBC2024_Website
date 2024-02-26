import React from "react";
import '../Agenda.css'
import shadow from '../../assets/balck_shadow.png';
import agenda1 from '../../assets/agenda/1.png';
import agenda2 from '../../assets/agenda/2.png';
import agenda3 from '../../assets/agenda/3.png';
import agenda4 from '../../assets/agenda/4.png';
import agenda5 from '../../assets/agenda/5.png';
import agenda6 from '../../assets/agenda/6.png';
import agenda7 from '../../assets/agenda/7.png';
import agenda8 from '../../assets/agenda/8.png';
import agenda9 from '../../assets/agenda/9.png';
import agenda10 from '../../assets/agenda/10.png';
import agenda11 from '../../assets/agenda/11.png';
import agenda12 from '../../assets/agenda/12.png';
import agenda13 from '../../assets/agenda/13.png';
import agenda14 from '../../assets/agenda/14.png';

export const Agenda = () => {
  return (
    <>
      <div>
        <h2 className="h2">Saturday • 14 of September</h2>
        <div className="agenda-container">
          <div className="text-image">
            <h3>9:00 - 9:30 AM</h3>
            <img src={agenda1} alt="agenda2" className="agenda-image" />
          </div>
          <div className="text-image">
            <h3>9:00 - 9:30 AM </h3>
            <img src={agenda2} alt="agenda2" className="agenda-image" />
          </div>
          <div className="text-image">
            <h3>9:00 - 9:30 AM </h3>
            <img src={agenda3} alt="agenda3" className="agenda-image" />
          </div>
          <div className="text-image">
            <h3> 9:00 - 9:30 AM </h3>
            <img src={agenda4} alt="agenda4" className="agenda-image" />
          </div>
          <div className="text-image">
            <h3> 9:00 - 9:30 AM </h3>
            <img src={agenda5} alt="agenda5" className="agenda-image" />
          </div>
          <div className="text-image">
            <h3> 9:00 - 9:30 AM </h3>
            <img src={agenda6} alt="agenda6" className="agenda-image" />
          </div>
          <div className="text-image">
            <h3> 9:00 - 9:30 AM </h3>
            <img src={agenda7} alt="agenda7" className="agenda-image" />
          </div>
          <div className="text-image">
            <h3> 9:00 - 9:30 AM </h3>
            <img src={agenda8} alt="agenda7" className="agenda-image" />
          </div>
          <img src={shadow} alt="shadow" className="shadow" />
        </div>

        <h2 className="h2">Sunday • 15 of September</h2>
        <div className="agenda-container">
          <div className="text-image">
            <h3> 9:00 - 9:30 AM </h3>
            <img src={agenda9} alt="agenda7" className="agenda-image" />
          </div>
          <div className="text-image">
            <h3> 9:00 - 9:30 AM </h3>
            <img src={agenda10} alt="agenda7" className="agenda-image" />
          </div>
          <div className="text-image">
            <h3> 9:00 - 9:30 AM </h3>
            <img src={agenda11} alt="agenda7" className="agenda-image" />
          </div>
          <div className="text-image">
            <h3> 9:00 - 9:30 AM </h3>
            <img src={agenda12} alt="agenda7" className="agenda-image" />
          </div>
          <div className="text-image">
            <h3> 9:00 - 9:30 AM </h3>
            <img src={agenda13} alt="agenda7" className="agenda-image" />
          </div>
          <div className="text-image">
            <h3> 9:00 - 9:30 AM </h3>
            <img src={agenda14} alt="agenda7" className="agenda-image" />
          </div>
          <img src={shadow} alt="shadow" className="shadow-image" />

        </div>
      </div>
    </>
  );
};
