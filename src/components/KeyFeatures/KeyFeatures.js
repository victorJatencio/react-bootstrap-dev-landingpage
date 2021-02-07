import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FiLayers, FiAirplay, FiMove, FiCrosshair, FiChevronRight } from "react-icons/fi";
import "./KeyFeatures.scss";

const KeyFeatures = () => {
  return (
    <div className="key-features">
      <Container>
        <Row>
          <Col md={7}>
            <h2>Key Features</h2>
            <p>Start working with <span className="highlight__text">Landrick</span> that can provide everything 
              you need to generate awareness, drive traffic, connect.</p>
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={6} className="mt-4 pt-2">
            <div className="card p-4">
              <div className="service__icon">
                <FiLayers/>
              </div>
              <div className="card-body p-0 mt-4">
                <a href="#" className="car__title">Modular</a>
                <p className="card__text mt-2">Composed in a pseudo-Latin language which more 
                  or less corresponds.</p>
                <a href="#" className="custom__link">
                  Read More
                  <FiChevronRight/>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="mt-4 pt-2">
            <div className="card p-4">
              <div className="service__icon">
                <FiAirplay/>
              </div>
              <div className="card-body p-0 mt-4">
                <a href="#" className="car__title">Responsive</a>
                <p className="card__text mt-2">Composed in a pseudo-Latin language which more 
                  or less corresponds.</p>
                <a href="#" className="custom__link">
                  Read More
                  <FiChevronRight/>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="mt-4 pt-2">
            <div className="card p-4">
              <div className="service__icon">
                <FiCrosshair/>
              </div>
              <div className="card-body p-0 mt-4">
                <a href="#" className="car__title">Customizable</a>
                <p className="card__text mt-2">Composed in a pseudo-Latin language which more 
                  or less corresponds.</p>
                <a href="#" className="custom__link">
                  Read More
                  <FiChevronRight/>
                </a>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="mt-4 pt-2">
            <div className="card p-4">
              <div className="service__icon">
                <FiMove/>
              </div>
              <div className="card-body p-0 mt-4">
                <a href="#" className="car__title">Scalable</a>
                <p className="card__text mt-2">Composed in a pseudo-Latin language which more 
                  or less corresponds.</p>
                <a href="#" className="custom__link">
                  Read More
                  <FiChevronRight/>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default KeyFeatures
