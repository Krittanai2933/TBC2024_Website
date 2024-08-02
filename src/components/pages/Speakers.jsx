import React from "react";
import "../Speakers.css";
// Import speaker images
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
import image21 from '../../assets/speakers/21.png';
import image22 from '../../assets/speakers/22.png';
import image23 from '../../assets/speakers/23.png';
import image24 from '../../assets/speakers/24.png';
import image25 from '../../assets/speakers/25.png';
import image26 from '../../assets/speakers/26.png';
import image27 from '../../assets/speakers/27.png';
import image28 from '../../assets/speakers/28.png';
import image29 from '../../assets/speakers/29.png';
import image30 from '../../assets/speakers/30.png';
import image31 from '../../assets/speakers/31.png';

const speakerData = [
    { image: image1, name: 'Watcharaporn Donsang (Aom)', title: 'CEO of Dig Dig Company' },
    { image: image2, name: 'Tip_NZ', title: 'Bitcoin Advocate & Artist' },
    { image: image3, name: 'Paco De La India', title: 'Founder of Run With Bitcoin' },
    { image: image4, name: 'เพียว', title: 'Founder of Cat Money' },
    { image: image5, name: 'Jimmy Kostro', title: 'The Kostro Foundation' },
    { image: image6, name: 'Dr. Napapatch Piyachaiyakul', title: 'Co-Founder The Big Secret Channel' },
    { image: image7, name: 'Sakchai Pratantip', title: 'Ramasura Team & LATES' },
    { image: image8, name: 'Pisut Oncharoen', title: 'Ramasura Team & LATES' },
    { image: image9, name: 'Koji Higashi', title: 'DiamondHands Lightning Japan' },
    { image: image10, name: 'Albert Buu', title: 'Founder & CEO of Neutronpay' },
    { image: image11, name: 'Dea Rezkhita', title: 'Indonesian Bitcoin specialist and educator' },
    { image: image12, name: 'Michael R. Keag', title: 'President of Bitcoin Power House' },
    { image: image13, name: 'Rolan Bewick', title: 'Lead developer at getAlby' },
    { image: image14, name: 'Piccolo', title: 'Founder of BoB space' },
    { image: image15, name: 'Deja Piyavhatkul', title: 'Founder of Ramasura Team & LATES' },
    { image: image16, name: 'Chayoot Anukoolkarn', title: 'CEO of Cryptodrilling' },
    { image: image17, name: 'Siraphop Nilbodee', title: 'Creator & Instructor at RightShift' },
    { image: image18, name: 'Thanakrit Sangnongban', title: 'Only Nips by ARM Creator' },
    { image: image19, name: 'Wichit Saiklao', title: 'Brewer & Founder of Chitbeer' },
    { image: image20, name: 'Piriya Sambandaraksa', title: 'Founder & CEO of RightShift' },
    { image: image21, name: 'Captain Sidd', title: 'Bitcoin Tour Guy, Bitcoin Magazine Writer' },
    { image: image22, name: 'Suppakrit Boonsat', title: 'CEO and Founder at Bitcast' },
    { image: image23, name: 'Pitcha Suthigul (นายพิชชา สุทธิกุล)', title: 'Professional Researcher, Renewable Energy Specialist' },
    { image: image24, name: 'Wit Sittivaekin', title: 'News Anchor at THE STANDARD' },
    { image: image25, name: 'Kgothatso Ngako', title: 'Machankura' },
    { image: image26, name: 'Piyawan Leelarungrayub', title: 'Host of NORTH101' },
    { image: image27, name: 'Gracialo', title: 'Bitcoin Maxis , Admin: Siamese Bitcoiners' },
    { image: image28, name: 'Kittapob Wachatimanont', title: 'นักวิชาการอิสระ' },
    { image: image29, name: 'Paksuda pattarawanitch', title: 'Bitcoiner / Homeschooler' },
    { image: image30, name: 'Jakk Goodday', title: 'Co-founder at RightShift' },
    { image: image31, name: 'Gu Guy', title: 'Bitcoiner / Homeschooler / Bartender' }
];

export const Speakers = () => {
    return (
        <>
            <h2 className="center-heading">Speakers</h2>
            <div className="card-container">
                {speakerData.map((speaker, index) => (
                    <div key={index} className="card">
                        <div className="image-speaker">
                            <img src={speaker.image} alt={`Speaker ${index + 1}`} />
                        </div>
                        <div className="speaker-name">{speaker.name}<br />{speaker.title}</div>
                    </div>
                ))}
            </div>
        </>
    );
};
