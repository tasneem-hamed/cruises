import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//import BookingCard from "./BookingCard";
import userImage from "../Images/user.png";
import "./Profile.css";
import BookingPage from "./BookingPage";

const Profile = () => {
  const email = useSelector((state) => state.users.user.email);
  const name = useSelector((state) => state.users.user.name);
  const [user, setUser] = useState(null);
  const [updatedName, setUpdatedName] = useState(name || "");
  const [updatedEmail, setUpdatedEmail] = useState(email || "");
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      alert("Please login to view your profile");
      navigate("/login");
      return;
    }

    const userData = JSON.parse(currentUser);
    setUser(userData);
    setUpdatedName(userData.name);
    setUpdatedEmail(userData.email);

    // Get user bookings
    const allUsers = JSON.parse(localStorage.getItem("cruiseUsers") || "[]");
    const currentUserData = allUsers.find((u) => u.id === userData.id);
    if (currentUserData) {
      setBookings(currentUserData.bookings || []);
    }
  }, [navigate, name, email]);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      // Update user in localStorage
      const users = JSON.parse(localStorage.getItem("cruiseUsers") || "[]");
      const userIndex = users.findIndex((u) => u.id === user.id);

      if (userIndex !== -1) {
        users[userIndex] = {
          ...users[userIndex],
          name: updatedName,
          email: updatedEmail
        };

        localStorage.setItem("cruiseUsers", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(users[userIndex]));

        alert("Profile updated successfully!");
      }

      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
    navigate("/");
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Account</h1>
        <button onClick={handleLogout} className="flex items-center bg-transparent border border-gray-300 rounded px-4 py-2">
          Logout
        </button>
      </div>

      <div className="flex items-center mb-8">
        <img src={userImage} alt="User" className="userImage w-20 h-20 rounded-full mr-4" />
        <div>
          <p className="text-lg font-semibold">{updatedName}</p>
          <p className="text-gray-600">{updatedEmail}</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex border-b">
          <button className="px-4 py-2 border-b-2 border-blue-500">
            <span className="mr-2">📅</span>
            My Bookings
          </button>
          <button className="px-4 py-2">
            <span className="mr-2">👤</span>
            Profile
          </button>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-4">My Bookings</h3>
            <p className="text-gray-600 mb-4">View and manage your cruise bookings</p>
            <div className="space-y-4">
              {bookings.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">You don't have any bookings yet</p>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => navigate("/destinations")}>
                    Browse Cruises
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bookings.map((booking) => (
                    <BookingPage key={booking.id} booking={booking} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-xl font-bold mb-4">Profile Information</h3>
            <p className="text-gray-600 mb-4">Update your personal information</p>
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                <input
                  id="name"
                  value={updatedName}
                  onChange={(e) => setUpdatedName(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  value={updatedEmail}
                  onChange={(e) => setUpdatedEmail(e.target.value)}
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded"
                disabled={isLoading}
              >
                {isLoading ? "Updating..." : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
