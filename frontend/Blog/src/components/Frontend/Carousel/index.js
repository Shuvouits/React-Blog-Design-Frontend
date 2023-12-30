import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./style.css"

export default function Carousel() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
   
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <>
     
        <Slider {...settings} className="carousel-container">

          <div className="carousel-item">
            <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/08/img-01-new.jpg" className="carousel-image" alt="Image 1" />

            <div className='content-box'>
              <p className='date'>AUG 30 2018, BEAUTY</p>
              <h2 className='title'>HOW TO BE UNPOPULAR IN BUSINESS</h2>
              <a href='#'>READ MORE</a>
            </div>

          </div>
          <div className="carousel-item">
            <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/07/img-02-1.jpg" className="carousel-image" alt="Image 2" />
            <div className='content-box'>
              <p className='date'>AUG 30 2018, BEAUTY</p>
              <h2 className='title'>HOW TO BE UNPOPULAR IN BUSINESS</h2>
              <a href='#'>READ MORE</a>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/07/img-03-1.jpg" className="carousel-image" alt="Image 3" />
            <div className='content-box'>
              <p className='date'>AUG 30 2018, BEAUTY</p>
              <h2 className='title'>HOW TO BE UNPOPULAR IN BUSINESS</h2>
              <a href='#'>READ MORE</a>
            </div>
          </div>

          <div className="carousel-item">
            <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/07/img-04-new.jpg" className="carousel-image" alt="Image 3" />
            <div className='content-box'>
              <p className='date'>AUG 30 2018, BEAUTY</p>
              <h2 className='title'>HOW TO BE UNPOPULAR IN BUSINESS</h2>
              <a href='#'>READ MORE</a>
            </div>
          </div>

          
          <div className="carousel-item">
            <img src="https://mezzo-demo.pbminfotech.com/wp-content/uploads/2018/07/img-06-new2.jpg" className="carousel-image" alt="Image 3" />
            <div className='content-box'>
              <p className='date'>AUG 30 2018, BEAUTY</p>
              <h2 className='title'>HOW TO BE UNPOPULAR IN BUSINESS</h2>
              <a href='#'>READ MORE</a>
            </div>
          </div>
          

          {/* Add more slides as needed */}
        </Slider>

   

    </>
  )
}
