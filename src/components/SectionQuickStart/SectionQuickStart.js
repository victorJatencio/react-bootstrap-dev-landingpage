import React from 'react';
import "./SectionQuickStart.scss";
import { Container, Row, Col } from "react-bootstrap";

const SectionQuickStart = () => {
  return (
    <div className="quick-start">
      <Container className="mt-100 mt-60">
        <Row className="justify-content-center">
          <Col className="col-12">
            <div className="section__content">
              <h6 className="heading__6">Quickstart</h6>
              <h2 className="heading__2">Awesome isn't it? Let's dive in!</h2>
              <p className="section__text">Start working with <span className="highlight__text">Landrick</span> that can provide everything 
                you need to generate awareness, drive traffic, connect.</p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8} className="mg-10 mt-4 pt-2">
            <div className="section__content bg-dark bg-white-dark p-4 rounded shadow">
              <Row>
                <Col lg={12}>
                  <ul className="nav nav-pills nav-justified flex-column flex-sm-row rounded bg-soft-light" role="tab-list" id="pills-tab">
                    <li className="nav-item">
                      <a href="#" className="nav-link nav-link-alt rounded active" id="pills-npm-tab" data-toggle="pill" role="tab" aria-controls="pills-npm" aria-selected="false">npm</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link nav-link-alt rounded active" id="pills-nuget-tab" data-toggle="pill" role="tab" aria-controls="pills-nuget" aria-selected="false">nuget</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link nav-link-alt rounded active" id="pills-spm-tab" data-toggle="pill" role="tab" aria-controls="pills-spm" aria-selected="false">spm</a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link nav-link-alt rounded active" id="pills-github-tab" data-toggle="pill" role="tab" aria-controls="pills-github" aria-selected="false">github</a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SectionQuickStart
