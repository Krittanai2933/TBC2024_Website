import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
import shadow from '../../assets/balck_shadow.png';
import '../Carousel2.css';

export const Carousel2 = () => {
    const settings = {
        dots: true,
        infinite: true,
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
        { image: image23, name: 'Pitcha Suthigul' },
        { image: image24, name: 'Wit Sittivaekin' },
        { image: image25, name: 'Kgothatso Ngako' },
        { image: image26, name: 'Piyawan Leelarungrayub' },
        { image: image27, name: 'Gracialo' },
        { image: image28, name: 'Kittapob Wachatimanont' },
        { image: image29, name: 'Paksuda Pattarawanitch' },
        { image: image30, name: 'Jakk Goodday' },
        { image: image31, name: 'Gu Guy' }
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
