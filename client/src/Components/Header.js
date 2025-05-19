import React from "react";
import { Nav, Navbar, NavItem } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../Features/UserSlice";
import logo from "../Images/logo.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./About";
import "./HeroSection";


const Header = () => {
  const currentlyLogged = useSelector((state) => state.users.user.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(logout());
    await new Promise((resolve) => setTimeout(resolve, 100));
    navigate("/");
  };

  return (
    <Navbar className="header" expand="md">
      <Nav className="header-nav" navbar>
        <NavItem className="logo-item">
          <img src={logo} alt="Logo" className="logo" />
        </NavItem>

        <NavItem className="nav-item">
          <Link to="/" className="nav-link">
            <i className="fas fa-home"></i> Home
          </Link>
        </NavItem>

        <NavItem className="nav-item">
          <Link to="/profile" className="nav-link">
            <i className="fas fa-user"></i> Profile
          </Link>
        </NavItem>

        <NavItem className="nav-item">
          <Link to="/login" className="nav-link">
            <i className="fas fa-sign-in-alt"></i> Login
          </Link>
        </NavItem>

        <NavItem className="nav-item">
          <Link to="/about" className="nav-link">
            <i className="fas fa-info-circle"></i> About Us
          </Link>
        </NavItem>

        <NavItem className="nav-item">
          <Link to="#" onClick={handleLogout} className="nav-link">
            <i className="fas fa-sign-out-alt"></i> Logout
          </Link>
        </NavItem>

        <NavItem className="welcome-item">
          <span>Hi, {currentlyLogged}!</span>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
