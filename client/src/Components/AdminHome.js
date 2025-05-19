import { useState } from "react";
import { Route, Link, Switch, useLocation } from "wouter";

import AdminDashboard from "./admin-dashboard";
import AdminBookings from "./admin-bookings";
import CruiseDetailsPage from "./admin-cruises";
import AdminUsers from "./admin-users";

import { Button } from "../Components/ui/button";
import "./AdminHome.css"; // Import the CSS file

const AdminHome = () => {
  const [location, setLocation] = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/admin" },
    { name: "Bookings", path: "/admin/bookings" },
    { name: "Cruises", path: "/admin/cruises" },
    { name: "Users", path: "/admin/users" },
  ];

  return (
    <div className="admin-home">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link href={item.path} key={item.path}>
              <a
                className={`sidebar-link ${
                  location === item.path ? "active" : ""
                }`}
              >
                {item.name}
              </a>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Content */}
      <main className="content">
        <Switch>
          <Route path="/admin" component={AdminDashboard} />
          <Route path="/admin/bookings" component={AdminBookings} />
          <Route path="/admin/cruises" component={CruiseDetailsPage} />
          <Route path="/admin/users" component={AdminUsers} />
          <Route>
            <div className="not-found">
              <h2 className="not-found-title">Page Not Found</h2>
              <p className="not-found-text">Check the URL or go back to the dashboard.</p>
              <Link href="/admin">
                <Button className="not-found-button">Go to Dashboard</Button>
              </Link>
            </div>
          </Route>
        </Switch>
      </main>
    </div>
  );
};
export default AdminHome;

