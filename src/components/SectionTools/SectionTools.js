import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import Integrations from "../../images/1.png"

import "./SectionTools.scss";

const SectionTools = () => {
  return (
    <div className="build-tools">
      <Container>
        <Row className="align-items-center">
          <Col lg={7} md={6} className="order-2 order-md-1 mt-4 mt-sm-0 pt-2 pt-sm-0">
            <div className="section-title mr-lg-5">
              <h2 className="mb-4">
                Build tools and <br/> extensive documention
              </h2>
              <p>
                You can combine all the Landrick templates into a single one, you can take a component from the Application theme and use it in the Website.
              </p>
              <ul className="list-unstyled">
                <li className="mb-0">
                  <FiCheckCircle className="icon__check"/>
                  Digital Marketing Solutions for Tomorrow
                </li>
                <li className="mb-0">
                  <FiCheckCircle className="icon__check"/>
                  Our Talented & Experienced Marketing Agency
                </li>
                <li className="mb-0">
                  <FiCheckCircle className="icon__check"/>
                  Create your own skin to match your brand
                </li>
              </ul>
              <div className="mt-4">
                <a href="#" className="btn btn-primary filled__button btn__link">
                  Read More
                  <FiArrowRight className="ico__arrow" />
                </a>
              </div>
            </div>
          </Col>
          <Col lg={5} md={6} className="order-1 order-md-2">
            <img src={Integrations} alt="tools" className="img-fluid"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SectionTools
