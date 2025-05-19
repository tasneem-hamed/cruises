import React, { useState } from 'react';
import './ShipHighlights.css';
import e6 from '../Images/e6.jpg'; // Example image path
import e1 from '../Images/e1.jpg'; // Example image path
import e4 from '../Images/e4.jpg'; // Example image path

const ShipHighlights = () => {
  const [activeTab, setActiveTab] = useState('dining');

  return (
    <div className="ship-highlights">
      <div className="tabs">
        <button className={activeTab === 'dining' ? 'active' : ''} onClick={() => setActiveTab('dining')}>Dining & Bars</button>
        <button className={activeTab === 'entertainment' ? 'active' : ''} onClick={() => setActiveTab('entertainment')}>Shows & Entertainment</button>
        <button className={activeTab === 'activities' ? 'active' : ''} onClick={() => setActiveTab('activities')}>Onboard Activities</button>
      </div>
      <div className="tab-content">
        {activeTab === 'dining' && (
          <div className="content-section">
            <img src={e6} alt="Dining" className="content-image" />
            <h3>Dining & Bars</h3>
            <p>Indulge in a variety of dining options and bars onboard. From casual eateries to fine dining, we offer a range of options to satisfy every palate. Enjoy gourmet meals prepared by our world-class chefs and relax with a drink at our stylish bars.</p>
          </div>
        )}
        {activeTab === 'entertainment' && (
          <div className="content-section">
            <img src={e1} alt="Entertainment" className="content-image" />
            <h3>Shows & Entertainment</h3>
            <p>Experience world-class shows and entertainment. Enjoy a wide array of entertainment options, including live performances, concerts, and themed parties. Our cruise ships are equipped with state-of-the-art facilities to ensure a memorable experience.</p>
          </div>
        )}
        {activeTab === 'activities' && (
          <div className="content-section">
            <img src={e4} alt="Activities" className="content-image" />
            <h3>Onboard Activities</h3>
            <p>Participate in exciting onboard activities. From fitness classes to art workshops, there's something for everyone. Enjoy a range of activities designed to keep you entertained and engaged throughout your journey.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShipHighlights;
