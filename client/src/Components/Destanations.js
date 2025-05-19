import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { MapPin, Calendar, Users, Ship, Clock, Utensils, Wifi, Tv, Check } from "lucide-react";
//import { destinations } from "./data/destinations";
import "./Destanations.css";

const Destination = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState("standard");
  const [guests, setGuests] = useState(2);
  const [departureDate, setDepartureDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [includeMeals, setIncludeMeals] = useState(true);
  const [includeActivities, setIncludeActivities] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Find destination by ID
      const dest = destinations.find(d => d.id === parseInt(id));
      if (dest) {
        setDestination(dest);
      } else {
        toast.error("Destination not found");
        navigate("/destinations");
      }
    }
  }, [id, navigate]);

  useEffect(() => {
    if (destination) {
      calculatePrice();
    }
  }, [selectedRoom, guests, includeMeals, includeActivities]);

  const calculatePrice = () => {
    if (!destination) return;

    let basePrice = 0;

    switch (selectedRoom) {
      case "standard":
        basePrice = destination.pricing.standard;
        break;
      case "deluxe":
        basePrice = destination.pricing.deluxe;
        break;
      case "suite":
        basePrice = destination.pricing.suite;
        break;
      default:
        basePrice = destination.pricing.standard;
    }

    // Multiply by guests (first 2 guests included in base price)
    let price = basePrice;
    if (guests > 2) {
      price += (guests - 2) * (basePrice * 0.5); // 50% of base price per additional guest
    }

    // Add extras
    if (includeMeals) price += 299 * guests;
    if (includeActivities) price += 199 * guests;

    setTotalPrice(price);
  };

  const handleBookNow = () => {
    if (!departureDate) {
      toast.error("Please select a departure date");
      return;
    }

    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      toast.error("Please login to book a cruise");
      navigate("/login");
      return;
    }

    // Calculate return date (7 days after departure)
    const depDate = new Date(departureDate);
    const retDate = new Date(depDate);
    retDate.setDate(retDate.getDate() + destination.duration);

    // Create booking
    const booking = {
      id: Date.now(),
      destination: destination.name,
      image: destination.image,
      departureDate,
      returnDate: retDate.toISOString().split('T')[0],
      roomType: selectedRoom,
      guests,
      totalPrice,
      extras: {
        meals: includeMeals,
        activities: includeActivities
      }
    };

    // Save booking to user profile
    const users = JSON.parse(localStorage.getItem("cruiseUsers") || "[]");
    const userData = JSON.parse(currentUser);
    const userIndex = users.findIndex(u => u.id === userData.id);

    if (userIndex !== -1) {
      if (!users[userIndex].bookings) {
        users[userIndex].bookings = [];
      }

      users[userIndex].bookings.push(booking);
      localStorage.setItem("cruiseUsers", JSON.stringify(users));

      toast.success("Booking confirmed!");
      navigate("/profile");
    }
  };

  if (!destination) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
        <div className="absolute bottom-0 left-0 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">{destination.name}</h1>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{destination.location}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">About This Cruise</h2>
              <p className="text-gray-700">{destination.description}</p>

              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  <span>{destination.duration} Days</span>
                </div>
                <div className="flex items-center">
                  <Ship className="h-5 w-5 mr-2 text-primary" />
                  <span>{destination.ship}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  <span>{destination.ports} Ports</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Highlights</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
              <div className="space-y-4">
                {destination.itinerary.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="font-bold flex items-center">
                      <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center mr-3">
                        {index + 1}
                      </span>
                      Day {index + 1}: {item.title}
                    </div>
                    <p className="mt-2 text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Book This Cruise</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Departure Date</label>
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Room Type</label>
                  <select
                    className="w-full border border-gray-300 rounded-md p-2"
                    value={selectedRoom}
                    onChange={(e) => setSelectedRoom(e.target.value)}
                  >
                    <option value="standard">Standard Room (${destination.pricing.standard})</option>
                    <option value="deluxe">Deluxe Room (${destination.pricing.deluxe})</option>
                    <option value="suite">Suite (${destination.pricing.suite})</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Number of Guests</label>
                  <select
                    className="w-full border border-gray-300 rounded-md p-2"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? "Guest" : "Guests"}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <h4 className="font-medium">Extras</h4>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Utensils className="h-4 w-4 mr-2 text-primary" />
                      <span>All-Inclusive Meals</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">$299 per person</span>
                      <input
                        type="checkbox"
                        checked={includeMeals}
                        onChange={(e) => setIncludeMeals(e.target.checked)}
                        className="rounded border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Ship className="h-4 w-4 mr-2 text-primary" />
                      <span>Shore Activities</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">$199 per person</span>
                      <input
                        type="checkbox"
                        checked={includeActivities}
                        onChange={(e) => setIncludeActivities(e.target.checked)}
                        className="rounded border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center mb-2">
                    <span>Base Price:</span>
                    <span>${selectedRoom === "standard" ? destination.pricing.standard : selectedRoom === "deluxe" ? destination.pricing.deluxe : destination.pricing.suite}</span>
                  </div>
                  {guests > 2 && (
                    <div className="flex justify-between items-center mb-2">
                      <span>Additional Guests:</span>
                      <span>${(guests - 2) * (selectedRoom === "standard" ? destination.pricing.standard * 0.5 : selectedRoom === "deluxe" ? destination.pricing.deluxe * 0.5 : destination.pricing.suite * 0.5)}</span>
                    </div>
                  )}
                  {includeMeals && (
                    <div className="flex justify-between items-center mb-2">
                      <span>Meals:</span>
                      <span>${299 * guests}</span>
                    </div>
                  )}
                  {includeActivities && (
                    <div className="flex justify-between items-center mb-2">
                      <span>Activities:</span>
                      <span>${199 * guests}</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-2 border-t mt-2">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold text-lg">${totalPrice}</span>
                  </div>
                </div>

                <button
                  onClick={handleBookNow}
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Book Now
                </button>
              </div>
            </div>

            <div className="mt-6 p-6 border rounded-lg">
              <h3 className="text-lg font-bold mb-3">Amenities</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Tv className="h-5 w-5 mr-3 text-gray-500" />
                  <span>Entertainment</span>
                </div>
                <div className="flex items-center">
                  <Wifi className="h-5 w-5 mr-3 text-gray-500" />
                  <span>High-speed WiFi</span>
                </div>
                <div className="flex items-center">
                  <Utensils className="h-5 w-5 mr-3 text-gray-500" />
                  <span>Multiple Restaurants</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-3 text-gray-500" />
                  <span>24/7 Room Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
