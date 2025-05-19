import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingSearchBar.css';
import r16 from "../Images/r16.jpg";
import rr1 from "../Images/rr1.jpg";
import r2 from "../Images/r2.jpg";
import r4 from "../Images/r4.jpg";

const BookingSearchBar = () => {
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [departureDate, setDepartureDate] = useState('2027-02-05');
  const [roomType, setRoomType] = useState('Royal Suite Class');
  //const [fixedDate, setFixedDates] useState('');
  const [price, setPrice] = useState(759);
  const [expandedSection, setExpandedSection] = useState(null);

  const navigate = useNavigate();

  // Fixed departure dates and prices for trips
  const fixedDates = [
    { id: 1, date: '2027-01-15', price: 530 },
    { id: 2, date: '2027-01-22', price: 441 },
    { id: 3, date: '2027-01-29', price: 407 },
    { id: 4, date: '2027-02-05', price: 759 },
  ];

  const roomTypes = [
    { id: 1, type: 'Interior', price: 393, image: r16, features: ['Cozy', 'Affordable', 'Comfortable'] },
    { id: 2, type: 'Ocean View', price: 407, image: r4, features: ['Scenic Views', 'Spacious', 'Bright'] },
    { id: 3, type: 'Balcony', price: 444, image: r2, features: ['Private Balcony', 'Luxurious', 'Spacious'] },
    { id: 4, type: 'Royal Suite Class', price: 759, image: rr1, features: ['Premium', 'Exclusive', 'Luxurious'] },
  ];
   const handleDateChange = (date, price, image, destination, description) => {
    setDepartureDate(date);
    setPrice(price);
    setExpandedSection(null);
  };

 // const handleDateChange = (date, price) => {
   // setDepartureDate(date);
   // setPrice(price);
    //setExpandedSection(null);
  //};

  const handleRoomTypeChange = (type, price) => {
    setRoomType(type);
    setPrice(price);
    setExpandedSection(null);
  };

  const handleGuestChange = (guests) => {
    setNumberOfGuests(guests);
    setExpandedSection(null);
  };

  const toggleExpandSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const totalPrice = price * numberOfGuests;

  const handleBookNow = () => {
    navigate('/book', { state: { departureDate, numberOfGuests,fixedDates, roomType, totalPrice } });
  };

  return (
    <div className="booking-search">
      <div className="booking-options">
        <div className="option" onClick={() => toggleExpandSection('date')}>
          <label>Departure Date</label>
          <div className="selection">
            {new Date(departureDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
           {expandedSection === 'date' && (
            <div className="expanded-options">
              {fixedDates.map((dateOption) => (
                <div key={dateOption.id} className="date-option" onClick={() => handleDateChange(dateOption.date, dateOption.price, dateOption.image, dateOption.destination, dateOption.description)}>
                  {new Date(dateOption.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} - ${dateOption.price}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="option"  onClick={() => toggleExpandSection('guests')}>
          <label>Number of Guests</label>
          <div className="selection">{numberOfGuests} Guest{numberOfGuests !== 1 ? 's' : ''}</div>
          {expandedSection === 'guests' && (
            <div className="expanded-options">
              {[1, 2, 3, 4, 5, 6].map((guest) => (
                <div key={guest} className="guest-option" onClick={() => handleGuestChange(guest)}>
                  {guest} Guest{guest !== 1 ? 's' : ''}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="option" onClick={() => toggleExpandSection('room')}>
          <label>Room Type</label>
          <div className="selection">{roomType}</div>
          {expandedSection === 'room' && (
            <div className="expanded-options">
              {roomTypes.map((roomOption) => (
                <div key={roomOption.id} className="room-option" onClick={() => handleRoomTypeChange(roomOption.type, roomOption.price)}>
                  <img src={roomOption.image} alt={roomOption.type} className="room-image" />
                  <div className="room-details">
                    <h4>{roomOption.type}</h4>
                    <p>${roomOption.price}/person</p>
                    <ul>
                      {roomOption.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="price-and-book">
          <div className="price-display">
            <p>Starting from: <strong>${price}/person*</strong></p>
            <p>Total: <strong>${totalPrice}</strong></p>
          </div>
          <button className="book-now-button" onClick={handleBookNow}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default BookingSearchBar;
