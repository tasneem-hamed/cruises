import React, { useState } from 'react';
import './Packages.css';
import couplesImage from '../Images/coup.jpg'; // Example image path
import familiesImage from '../Images/fam2.jpg'; // Example image path
import friendsImage from '../Images/fr.jpg'; // Example image path
import soloImage from '../Images/solo.jpg'; // Example image path

const Packages = () => {
  const [packageType, setPackageType] = useState('couples');

  const packages = {
    couples: {
      image: couplesImage,
      destinations: ['Caribbean', 'Europe'],
      activities: ['Romantic Dinners', 'Couple Spa'],
      description: 'Perfect for couples looking for a romantic getaway. Enjoy intimate dinners and relaxing spa treatments together.',
    },
    families: {
      image: familiesImage,
      destinations: ['Alaska', 'Mexico'],
      activities: ['Family Shows', 'Kids Club'],
      description: 'Ideal for families seeking fun and adventure. Enjoy family-friendly shows and activities for kids of all ages.',
    },
    friends: {
      image: friendsImage,
      destinations: ['Europe', 'Caribbean'],
      activities: ['Group Activities', 'Nightlife'],
      description: 'Great for groups of friends looking for excitement and fun. Enjoy group activities and vibrant nightlife.',
    },
    solo: {
      image: soloImage,
      destinations: ['Alaska', 'Mexico'],
      activities: ['Solo Adventures', 'Wellness'],
      description: 'Perfect for solo travelers seeking adventure and relaxation. Enjoy solo adventures and wellness activities.',
    },
  };

  return (
    <div className="packages">
      <h1>Packages</h1>
      <p>Choose the perfect package for your next adventure.</p>

      <div className="package-tabs">
        <button className={packageType === 'couples' ? 'active' : ''} onClick={() => setPackageType('couples')}>Couples</button>
        <button className={packageType === 'families' ? 'active' : ''} onClick={() => setPackageType('families')}>Families</button>
        <button className={packageType === 'friends' ? 'active' : ''} onClick={() => setPackageType('friends')}>Friends</button>
        <button className={packageType === 'solo' ? 'active' : ''} onClick={() => setPackageType('solo')}>Solo</button>
      </div>

      <div className="package-content">
        <div className="package-card">
          <img src={packages[packageType].image} alt={packageType} className="package-image" />
          <div className="package-details">
            <h2>{packageType.charAt(0).toUpperCase() + packageType.slice(1)} Package</h2>
            <p>{packages[packageType].description}</p>
            <div className="package-info">
              <h3>Destinations</h3>
              <p>{packages[packageType].destinations.join(', ')}</p>
              <h3>Activities</h3>
              <p>{packages[packageType].activities.join(', ')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
