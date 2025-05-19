import React from 'react';
import './WhatsIncluded.css';
import b from '../Images/b.png'; // Example image path
import e from '../Images/eee.jpg'; // Example image path
import f from '../Images/f.jpg'; // Example image path
import o from '../Images/o.jpg'; // Example image path

const WhatsIncluded = () => {
  return (
    <div className="whats-included">
      <h1>What's Included</h1>
      <p>Discover the range of amenities and services included in your cruise experience.</p>

      <div className="included-grid">
        <div className="included-card">
          <img src={b} alt="Beverages" className="included-image" />
          <div className="included-content">
            <h2>Beverages</h2>
            <p>Standard beverages like water, coffee, juice, and tea options are included.</p>
          </div>
        </div>

        <div className="included-card">
          <img src={f} alt="Food" className="included-image" />
          <div className="included-content">
            <h2>Food & Snacks</h2>
            <p>Food and snacks at our cafes and buffets are included.</p>
          </div>
        </div>

        <div className="included-card">
          <img src={e} alt="Entertainment" className="included-image" />
          <div className="included-content">
            <h2>Entertainment</h2>
            <p>Shows, live music, and entertainment are included.</p>
          </div>
        </div>

        <div className="included-card">
          <img src={o} alt="Onboard Experiences" className="included-image" />
          <div className="included-content">
            <h2>Onboard Experiences</h2>
            <p>Most onboard experiences are included.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsIncluded;
