import React from "react";
import '../Sponsor.css';
import image1 from "/Users/dm/Desktop/mainmai/TBC2024_Website/src/assets/sponPage/1.png"
import image2 from "../../assets/sponPage/sponpage2.png"
import image3 from "/Users/dm/Desktop/mainmai/TBC2024_Website/src/assets/sponPage/sponpage3.png"
import image4 from "/Users/dm/Desktop/mainmai/TBC2024_Website/src/assets/sponPage/sponpage4.png"
import image5 from "/Users/dm/Desktop/mainmai/TBC2024_Website/src/assets/sponPage/3.png"
import image6 from "/Users/dm/Desktop/mainmai/TBC2024_Website/src/assets/sponPage/sponpage6.png"
import image7 from "/Users/dm/Desktop/mainmai/TBC2024_Website/src/assets/sponPage/2.png"
import btn from '/Users/dm/Desktop/mainmai/TBC2024_Website/src/assets/sponPage/btn.png';

import shadow from '../../assets/balck_shadow.png';

export const Sponsor = () => {
    const email = 'rightshift.service@gmail.com';

    const handleButtonClick = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <div className="container-image">
            <div className="sponsor">
                <img src={ image1 } alt="sponPage1" className="sponsor-image" id="spon" />
                <a href="#sponship">
                    <img src={ btn } alt="button" className="spon-btn"/>
                </a>
                <img src={ shadow } alt="shadow" className="spon-shadow"/>
                <img src={ image2 } alt="sponPage2" className="sponsor-image" />
                <img src={ image3 } alt="sponPage3" className="sponsor-image" />
                <img src={ image4 } alt="sponPage4" className="sponsor-image" />
                <img src={ image5 } alt="sponPage5" className="sponsor-image" />
                <img src={ image6 } alt="sponPage6" className="sponsor-image" />
                <img src={ image7 } alt="sponPage7" className="sponsor-image" id="sponship" />
                <button className="button" onClick={handleButtonClick}></button>
                <button className="button" onClick={handleButtonClick}></button>
                <button className="button" onClick={handleButtonClick}></button>
            </div>
        </div>
    )
}
