import "./App.css";
import About from "./Components/About";
//import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import HeroSection from "./Components/HeroSection";
import BookingSearchBar from "./Components/BookingSearchBar";
import CruiseOverview from "./Components/CruiseOverview";
import ShipHighlights from "./Components/ShipHighlights";
import WhatsIncluded from "./Components/WhatsIncluded";
import Destanions from "./Components/Destanions";
import Packages from "./Components/Packages";
import BookingPage from './Components/BookingPage';
import RoomsPage from './Components/RoomsPage';
import ReviewPage from './Components/ReviewPage';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Container, Row } from "reactstrap";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Profile from "./Components/Profile";
import Register from "./Components/Register";

const App = () => {
  return (
    <Container fluid>
      <Router>
        <Row>
          <Header />
        </Row>

        <Row className="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/book" element={<BookingPage />} />
            <Route path="/heroSection" element={<HeroSection />}></Route>
             <Route path="/bookingSearchBar" element={<BookingSearchBar />}></Route>
             <Route path="/cruiseOverview" element={<CruiseOverview />}></Route>
             <Route path="/shipHighlights" element={<ShipHighlights />}></Route>
             <Route path="/whatsIncluded" element={<WhatsIncluded />}></Route>
             <Route path="/destanions" element={<Destanions />}></Route>
             <Route path="/packages" element={<Packages />}></Route>
             <Route path="/roomsPage" element={<RoomsPage />}></Route>
             <Route path="/reviewPage" element={<ReviewPage />}></Route>
            
          </Routes>
        </Row>
        {/*
        <Row>
          <HeroSection />
        </Row>
        <Row>
          <BookingSearchBar />
        </Row>
        <Row>
          <CruiseOverview />
        </Row>
        <Row>
          <ShipHighlights />
        </Row>
         <Row>
          <WhatsIncluded />
        </Row>
        <Row>
          <PopularCruises />
        </Row>
        <Row>
          <Packages />
        </Row>
           */}   
        <Row>
          <Footer />
        </Row>
      </Router>
    </Container>
  );
};

export default App;
