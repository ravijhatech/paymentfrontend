import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import food from '../assets/Images/water.jpg'
import lunch from '../assets/Images/spices.jpg'
import vegitable from '../assets/Images/vegitable.jpg'


const CarouselSlider = () => {
  const settings = {
    dots: true,               // show navigation dots
    infinite: true,           // infinite loop
    speed: 500,               // slide transition speed
    slidesToShow: 1,          // number of slides at a time
    slidesToScroll: 1,
    autoplay: true,           // auto slide
    autoplaySpeed: 3000,      // time between slides (3 sec)
    pauseOnHover: true,       // pause on hover
  };

  return (
    <div className="w-full h-44 bg-black mt-16">
      <Slider {...settings}>
        <div><img  className='w-full h-48 object-cover' src={food} alt="food" /></div>
        <div><img className='w-full h-48 object-cover' src={lunch} alt="lunch" /></div>
        <div><img className='w-full h-48 object-cover' src={vegitable} alt="vegitable" /></div>
      </Slider>
    </div>
  );
};

export default CarouselSlider;
