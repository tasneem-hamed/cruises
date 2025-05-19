import React, { useState } from 'react';
import hero from "../Images/hero.jpg";
import h2 from "../Images/h2.jpg";
import p1 from "../Images/p1.PNG";
import a6 from "../Images/a6.PNG";
import a5 from "../Images/a5.PNG";
import a4 from "../Images/a4.PNG";
import a3 from "../Images/a3.PNG";
import Location from "./Location";
import Layout from './Layout';
//import './About.css';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="about-container">
      <div className="card">
        <img
          src={hero}
          alt="Cruise Banner"
          className="card-background"
        />
        <div className="card-content">
          <h2 className="about-title">About Our Cruise Booking System</h2>
          <p className="about-text">
            Welcome to our <strong>Cruise Booking System</strong> — your gateway to unforgettable ocean adventures!
            This platform helps users browse and book cruises based on destination,
            trip type (family, couples, or friends), and travel preferences.
          </p>
          <p className="about-text">
            Our system is built using the MERN stack (MongoDB, Express, React, Node.js) and
            provides features like account registration,
            trip selection, event filtering, booking confirmation, and a personalized user dashboard.
          </p>
          <button onClick={toggleExpand} className="expand-button">
            {isExpanded ? 'Show Less' : 'Learn More'}
          </button>
          {isExpanded && (
            <div className="expanded-content">
              <p className="about-text">
                Whether you're looking for a romantic getaway or a family adventure,
                our platform is here to simplify your cruise planning experience.
              </p>
              <p className="about-text">
                We offer a wide range of cruise options, from luxury liners to budget-friendly voyages.
                Our user-friendly interface ensures a seamless booking process.
              </p>
              <p className="about-text">
                Founded in 2010, our company has grown to become a leader in the cruise booking industry.
                We pride ourselves on offering exceptional customer service and a wide range of activities
                to suit every traveler's needs.
              </p>
              <p className="about-text">
                Our logo, a stylized wave, symbolizes our commitment to providing smooth and enjoyable cruise
                experiences.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="cruise-direct">
        <img src={h2} alt="Office Building" className="office-image" />
        <div className="cruise-direct-content">
          <p>
            At CruiseDirect, we know that planning a vacation shouldn't be a chore, it should be fun!
            By utilizing the latest advances in technology, such as live pricing and availability,
            we've made it as easy as 1-2-3 to research, arrange, and book reservations online without any hassles.
          </p>
          <p>
            Our philosophy is that your vacation starts from the minute you visit our site.
            That's why we have provided our customers with rich, inspiring content to help ease the decision-making process.
            We also work with the best suppliers in the business to ensure that you will always get the lowest price for your cruise.
            In fact, we're so confident you won't find a better rate, we're willing to guarantee it!
            When it comes time to reserve the cabin you want, at the price you want,
            our booking engine makes the process fast and friendly.
            Yet even with all that our website offers, we realize that sometimes you need a helping hand.
            Our experienced support team and crew of sales agents are always just a phone call away,
            ready to assist you in any way they possibly can.
          </p>
        </div>
      </div>

      <div className="why-us">
        <h2>WHY US</h2>
        <div className="why-us-cards">
          <div className="why-us-card">
            <div className="why-us-icon">
              <img src={a6} alt="Specialised Assistance" />
            </div>
            <h3>SPECIALISED ASSISTANCE</h3>
            <p>Our operators are called TOP CRUISER, they are travel agents specialised in cruises and offer our customers all the assistance they can to reserve a cruise.</p>
          </div>
          <div className="why-us-card">
            <div className="why-us-icon">
              <img src={a5} alt="Your Cruise" />
            </div>
            <h3>YOUR CRUISE</h3>
            <p>Everything you need to know about a cruise, how to choose it, how to embark until what to do on board. Read our cruise guide.</p>
          </div>
          <div className="why-us-card">
            <div className="why-us-icon">
              <img src={a3} alt="Insurance" />
            </div>
            <h3>INSURANCE</h3>
            <p>Cruisetopic collaborates with Europe Assistance to protect the holiday of its customers and with the cancellation guarantees can allow customers to reserve ahead of time.</p>
          </div>
          <div className="why-us-card">
            <div className="why-us-icon">
              <img src={a4} alt="Opening Hours" />
            </div>
            <h3>OPENING HOURS</h3>
            <p>Our offices are open from: Monday to Friday from 9am to 7pm. Saturday and Sunday from 10am to 7pm. We are also available on our Chat and WhatsApp at 392 333 5525.</p>
          </div>
        </div>
      </div>

      <div className="travel-partners">
        <h2>TRAVEL PARTNERS</h2>
        <div className="partner-logos">
          <img src={p1} alt="Centerd" />
        </div>
      </div>

      <div className="office-location">
        <h2>OFFICE LOCATION</h2>
        <p>For more details about our office locations, please visit our location :
          <Location />
        </p>
      </div>
      <div className="developer-info">
        <img
          src={h2}
          alt="Developer"
          className="developer-photo"
        />
        <div>
          <p className="developer-name-label">Developed by:</p>
          <p className="developer-name">Tasneem & Mithaq</p>
          <p className="developer-id">Student ID: 66S1915 & 66S193 </p>
        </div>
      </div>
    </div>
  );
};

export default About;
