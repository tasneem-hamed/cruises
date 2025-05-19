import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "../hooks/use-toast";
import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";
import { Card, CardContent } from "../Components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../Components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../Components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../Components/ui/dialog";
import "./AdminUsers.css"; // Import the CSS file

const AdminUsers = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  // Fetch users
  const {
    data: users,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["/api/admin/users"],
  });

  // Handle view details
  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setIsDetailsOpen(true);
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Filter users by search query
  const filteredUsers = users?.filter(user =>
    user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-users">
      <div className="container">
        <div className="header">
          <h1 className="title">Manage Users</h1>
        </div>

        {/* Search */}
        <Card className="search-card">
          <CardContent className="search-content">
            <div className="search-input-container">
              <div className="search-input">
                <span className="search-icon">🔍</span>
                <Input
                  placeholder="Search users..."
                  className="input-field"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="export-button">
                <Button variant="outline">
                  Export Users
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card className="users-table-card">
          <CardContent className="table-content">
            {isLoading ? (
              <div className="loading">
                <span className="loader">Loading...</span>
              </div>
            ) : isError ? (
              <div className="error">
                <p>Error loading users. Please try again later.</p>
              </div>
            ) : filteredUsers && filteredUsers.length > 0 ? (
              <div className="table-container">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Joined Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="user-info">
                            <div className="user-avatar">
                              {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                            </div>
                            <div>
                              <div className="user-name">{user.firstName} {user.lastName}</div>
                              <div className="user-username">@{user.username}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <span className={`badge ${user.isAdmin ? "admin" : "customer"}`}>
                            {user.isAdmin ? "Admin" : "Customer"}
                          </span>
                        </TableCell>
                        <TableCell>{formatDate(user.createdAt)}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="menu-button">
                                <span className="sr-only">Open menu</span>
                                <span className="menu-icon">⋮</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={() => handleViewDetails(user)}>
                                <span className="menu-item-icon">👤</span>
                                <span>View Details</span>
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <span className="menu-item-icon">✉️</span>
                                <span>Send Email</span>
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>
                                {user.isAdmin ? (
                                  <>
                                    <span className="menu-item-icon">🛡️</span>
                                    <span>Remove Admin</span>
                                  </>
                                ) : (
                                  <>
                                    <span className="menu-item-icon">🛡️</span>
                                    <span>Make Admin</span>
                                  </>
                                )}
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="no-users">
                <span className="no-users-icon">👥</span>
                <h3 className="no-users-title">No users found</h3>
                <p className="no-users-text">
                  {searchQuery
                    ? "No users match your search criteria"
                    : "There are no users registered yet"
                  }
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* User Details Dialog */}
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogContent className="dialog-content">
            <DialogHeader>
              <DialogTitle>User Details</DialogTitle>
              <DialogDescription>
                View comprehensive information about this user.
              </DialogDescription>
            </DialogHeader>

            {selectedUser && (
              <div className="user-details">
                <div className="user-avatar-container">
                  <div className="user-avatar-large">
                    {selectedUser.firstName.charAt(0)}{selectedUser.lastName.charAt(0)}
                  </div>
                  <h3 className="user-details-name">{selectedUser.firstName} {selectedUser.lastName}</h3>
                  <p className="user-details-username">@{selectedUser.username}</p>
                </div>

                <div className="user-details-info">
                  <div className="user-details-item">
                    <span className="user-details-icon">✉️</span>
                    <span className="user-details-label">Email:</span>
                    <span>{selectedUser.email}</span>
                  </div>

                  <div className="user-details-item">
                    <span className="user-details-icon">📅</span>
                    <span className="user-details-label">Joined:</span>
                    <span>{formatDate(selectedUser.createdAt)}</span>
                  </div>

                  <div className="user-details-item">
                    <span className="user-details-icon">🛡️</span>
                    <span className="user-details-label">Role:</span>
                    <span className={`badge ${selectedUser.isAdmin ? "admin" : "customer"}`}>
                      {selectedUser.isAdmin ? "Admin" : "Customer"}
                    </span>
                  </div>

                  {selectedUser.phoneNumber && (
                    <div className="user-details-item">
                      <span className="user-details-label">Phone:</span>
                      <span>{selectedUser.phoneNumber}</span>
                    </div>
                  )}
                </div>

                <div className="user-details-actions">
                  <h4 className="user-details-actions-title">Actions</h4>
                  <div className="user-details-actions-buttons">
                    <Button variant="outline" size="sm">
                      View Bookings
                    </Button>
                    <Button variant="outline" size="sm">
                      Send Email
                    </Button>
                    <Button variant="outline" size="sm">
                      Reset Password
                    </Button>
                    {selectedUser.isAdmin ? (
                      <Button variant="outline" size="sm">
                        Remove Admin Role
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm">
                        Make Admin
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
export default AdminUsers;
