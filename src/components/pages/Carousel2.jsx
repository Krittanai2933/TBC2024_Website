import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
      { image: image1, name: 'Speaker 1'},
      { image: image2, name: 'Speaker 2' },
      { image: image3, name: 'Speaker 3'},
      { image: image4, name: 'Speaker 4' },
      { image: image5, name: 'Speaker 5'},
      { image: image6, name: 'Speaker 6' },
      { image: image7, name: 'Speaker 7'},
      { image: image8, name: 'Speaker 8' },
      { image: image9, name: 'Speaker 9'},
      { image: image10, name: 'Speaker 10'},
      { image: image11, name: 'Speaker 11'},
      { image: image12, name: 'Speaker 12'},
      { image: image13, name: 'Speaker 13'},
      { image: image14, name: 'Speaker 14'},
      { image: image15, name: 'Speaker 15' },
      { image: image16, name: 'Speaker 16'},
      { image: image17, name: 'Speaker 17'},
      { image: image18, name: 'Speaker 18' },
      { image: image19, name: 'Speaker 19'},
      { image: image20, name: 'Speaker 20'}
      
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
