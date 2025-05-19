import React from 'react';
import './PopularCruises.css';
import caribbeanImage from '../Images/caribbean.jpg'; // Example image path
import alaskaImage from '../Images/alaska.jpeg'; // Example image path
import europeImage from '../Images/europe.jpg'; // Example image path
import mexicoImage from '../Images/mexico.jpg'; // Example image path

const PopularCruises = () => {
  const cruises = [
    {
      id: 1,
      name: 'Caribbean Cruise',
      price: '$407',
      description: 'Explore the beautiful Caribbean islands.',
      image: caribbeanImage,
      duration: 7,
      ports: 5,
      highlights: ['Pristine beaches', 'Crystal-clear waters', 'Vibrant culture'],
      itinerary: [
        { title: 'Day 1: Miami, Florida', description: 'Depart from Miami.' },
        { title: 'Day 2: Nassau, Bahamas', description: 'Explore the vibrant city of Nassau.' },
        { title: 'Day 3: At Sea', description: 'Enjoy a day at sea.' },
        { title: 'Day 4: Cozumel, Mexico', description: 'Discover the beauty of Cozumel.' },
        { title: 'Day 5: At Sea', description: 'Relax and enjoy the onboard amenities.' },
        { title: 'Day 6: Grand Cayman, Cayman Islands', description: 'Visit the stunning Grand Cayman.' },
        { title: 'Day 7: Miami, Florida', description: 'Return to Miami.' },
      ],
    },
    {
      id: 2,
      name: 'Alaska Cruise',
      price: '$500',
      description: 'Experience the stunning landscapes of Alaska.',
      image: alaskaImage,
      duration: 10,
      ports: 7,
      highlights: ['Majestic glaciers', 'Wildlife', 'Frontier spirit'],
      itinerary: [
        { title: 'Day 1: Seattle, Washington', description: 'Depart from Seattle.' },
        { title: 'Day 2: At Sea', description: 'Enjoy a day at sea.' },
        { title: 'Day 3: Juneau, Alaska', description: 'Explore the capital of Alaska.' },
        { title: 'Day 4: Skagway, Alaska', description: 'Discover the historic town of Skagway.' },
        { title: 'Day 5: Glacier Bay National Park', description: 'Experience the beauty of Glacier Bay.' },
        { title: 'Day 6: Ketchikan, Alaska', description: 'Visit the charming town of Ketchikan.' },
        { title: 'Day 7: At Sea', description: 'Relax and enjoy the onboard amenities.' },
        { title: 'Day 8: Victoria, British Columbia', description: 'Explore the beautiful city of Victoria.' },
        { title: 'Day 9: At Sea', description: 'Enjoy a day at sea.' },
        { title: 'Day 10: Seattle, Washington', description: 'Return to Seattle.' },
      ],
    },
    {
      id: 3,
      name: 'Europe Cruise',
      price: '$600',
      description: 'Discover the historic sites of Europe.',
      image: europeImage,
      duration: 12,
      ports: 9,
      highlights: ['Ancient civilizations', 'Stunning coastal cities', 'Rich history'],
      itinerary: [
        { title: 'Day 1: Barcelona, Spain', description: 'Depart from Barcelona.' },
        { title: 'Day 2: At Sea', description: 'Enjoy a day at sea.' },
        { title: 'Day 3: Nice, France', description: 'Explore the beautiful city of Nice.' },
        { title: 'Day 4: Florence/Pisa (Livorno), Italy', description: 'Discover the historic cities of Florence and Pisa.' },
        { title: 'Day 5: Rome (Civitavecchia), Italy', description: 'Visit the eternal city of Rome.' },
        { title: 'Day 6: At Sea', description: 'Relax and enjoy the onboard amenities.' },
        { title: 'Day 7: Naples, Italy', description: 'Explore the vibrant city of Naples.' },
        { title: 'Day 8: At Sea', description: 'Enjoy a day at sea.' },
        { title: 'Day 9: Palermo, Sicily', description: 'Discover the beauty of Palermo.' },
        { title: 'Day 10: At Sea', description: 'Relax and enjoy the onboard amenities.' },
        { title: 'Day 11: Valencia, Spain', description: 'Visit the stunning city of Valencia.' },
        { title: 'Day 12: Barcelona, Spain', description: 'Return to Barcelona.' },
      ],
    },
    {
      id: 4,
      name: 'Mexico Cruise',
      price: '$450',
      description: 'Enjoy the vibrant culture of Mexico.',
      image: mexicoImage,
      duration: 5,
      ports: 3,
      highlights: ['Vibrant culture', 'Beautiful beaches', 'Rich history'],
      itinerary: [
        { title: 'Day 1: Los Angeles, California', description: 'Depart from Los Angeles.' },
        { title: 'Day 2: At Sea', description: 'Enjoy a day at sea.' },
        { title: 'Day 3: Cabo San Lucas, Mexico', description: 'Explore the beautiful city of Cabo San Lucas.' },
        { title: 'Day 4: Mazatlán, Mexico', description: 'Discover the charm of Mazatlán.' },
        { title: 'Day 5: Los Angeles, California', description: 'Return to Los Angeles.' },
      ],
    },
  ];

  return (
    <div className="popular-cruises">
      <h1>Popular Destinations</h1>
      <p>Explore our most popular cruise destinations and find your next adventure.</p>

      <div className="cruise-cards">
        {cruises.map((cruise) => (
          <div key={cruise.id} className="cruise-card">
            <img src={cruise.image} alt={cruise.name} className="cruise-image" />
            <div className="cruise-content">
              <h2>{cruise.name}</h2>
              <p>{cruise.description}</p>
              <p>Duration: {cruise.duration} days</p>
              <p>Ports: {cruise.ports}</p>
              <p>Price: {cruise.price}</p>
              <button className="view-more-button">View More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCruises;
