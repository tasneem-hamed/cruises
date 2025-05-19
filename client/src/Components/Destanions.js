import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Destantios.css";

// Mock data for destinations
const destinations = [
  {
    id: 1,
    name: "Caribbean Paradise",
    location: "Caribbean",
    duration: 7,
    ports: 5,
    shortDescription: "Explore the pristine beaches and crystal-clear waters of the Eastern Caribbean islands.",
    pricing: { standard: 759 },
    image: "/images/caribbean.jpg",
    region: "Caribbean"
  },
  {
    id: 2,
    name: "Mediterranean Odyssey",
    location: "Mediterranean",
    duration: 10,
    ports: 7,
    shortDescription: "Journey through ancient civilizations and stunning coastal cities of the Mediterranean.",
    pricing: { standard: 968 },
    image: "/images/mediterranean.jpg",
    region: "Mediterranean"
  },
  {
    id: 3,
    name: "Alaskan Wilderness",
    location: "Alaska",
    duration: 14,
    ports: 8,
    shortDescription: "Experience the majestic glaciers, wildlife, and frontier spirit of America's Last Frontier.",
    pricing: { standard: 1200 },
    image: "/images/alaska.jpg",
    region: "Alaska"
  },
  {
    id: 4,
    name: "European Adventure",
    location: "Europe",
    duration: 12,
    ports: 9,
    shortDescription: "Discover the rich history, diverse cultures, and breathtaking landscapes of Europe.",
    pricing: { standard: 1100 },
    image: "/images/europe.jpg",
    region: "Europe"
  },
  {
    id: 5,
    name: "Asian Expedition",
    location: "Asia",
    duration: 15,
    ports: 10,
    shortDescription: "Explore the vibrant cultures, ancient temples, and bustling cities of Asia.",
    pricing: { standard: 1300 },
    image: "/images/asia.jpg",
    region: "Asia"
  }
];

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDuration, setFilterDuration] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  const filteredDestinations = destinations.filter(dest => {
    // Apply search term filter
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          dest.location.toLowerCase().includes(searchTerm.toLowerCase());

    // Apply duration filter
    let matchesDuration = true;
    if (filterDuration) {
      if (filterDuration === "short" && dest.duration > 5) matchesDuration = false;
      if (filterDuration === "medium" && (dest.duration < 6 || dest.duration > 9)) matchesDuration = false;
      if (filterDuration === "long" && dest.duration < 10) matchesDuration = false;
    }

    // Apply region filter
    const matchesRegion = !filterRegion || dest.region === filterRegion;

    return matchesSearch && matchesDuration && matchesRegion;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Destinations</h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover breathtaking cruise destinations around the world
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
                    <input
                      placeholder="Search destinations..."
                      className="w-full pl-10 p-2 border border-gray-300 rounded-md"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4">
                  <select
                    className="border border-gray-300 rounded-md p-2"
                    value={filterDuration}
                    onChange={(e) => setFilterDuration(e.target.value)}
                  >
                    <option value="">Any Duration</option>
                    <option value="short">Short (2-5 days)</option>
                    <option value="medium">Medium (6-9 days)</option>
                    <option value="long">Long (10+ days)</option>
                  </select>

                  <select
                    className="border border-gray-300 rounded-md p-2"
                    value={filterRegion}
                    onChange={(e) => setFilterRegion(e.target.value)}
                  >
                    <option value="">All Regions</option>
                    <option value="Caribbean">Caribbean</option>
                    <option value="Mediterranean">Mediterranean</option>
                    <option value="Alaska">Alaska</option>
                    <option value="Europe">Europe</option>
                    <option value="Asia">Asia</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map(destination => (
                <div key={destination.id} className="overflow-hidden destination-card bg-white rounded-lg shadow-md">
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${destination.image})` }}
                  ></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                    <div className="flex items-center mb-3 text-gray-600">
                      <span className="icon mr-1">📍</span>
                      <span className="text-sm">{destination.location}</span>
                    </div>
                    <div className="flex items-center mb-4 text-gray-600">
                      <span className="icon mr-1">📅</span>
                      <span className="text-sm">{destination.duration} Days</span>
                      <span className="icon ml-3 mr-1">🚢</span>
                      <span className="text-sm">{destination.ports} Ports</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {destination.shortDescription}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold">From ${destination.pricing.standard}</span>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <Link to={`/destination/${destination.id}`}>
                          View Details
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <h3 className="text-xl font-bold mb-2">No destinations found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria</p>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    setSearchTerm("");
                    setFilterDuration("");
                    setFilterRegion("");
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
