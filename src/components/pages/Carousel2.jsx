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
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const speakers = [
        { image: image1, name: 'Albert Buu'},
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
        { image: image17, name: 'Wichit Saiklao'},
        { image: image18, name: 'Siraphop Nilbodee' },
        { image: image19, name: 'Sakchai Pratantip'},
        { image: image20, name: 'Koji Higashi'}
    ];

    return (
        <div className="container">
            <h1>Speakers</h1>
            <div className="carousel-container2">
                <Slider {...settings}>
                    {speakers.map((speaker, index) => (
                        <div className="carousel-slide2" key={index}>
                            <img src={speaker.image} alt={speaker.name} className="speaker" />
                            <div className="card-details">
                                <h3>{speaker.name}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <img src={shadow} alt="shadow" className="shadow" />
        </div>
    );
};
