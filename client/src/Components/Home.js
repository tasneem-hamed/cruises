import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import User from './User';
import SharePost from './SharePost';
import Posts from './Posts';
import HeroSection from './HeroSection';
import BookingSearchBar from "./BookingSearchBar";
import CruiseOverview from "./CruiseOverview";
import ShipHighlights from "./ShipHighlights";
import WhatsIncluded from "./WhatsIncluded";
import PopularCruises from "./PopularCruises";
import Packages from "./Packages";

const Home = () => {
  
  return (
    <Container fluid>
      {/*
      <Row>
        <Col md={3}>
          <User />
        </Col>
        <Col md={9}>
          <SharePost />
        </Col>
      </Row>

      <Row>
        <Col md={3}></Col>
        <Col md={9}>
          <Posts />
        </Col>
      </Row>
*/}
      {/* Cruise-related sections */}
      <Row>
        <Col>
          <HeroSection />
        </Col>
      </Row>
      <Row>
        <Col>
          <BookingSearchBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <CruiseOverview />
        </Col>
      </Row>
      <Row>
        <Col>
          <ShipHighlights />
        </Col>
      </Row>
      <Row>
        <Col>
          <WhatsIncluded />
        </Col>
      </Row>
      <Row>
        <Col>
          <PopularCruises />
        </Col>
      </Row>
      <Row>
        <Col>
          <Packages />
        </Col>
      </Row>
      
    </Container>
  );
};

export default Home;
