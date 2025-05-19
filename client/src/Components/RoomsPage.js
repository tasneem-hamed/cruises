import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './RoomsPage.css';
import r1 from "../Images/r1.jpg";
import r2 from "../Images/r2.jpg";
import r3 from "../Images/r3.jpg";
import r4 from "../Images/r4.jpg";
import r5 from "../Images/r5.jpg";
import r6 from "../Images/r6.jpg";
import r7 from "../Images/r7.jpg";
import r9 from "../Images/r9.jpg";

const suites = [
  {
    id: 'junior',
    name: 'Junior Suite',
    description: [
      'Our standard suite for luxury on a budget',
      'Private balcony with two chairs',
      'Sea Class amenities',
    ],
    pricePerPerson: 759,
    total: 2275,
    image: 'r1',
  },
  {
    id: 'sky-junior',
    name: 'Sky Junior Suite',
    description: [
      'Our standard Junior Suite with extra perks',
      'Private balcony with chairs',
      'Sky Class amenities',
      '*Complimentary VOOM internet package is no longer available',
    ],
    pricePerPerson: 968,
    total: 2903,
    image: r2,
  },
   {
    id: 'sky-junior',
    name: 'Sky Junior Suite',
    description: [
      'Our standard Junior Suite with extra perks',
      'Private balcony with chairs',
      'Sky Class amenities',
      '*Complimentary VOOM internet package is no longer available',
    ],
    pricePerPerson: 968,
    total: 2903,
    image: r2,
  },
   {
    id: 'sky-junior',
    name: 'Sky Junior Suite',
    description: [
      'Our standard Junior Suite with extra perks',
      'Private balcony with chairs',
      'Sky Class amenities',
      '*Complimentary VOOM internet package is no longer available',
    ],
    pricePerPerson: 968,
    total: 2903,
    image: r2,
  },
   {
    id: 'Royal',
    name: 'Sky Junior Suite',
    description: [
      'Our standard Junior Suite with extra perks',
      'Private balcony with chairs',
      'Sky Class amenities',
      '*Complimentary VOOM internet package is no longer available',
    ],
    pricePerPerson: 1500,
    total: 3000,
    image: r7,
  },
   {
    id: 'Delux',
    name: 'Sky Junior Suite',
    description: [
      'Our standard Junior Suite with extra perks',
      'Private balcony with chairs',
      'Sky Class amenities',
      '*Complimentary VOOM internet package is no longer available',
    ],
    pricePerPerson: 786,
    total: 2903,
    image: r3,
  },
   {
    id: 'Inerionr',
    name: 'Sky Junior Suite',
    description: [
      'Our standard Junior Suite with extra perks',
      'Private balcony with chairs',
      'Sky Class amenities',
      '*Complimentary VOOM internet package is no longer available',
    ],
    pricePerPerson: 500,
    total: 800,
    image: r5,
  },
   {
    id: 'sky-junior',
    name: 'Sky Junior Suite',
    description: [
      'Our standard Junior Suite with extra perks',
      'Private balcony with chairs',
      'Sky Class amenities',
      '*Complimentary VOOM internet package is no longer available',
    ],
    pricePerPerson: 968,
    total: 2903,
    image: r2,
  },
  {
    id: 'sky-junior',
    name: 'Sky Junior Suite',
    description: [
      'Our standard Junior Suite with extra perks',
      'Private balcony with chairs',
      'Sky Class amenities',
      '*Complimentary VOOM internet package is no longer available',
    ],
    pricePerPerson: 968,
    total: 2903,
    image: r6,
  },
  {
    id: 'sky-junior',
    name: 'Sky Junior Suite',
    description: [
      'Our standard Junior Suite with extra perks',
      'Private balcony with chairs',
      'Sky Class amenities',
      '*Complimentary VOOM internet package is no longer available',
    ],
    pricePerPerson: 968,
    total: 2903,
    image: r9,
  },

];

function RoomPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state;

  const handleSelect = (suite) => {
    navigate('/reviewPage', {
      state: {
        ...bookingData,
        selectedRoom: suite,
      },
    });
  };

  return (
    <div className="room-page">
      <div className="room-summary">
        <div className="summary-section">
          <h3>Leaving from</h3>
          <p>{bookingData?.departure || 'Miami, Florida'}</p>
          <h3>Onboard</h3>
          <p>{bookingData?.ship || 'Allure of the Seas'}</p>
          <h3>Dates</h3>
          <p>{bookingData?.dates || 'Feb 5 - Feb 8, 2027'}</p>
        </div>
        <div className="summary-section">
          <h3>Guests</h3>
          <p>{bookingData?.guests || '2 Adults, 1 Child'}</p>
          <h3>Room Type</h3>
          <p>Suite</p>
        </div>
        <div className="summary-section">
          <h3>Summary</h3>
          <p>Cruise fare: $3,140.00</p>
          <p>Discounts: -$1,267.00</p>
          <ul>
            <li>60% off second guest</li>
            <li>Instant Savings Flash Sale</li>
            <li>Kids Sail Free</li>
          </ul>
          <p>Subtotal: $1,873.00</p>
        </div>
      </div>

      <div className="room-selection">
        <h2>Select your Suite room</h2>
        <div className="suite-grid">
          {suites.map((suite) => (
            <div key={suite.id} className="suite-card">
              <img src={suite.image} alt={suite.name} className="suite-image" />
              <div className="suite-info">
                <h3>{suite.name}</h3>
                <ul className="suite-features">
                  {suite.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
                <div className="suite-price">
                  <p>
                    <strong>${suite.pricePerPerson}</strong> Avg USD/person*
                  </p>
                  <p>
                    <strong>${suite.total}</strong> Total/Room<br />
                    Taxes & fees included
                  </p>
                  <button className="select-button" onClick={() => handleSelect(suite)}>Select</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomPage;
