import React from 'react';
import './CruiseOverview.css';
import h7 from '../Images/h7.jpg'; // Example image path
import e3 from '../Images/e3.jpg'; // Example image path
import e2 from '../Images/e2.jpg'; // Example image path
import rr3 from '../Images/rr3.jpg'; // Example image path
import d3 from '../Images/d3.png'; // Example image path
import h3 from '../Images/h3.jpg'; // Example image path

const CruiseOverview = () => {
  return (
    <div className="cruise-overview">
      <header className="cruise-header">
        <h1>Welcome to Our Luxury Cruise Experience</h1>
        <p>Experience the ultimate adventure on our luxurious cruise ships.</p>
      </header>

      <div className="card-grid">
        <div className="card">
          <img src={h7} alt="Cruise Ship" className="card-image" />
          <div className="card-content">
            <h2>Luxury Cruise</h2>
            <p>Experience the ultimate adventure on our luxurious cruise ships.</p>
          </div>
        </div>

        <div className="card">
          <img src={e3} alt="Dining" className="card-image" />
          <div className="card-content">
            <h2>World-Class Dining</h2>
            <p>Indulge in a variety of culinary delights prepared by our world-class chefs.</p>
          </div>
        </div>

        <div className="card">
          <img src={e2} alt="Entertainment" className="card-image" />
          <div className="card-content">
            <h2>Entertainment</h2>
            <p>Enjoy a wide array of entertainment options, including live performances and themed parties.</p>
          </div>
        </div>

        <div className="card">
          <img src={d3} alt="Destinations" className="card-image" />
          <div className="card-content">
            <h2>Destinations</h2>
            <p>Explore breathtaking destinations around the world with our luxury cruise experience.</p>
          </div>
        </div>

        <div className="card">
          <img src={h3} alt="Features" className="card-image" />
          <div className="card-content">
            <h2>Features</h2>
            <p>Discover the unique features and amenities that make our cruise experience unforgettable.</p>
          </div>
        </div>

        <div className="card">
          <img src={rr3} alt="Relaxation" className="card-image" />
          <div className="card-content">
            <h2>Relaxation</h2>
            <p>Unwind and relax in our luxurious spa and wellness centers.</p>
          </div>
        </div>
      </div>

      <footer className="cruise-footer">
        <p>Book your next adventure with us and experience the ultimate in luxury and comfort.</p>
      </footer>
    </div>
  );
};

export default CruiseOverview;
