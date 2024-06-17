import React, { useState, useEffect, useRef } from 'react';
import './Header.css'; // Make sure to include your custom styles here

const images = [
  "src/assets/mainImage.jpg",
  "src/assets/jeep3.jpg",
  // Add more image paths here
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo =
        direction === 'prev' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <div className="col-md-6 p-5 mt-lg-5">
          <h1 className="display-5 animated fadeIn mb-4">
            Find A <span className="text-01">Perfect VAAHAN</span> With Us
          </h1>
          <p className="animated fadeIn mb-4 pb-2">
            VAAHAN Lo Khud Chalao With Unlimited Km with us in Bhopal
            Minimum Security Refundable Deposit & Instantly Refund.
          </p>
          <a href="#" className="btn btn-primary py-3 px-5 me-3 animated fadeIn">
            Get Started
          </a>
        </div>
        <div className="col-md-6 animated fadeIn">
          <div className="carousel" ref={carouselRef}>
            {images.map((src, index) => (
              <img
                key={index}
                className={`img-fluid ${index === currentIndex ? 'active' : ''}`}
                src={src}
                alt={`Slide ${index + 1}`}
              />
            ))}
            <button onClick={() => scroll('prev')} className="carousel-control-prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button onClick={() => scroll('next')} className="carousel-control-next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
