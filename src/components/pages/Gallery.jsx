import React from "react";
import '../Gallery.css'
import gal1 from '../../assets/gallery/gal1.png';
import gal2 from '../../assets/gallery/gal2.png';
import gal3 from '../../assets/gallery/gal3.png';
import gal4 from '../../assets/gallery/gal4.png';
import gal5 from '../../assets/gallery/gal5.png';
import gal6 from '../../assets/gallery/gal6.png';
import gal7 from '../../assets/gallery/gal7.png';
import gal8 from '../../assets/gallery/gal8.png';
import gal9 from '../../assets/gallery/gal9.png';



export const Gallery = () => {
    return <>
    <div className="gal-container">
        <div className="gallery">
            <img src={gal1} alt="Gallery Image" className="image_gal" />
            <img src={gal2} alt="Gallery Image" className="image_gal"/>
            <img src={gal3} alt="Gallery Image" className="image_gal"/>
            <img src={gal4} alt="Gallery Image" className="image_gal"/>
            <img src={gal5} alt="Gallery Image" className="image_gal"/>
            <img src={gal6} alt="Gallery Image" className="image_gal"/>
            <img src={gal7} alt="Gallery Image" className="image_gal"/>
            <img src={gal8} alt="Gallery Image" className="image_gal"/>
            <img src={gal9} alt="Gallery Image" className="image_gal"/>
        </div>
    </div>
    </>
}
