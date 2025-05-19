import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingPage.css';
import d1 from "../Images/d1.jpg";
import d2 from "../Images/d2.PNG";
import d3 from "../Images/d3.png";
import d4 from "../Images/d4.jpg";

const BookingPage = () => {
  const [includedOpen, setIncludedOpen] = useState(false); // Define the includedOpen state
  const location = useLocation();
  const navigate = useNavigate();
  const { departureDate, numberOfGuests, roomType, totalPrice, tripId } = location.state || {};

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [wheelchairAccessible, setWheelchairAccessible] = useState(false);

  // Define trip details based on tripId
  const tripDetails = {
    1: {
      image: d1,
      destination: "Mediterranean Odyssey",
      description: "Journey through ancient civilizations and stunning coastal cities of the Mediterranean.",
      leavingFrom: "Miami, Florida, USA",
      onboard: "Allure of the Seas"
    },
    2: {
      image: d2,
      destination: "Alaskan Wilderness",
      description: "Experience the majestic glaciers, wildlife, and frontier spirit of America's Last Frontier.",
      leavingFrom: "Vancouver, Canada",
      onboard: "Allure of the Seas"
    },
    3: {
      image: d3,
      destination: "Norwegian Fjords",
      description: "Sail through dramatic fjords, picturesque villages, and stunning Nordic landscapes.",
      leavingFrom: "Oslo, Norway",
      onboard: "Allure of the Seas"
    },
    4: {
      image: d4,
      destination: "Caribbean Paradise",
      description: "Explore the pristine beaches and crystal-clear waters of the Eastern Caribbean islands.",
      leavingFrom: "Florida, USA",
      onboard: "Caribbean Seas"
    }
  };

  const selectedTrip = tripDetails[tripId] || tripDetails[4]; // Default to the last trip if tripId is not found

  const handleInsureBooking = () => {
    alert('Booking insured!');
  };

  const handleAddRoom = () => {
    navigate('/roomsPage', { state: { adults, children, wheelchairAccessible } });
  };

  return (
    <div className="booking-page">
      <div className="destination-info">
        <img src={selectedTrip.image} alt={selectedTrip.destination} className="destination-image" />
        <h2>{selectedTrip.destination}</h2>
        <p>{selectedTrip.description}</p>
        <p>Leaving from: {selectedTrip.leavingFrom}</p>
        <p>Onboard: {selectedTrip.onboard}</p>
        <p>Dates: {new Date(departureDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <a href="#ports">View Ports</a>
        <div className="included">
          <button className="dropdown-toggle" onClick={() => setIncludedOpen(!includedOpen)}>
            Included in your cruise {includedOpen ? "▲" : "▼"}
          </button>
          {includedOpen && (
            <ul className="included-list">
              <li>Accommodation in selected room</li>
              <li>All meals on board</li>
              <li>Access to facilities and entertainment</li>
              <li>Port taxes and charges</li>
              {/* Add more as needed */}
            </ul>
          )}
        </div>
        <div className="room-selection">
          <h3>Room Selection</h3>
          <p>Guests: {numberOfGuests}</p>
          <p>Room type: {roomType}</p>
        </div>
      </div>

      <div className="room-configuration">
        <h3>Room 1 Configuration</h3>
        <div className="guest-selection">
          <div className="guest-type">
            <label>Adults</label>
            <div className="guest-count">
              <button onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
              <span>{adults}</span>
              <button onClick={() => setAdults(adults + 1)}>+</button>
            </div>
            <p>Age 13+</p>
          </div>
          <div className="guest-type">
            <label>Children</label>
            <div className="guest-count">
              <button onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
              <span>{children}</span>
              <button onClick={() => setChildren(children + 1)}>+</button>
            </div>
            <p>Age 0-12</p>
          </div>
        </div>

        <div className="price-details">
          <p>Suite starting from</p>
          <p className="price">${totalPrice || 759}</p>
          <p>Avg USD/person*</p>
          <p>${(totalPrice || 759) * (adults + children)} Total/Room</p>
          <p>Taxes & fees included</p>
          <p>As low as $142/mo or 0% APR with affirm</p>
        </div>

        <div className="additional-options">
          <label>
            <input type="checkbox" checked={wheelchairAccessible} onChange={() => setWheelchairAccessible(!wheelchairAccessible)} />
            Wheelchair accessible
          </label>
        </div>

        <button className="add-room-button" onClick={handleAddRoom}>Add another room +</button>
        <button className="continue-booking-button" onClick={() => navigate('/reviewPage', { state: { adults, children, wheelchairAccessible, departureDate, numberOfGuests, roomType, totalPrice } })}>Continue Booking</button>
      </div>
    </div>
  );
};

export default BookingPage;
