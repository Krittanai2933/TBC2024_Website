import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../../assets/enviroments/slide1.jpg';
import image2 from '../../assets/enviroments/slide2.jpg';
import image3 from '../../assets/enviroments/slide3.png';
import image4 from '../../assets/enviroments/slide4.jpg';
import shadow from '../../assets/balck_shadow.png';

import '../Home.css'

export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <div className="container">
        <div className="carousel-container">
            <Slider {...settings}>
                {/* Add your carousel slides here */}
                <div className="carousel-slide">
                    <img src= { image1 } alt="Slide 1" class="slide" />
                </div>
                <div className="carousel-slide">
                    <img src= { image2 } alt="Slide 2" class="slide"/>
                </div>
                <div className="carousel-slide">
                    <img src= { image3 } alt="Slide 3" class="slide"/>
                </div>
                <div className="carousel-slide">
                    <img src= { image4 } alt="Slide 3" class="slide"/>
                </div>
            </Slider>
      </div>
      <img src={ shadow } alt="shadow" className="shadow"/>
    </div>

  )
} 
export default Carousel;
