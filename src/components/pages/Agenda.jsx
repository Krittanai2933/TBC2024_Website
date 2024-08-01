import React from "react";
import '../Agenda.css';
import shadow from '../../assets/balck_shadow.png';

// Import all images
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
import agenda16 from '../../assets/agenda/16.png';
import agenda17 from '../../assets/agenda/17.png';
import agenda18 from '../../assets/agenda/18.png';
import agenda19 from '../../assets/agenda/19.png';
import agenda20 from '../../assets/agenda/20.png';
import agenda21 from '../../assets/agenda/21.png';
import agenda22 from '../../assets/agenda/22.png';
import agenda23 from '../../assets/agenda/23.png';
import agenda24 from '../../assets/agenda/24.png';
import agenda25 from '../../assets/agenda/25.png';
import agenda26 from '../../assets/agenda/26.png';
import agenda27 from '../../assets/agenda/27.png';
import agenda28 from '../../assets/agenda/28.png';
import agenda29 from '../../assets/agenda/29.png';

// Array of images for agendas
const agendaImages = [
  agenda1, agenda2, agenda3, agenda4, agenda5, agenda6, agenda7, agenda8, 
  agenda9, agenda10, agenda11, agenda12, agenda13, agenda14,
  agenda16, agenda17, agenda18, agenda19, agenda20, agenda21, agenda22,
  agenda23, agenda24, agenda25, agenda26, agenda27, agenda28, agenda29
];

// Array of times corresponding to each agenda item
const agendaTimes = [
  // September 14
  '8:30 - 9:00 AM', '9:00 - 09:15 AM', '09:15 - 10:00 AM', '10:00 - 10:45 AM',
  '10:45 - 11:00 AM', '11:00 - 11:45 PM', '11:45 - 12:30 PM', '12:30 - 1:30 PM',
  '1:30 - 2:15 PM', '2:15 - 3:00 PM', '3:00 - 3:15 PM', '3:15 - 4:00 PM',
  '4:00 - 4:45 PM', '4:45 - 5:30 PM', 
  // September 15
  '8:30 - 8:45 AM', '8:45 - 09:30 AM', '09:30 - 10:00 AM', '10:00 - 10:45 AM', 
  '10:45 - 11:00 AM', '11:00 - 11:45 PM', '11:45 - 12:30 PM', '12:30 - 1:30 PM', 
  '1:30 - 2:15 PM', '2:15 - 3:15 PM', '3:15 - 3:30 PM', '3:30 - 4:00 PM', 
  '4:00 - 5:15 PM', '5:15 - 5:30 PM'
];

// Create agenda items with different times
const agendas = agendaImages.map((img, index) => ({
  time: agendaTimes[index], // Use the time corresponding to the image
  img
}));

const createAgendaBlocks = (items) => {
  return items.map((item, index) => (
    <div className="text-image" key={index}>
      <h3>{item.time}</h3>
      <img src={item.img} alt={`agenda-${index + 1}`} className="agenda-image" />
    </div>
  ));
};

export const Agenda = () => {
  // Split agendas for September 14 and September 15
  const saturdayAgendas = createAgendaBlocks(agendas.slice(0, 14)); // September 14
  const sundayAgendas = createAgendaBlocks(agendas.slice(14));    // September 15

  return (
    <>
      <div>
        <h2 className="h2">Saturday • 14 of September</h2>
        <div className="agenda-container">
          {saturdayAgendas}
          <img src={shadow} alt="shadow" className="shadow" />
        </div>

        <h2 className="h2">Sunday • 15 of September</h2>
        <div className="agenda-container">
          {sundayAgendas}
          <img src={shadow} alt="shadow" className="shadow-image" />
        </div>
      </div>
    </>
  );
};
