import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ReviewPage.css';

const ReviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { departureDate, numberOfGuests, roomType, totalPrice, selectedRoom } = location.state || {};

  useEffect(() => {
    // Check if the user is logged in
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
      // Redirect to login page if not logged in
      navigate('/login');
    }
  }, [navigate]);

  const handleConfirmBooking = () => {
    // Here you would typically send the booking data to your backend
    alert('Booking confirmed!');
    navigate('/confirmation');
  };

  return (
    <div className="review-page">
      <h1>Review Your Booking</h1>

      <div className="booking-summary">
        <h2>Booking Summary</h2>
        <div className="summary-section">
          <h3>Leaving from</h3>
          <p>Miami, Florida</p>
          <h3>Onboard</h3>
          <p>Allure of the Seas</p>
          <h3>Dates</h3>
          <p>{new Date(departureDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="summary-section">
          <h3>Guests</h3>
          <p>{numberOfGuests}</p>
          <h3>Room Type</h3>
          <p>{roomType}</p>
        </div>

        <div className="summary-section">
          <h3>Selected Room</h3>
          {selectedRoom && (
            <>
              <p>{selectedRoom.name}</p>
              <p>${selectedRoom.pricePerPerson} Avg USD/person*</p>
              <p>${selectedRoom.total} Total/Room</p>
            </>
          )}
        </div>
      </div>

      <div className="price-summary">
        <h2>Price Summary</h2>
        <p>Cruise fare: $3,140.00</p>
        <p>Discounts: -$1,267.00</p>
        <ul>
          <li>60% off second guest</li>
          <li>Instant Savings Flash Sale</li>
          <li>Kids Sail Free</li>
        </ul>
        <p>Subtotal: $1,873.00</p>
        <p>Total Price: <strong>${totalPrice}</strong></p>
      </div>

      <div className="confirmation-section">
        <button className="confirm-button" onClick={handleConfirmBooking}>
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default ReviewPage;
