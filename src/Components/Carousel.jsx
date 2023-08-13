import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide1 from "../assests/Slide1.jpg";
import Slide2 from "../assests/Slide2.jpg";
import Slide3 from "../assests/Slide3.jpg";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="h-[400px] relative  overflow-hidden">
      <Slider {...settings}>
        <div className="">
          <img src={Slide1} alt="Image1" className="h-full object-cover" />
        </div>
        <div className="">
          <img src={Slide2} alt="Image2" className="h-full object-cover" />
        </div>
        <div className="">
          <img src={Slide3} alt="Image2" className="h-full object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

