import React from 'react';

import { Container, Row, Col } from "react-bootstrap";
import amazon from "../../images/amazon.svg";
import google from "../../images/google.svg";
import lenovo from "../../images/lenovo.svg";
import paypal from "../../images/paypal.svg";
import shopify from "../../images/shopify.svg";
import spotify from "../../images/spotify.svg";

import "../SectionLogos/SectionLogos.scss";

const SectionLogos = () => {
  return (
    <div className="py-4 section-logos border-top">
      <Container>
        <Row className="justify-content-center">
          <Col lg={2} md={2} className="text-center py-4">
          
              <img src={amazon} alt="amazon" className="avatar avatar-ex-sm"/>
            
          </Col>
          <Col lg={2} md={2} className="text-center py-4">
          
              <img src={google} alt="google" className="avatar avatar-ex-sm"/>
            
          </Col>
          <Col lg={2} md={2} className="text-center py-4">
          
              <img src={lenovo} alt="lenovo" className="avatar avatar-ex-sm"/>
            
          </Col>
          <Col lg={2} md={2} className="text-center py-4">
          
              <img src={paypal} alt="paypal" className="avatar avatar-ex-sm"/>
            
          </Col>
          <Col lg={2} md={2} className="text-center py-4">
          
              <img src={shopify} alt="shopify" className="avatar avatar-ex-sm"/>
            
          </Col>
          <Col lg={2} md={2} className="text-center py-4">
          
              <img src={spotify} alt="spotify" className="avatar avatar-ex-sm"/>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SectionLogos
