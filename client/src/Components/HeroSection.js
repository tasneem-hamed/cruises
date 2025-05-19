import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-image">
        {/* Hero image will be set via CSS */}
      </div>
      <div className="hero-text">
        <h1>Welcome to CruiseBooking</h1>
        <p>Discover the world's most beautiful destinations with our luxury cruises.</p>
        <p>Book now and experience unforgettable adventures on the high seas.</p>
      </div>
    </div>
  );
};

export default HeroSection;
