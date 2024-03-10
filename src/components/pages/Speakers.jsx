import React from "react";
import "../Speakers.css";
import chitbeer from "../../assets/sponsor/chitbeer-1.png";
import image1 from '../../assets/speakers/1.png';
import image2 from '../../assets/speakers/2.png';
import image3 from '../../assets/speakers/3.png';
import image4 from '../../assets/speakers/4.png';
import image5 from '../../assets/speakers/5.png';
import image6 from '../../assets/speakers/6.png';
import image7 from '../../assets/speakers/7.png';
import image8 from '../../assets/speakers/8.png';
import image9 from '../../assets/speakers/9.png';
import image10 from '../../assets/speakers/10.png';
import image11 from '../../assets/speakers/11.png';
import image12 from '../../assets/speakers/12.png';
import image13 from '../../assets/speakers/13.png';
import image14 from '../../assets/speakers/14.png';
import image15 from '../../assets/speakers/15.png';
import image16 from '../../assets/speakers/16.png';
import image17 from '../../assets/speakers/17.png';
import image18 from '../../assets/speakers/18.png';
import image19 from '../../assets/speakers/19.png';
import image20 from '../../assets/speakers/20.png';

const speakerData = [
    { image: image1, name: 'Albert Buu'},
    { image: image2, name: 'Speaker 2' },
    { image: image3, name: 'Deja Piyavhatkul'},
    { image: image4, name: 'Chayoot Anukoolkarn' },
    { image: image5, name: 'Dea Rezkhita'},
    { image: image6, name: 'Captain Sidd' },
    { image: image7, name: 'เพียว Cat Money'},
    { image: image8, name: 'Piccolo' },
    { image: image9, name: 'Pisut Oncharoen'},
    { image: image10, name: 'Piriya Sambandaraksa'},
    { image: image11, name: 'Dr.Big'},
    { image: image12, name: 'Jimmy Kostro'},
    { image: image13, name: 'Michael R. Keag'},
    { image: image14, name: 'Rolan Bewick'},
    { image: image15, name: 'Thanakrit Sangnongban' },
    { image: image16, name: 'Speaker 16'},
    { image: image17, name: 'Wichit Saiklao'},
    { image: image18, name: 'Siraphop Nilbodee' },
    { image: image19, name: 'Sakchai Pratantip'},
    { image: image20, name: 'Koji Higashi'}
];

const links = speakerData.map(speaker => speaker.image);

export const Speakers = () => {
    const rows = [];
    for (let i = 0; i < links.length; i += 3) {
        const rowLinks = links.slice(i, i + 3);
        const rowDetails = speakerData.slice(i, i + 3);

        const row = (
            <div key={i / 3} className="row-big">
                {rowLinks.map((link, index) => (
                    <div key={index} className="speaker-container">
                        <img src={link} alt={`Speaker ${i + index + 1}`} className="speakerimage" />
                        <p className="speaker-details">{rowDetails[index].name}</p>
                    </div>
                ))}
            </div>
        );

        rows.push(row);
    }

    return (
        <>
            <h2 className="center-heading">Speakers</h2>
            <div className="grid grid1">
                {rows}
            </div>
        </>
    );
};
