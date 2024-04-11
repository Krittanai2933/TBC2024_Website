import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/speakers/image1.jpeg';
import image2 from '../../assets/speakers/image2.png';
import image3 from '../../assets/speakers/image3.png';
import image4 from '../../assets/speakers/image4.jpg';
import image5 from '../../assets/speakers/image5.jpg';
import image6 from '../../assets/speakers/image6.png';
import image7 from '../../assets/speakers/image7.png';
import image8 from '../../assets/speakers/image8.png';
import image9 from '../../assets/speakers/image9.jpeg';
import image10 from '../../assets/speakers/image10.png';
import image11 from '../../assets/speakers/image11.jpg';
import image12 from '../../assets/speakers/image12.png';
import image13 from '../../assets/speakers/image13.webp';
import image14 from '../../assets/speakers/image14.png';
import image15 from '../../assets/speakers/image15.jpg';
import image16 from '../../assets/speakers/image16.jpeg';
import image17 from '../../assets/speakers/image17.png';
import image18 from '../../assets/speakers/image18.jpg';
import image19 from '../../assets/speakers/image19.jpg';
import image20 from '../../assets/speakers/image20.png';
import image21 from '../../assets/speakers/image21.jpg';
import image22 from '../../assets/speakers/image22.jpg';
import image23 from '../../assets/speakers/image23.png';
import image24 from '../../assets/speakers/image24.png';
import image25 from '../../assets/speakers/image25.png';
import image26 from '../../assets/speakers/image26.jpg';
import image27 from '../../assets/speakers/image27.jpg';
import image28 from '../../assets/speakers/image28.jpg';
import image29 from '../../assets/speakers/image29.jpg';
import image30 from '../../assets/speakers/image30.gif';
import image31 from '../../assets/speakers/image31.jpg';
import shadow from '../../assets/balck_shadow.png';

import '../Carousel2.css';

export const Carousel2 = () => {
    const settings = {
        dots: true,
        infinite: true,  // Set to true for looping
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const speakers = [
        { image: image1, name: 'Watcharaporn Donsang (Aom)' },
        { image: image2, name: 'Tip_NZ' },
        { image: image3, name: 'Paco De La India' },
        { image: image4, name: 'เพียว' },
        { image: image5, name: 'Jimmy Kostro' },
        { image: image6, name: 'Dr. Napapatch Piyachaiyakul' },
        { image: image7, name: 'Sakchai Pratantip' },
        { image: image8, name: 'Pisut Oncharoen' },
        { image: image9, name: 'Koji Higashi' },
        { image: image10, name: 'Albert Buu' },
        { image: image11, name: 'Dea Rezkhita' },
        { image: image12, name: 'Michael R. Keag' },
        { image: image13, name: 'Rolan Bewick' },
        { image: image14, name: 'Piccolo' },
        { image: image15, name: 'Deja Piyavhatkul' },
        { image: image16, name: 'Chayoot Anukoolkarn' },
        { image: image17, name: 'Siraphop Nilbodee' },
        { image: image18, name: 'Thanakrit Sangnongban' },
        { image: image19, name: 'Wichit Saiklao' },
        { image: image20, name: 'Piriya Sambandaraksa' },
        { image: image21, name: 'Captain Sidd' },
        { image: image22, name: 'Suppakrit Boonsat' },
        { image: image23, name: 'Pitcha Suthigul (นายพิชชา สุทธิกุล)' },
        { image: image24, name: 'Wit Sittivaekin' },
        { image: image25, name: 'Kgothatso Ngako' },
        { image: image26, name: 'Piyawan Leelarungrayub' },
        { image: image27, name: 'Gracialo' },
        { image: image28, name: 'Kittapob Wachatimanont' },
        { image: image29, name: 'Paksuda pattarawanitch' },
        { image: image30, name: 'Jakk Goodday' },
        { image: image31, name: 'Gu Guy' }
    ];
    

  return (
      <div className="container">
          <h1>Speakers</h1>
          <div className="carousel-container2">
              <Slider {...settings}>
                  {/* Map through the speakers array to generate carousel slides */}
                  {speakers.map((speaker) => (
                      <div className="carousel-slide2" key={speaker.id}>
                          <img src={speaker.image} alt={`Slide ${speaker.id}`} className="speaker" />
                          <div className="card-details">
                              <h3>{speaker.name}</h3>
                              <p>{speaker.details}</p>
                          </div>
                      </div>
                  ))}
              </Slider>
          </div>
          <img src={shadow} alt="shadow" className="shadow" />
      </div>
  );

};
