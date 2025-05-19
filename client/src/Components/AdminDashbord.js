import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { useAuth } from "../hooks/use-auth";
import { Card, CardContent } from "../Components/ui/card";
import { Button } from "../Components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../Components/ui/table";
import { Badge } from "../Components/ui/badge";
import "./AdminDashboard.css"; // Import the CSS file

const AdminDashboard = () => {
  const { user } = useAuth();

  // Fetch bookings
  const {
    data: bookings,
    isLoading: isBookingsLoading,
  } = useQuery({
    queryKey: ["/api/admin/bookings"],
  });

  // Fetch users
  const {
    data: users,
    isLoading: isUsersLoading,
  } = useQuery({
    queryKey: ["/api/admin/users"],
  });

  // Fetch cruises
  const {
    data: cruises,
    isLoading: isCruisesLoading,
  } = useQuery({
    queryKey: ["/api/cruises"],
  });

  const isLoading = isBookingsLoading || isUsersLoading || isCruisesLoading;

  // Handle loading state
  if (isLoading) {
    return (
      <div className="loading">
        <span className="loader">Loading...</span>
      </div>
    );
  }

  // Calculate totals
  const totalBookings = bookings?.length || 0;
  const totalUsers = users?.length || 0;
  const totalCruises = cruises?.length || 0;
  const totalRevenue = bookings?.reduce((sum, booking) => sum + booking.totalPrice, 0) || 0;

  // Get recent bookings
  const recentBookings = bookings?.slice(0, 5) || [];

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="admin-dashboard">
      <div className="container">
        <div className="header">
          <h1 className="title">Admin Dashboard</h1>
          <div className="welcome">
            <span>Welcome, {user?.firstName}</span>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="stats-grid">
          <Card className="stat-card">
            <CardContent className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <span>🚢</span>
                </div>
                <div className="card-info">
                  <div className="card-label">Total Bookings</div>
                  <div className="card-value">{totalBookings}</div>
                </div>
              </div>
              <div className="card-footer">
                <Link href="/admin/bookings">
                  <span className="view-all">View all</span>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card">
            <CardContent className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <span>👥</span>
                </div>
                <div className="card-info">
                  <div className="card-label">Registered Users</div>
                  <div className="card-value">{totalUsers}</div>
                </div>
              </div>
              <div className="card-footer">
                <Link href="/admin/users">
                  <span className="view-all">View all</span>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card">
            <CardContent className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <span>💰</span>
                </div>
                <div className="card-info">
                  <div className="card-label">Total Revenue</div>
                  <div className="card-value">${totalRevenue.toFixed(2)}</div>
                </div>
              </div>
              <div className="card-footer">
                <Link href="/admin/bookings">
                  <span className="view-all">View details</span>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card">
            <CardContent className="card-content">
              <div className="card-header">
                <div className="card-icon">
                  <span>⚓</span>
                </div>
                <div className="card-info">
                  <div className="card-label">Available Cruises</div>
                  <div className="card-value">{totalCruises}</div>
                </div>
              </div>
              <div className="card-footer">
                <Link href="/admin/cruises">
                  <span className="view-all">Manage cruises</span>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Bookings */}
        <Card className="recent-bookings-card">
          <CardContent className="card-content">
            <div className="card-header">
              <h3 className="card-title">Recent Bookings</h3>
            </div>
            <div className="table-container">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Booking ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Cruise</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentBookings.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center">
                        <p className="no-bookings">No bookings found</p>
                      </TableCell>
                    </TableRow>
                  ) : (
                    recentBookings.map((booking) => {
                      const bookingUser = users?.find(u => u.id === booking.userId);
                      const cruise = cruises?.find(c => c.id === booking.cruiseId);

                      return (
                        <TableRow key={booking.id}>
                          <TableCell className="font-medium">#{booking.id}</TableCell>
                          <TableCell>
                            <div className="customer-info">
                              <div className="customer-avatar">
                                {bookingUser?.firstName?.charAt(0)}{bookingUser?.lastName?.charAt(0)}
                              </div>
                              <div className="customer-details">
                                <div className="customer-name">
                                  {bookingUser?.firstName} {bookingUser?.lastName}
                                </div>
                                <div className="customer-email">
                                  {bookingUser?.email}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="cruise-info">
                              {cruise?.name || `Cruise #${booking.cruiseId}`}
                            </div>
                            <div className="cruise-date">
                              {formatDate(booking.departureDate)}
                            </div>
                          </TableCell>
                          <TableCell className="booking-date">
                            {formatDate(booking.createdAt)}
                          </TableCell>
                          <TableCell className="booking-amount">
                            ${booking.totalPrice.toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={
                                booking.status === 'confirmed'
                                  ? 'badge-confirmed'
                                  : booking.status === 'pending'
                                  ? 'badge-pending'
                                  : 'badge-cancelled'
                              }
                            >
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Link href={`/admin/bookings/${booking.id}`}>
                              <Button variant="ghost" size="sm" className="edit-button">
                                Edit
                              </Button>
                            </Link>
                            {booking.status === 'pending' && (
                              <Button variant="ghost" size="sm" className="cancel-button">
                                Cancel
                              </Button>
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </div>
            <div className="card-footer">
              <div className="showing">
                Showing <span className="font-medium">5</span> of <span className="font-medium">{totalBookings}</span> bookings
              </div>
              <div>
                <Link href="/admin/bookings">
                  <Button variant="outline" size="sm" className="view-all-button">
                    View All Bookings
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="quick-links">
          <Link href="/admin/cruises/new">
            <Card className="quick-link-card">
              <CardContent className="card-content">
                <div className="quick-link">
                  <span>🚢</span>
                  <h3 className="quick-link-title">Add New Cruise</h3>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/bookings">
            <Card className="quick-link-card">
              <CardContent className="card-content">
                <div className="quick-link">
                  <span>💰</span>
                  <h3 className="quick-link-title">Manage Bookings</h3>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/users">
            <Card className="quick-link-card">
              <CardContent className="card-content">
                <div className="quick-link">
                  <span>👥</span>
                  <h3 className="quick-link-title">View Users</h3>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AdminDashboard;