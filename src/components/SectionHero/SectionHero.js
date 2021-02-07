import React from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import DevImg from "../../images/about.png";

import "../SectionHero/SectionHero.scss";

const SectionHero = () => {
  return (
    <div className="section bg-half">
      <Container>
        <Row>
          <Col md={6} className="align-items-center">
            <div className="hero__text">
              <span className="pill">Development</span>
              <h1>A Complete Developer Toolset</h1>
              <p>Launch your campaign and benefit from our expertise 
                on designing and managing conversion centered bootstrap4 html page.</p>
              
              <div className="button-group">
                <Button variant="primary" className="filled__button">Get Started</Button>
                <Button variant="outline-primary">Documentation</Button>
              </div>
              <p className="version">Current Version: v2.6.0</p>
            </div>
          </Col>
          <Col md={6}>
            <figure className="figure">
              <img src={DevImg} alt="About"/>
            </figure>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SectionHero
