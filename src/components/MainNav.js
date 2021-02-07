import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, NavbarBrand, NavDropdown, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { DiGithubBadge, DiStackoverflow } from "react-icons/di";
import { HiOutlineUser } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

import logo from '../images/logo-dark.png';

const MainNav = () => {
  return (
    <div className="main-nav">
        <Navbar expand="lg">
          <Container>
            <Row className="row-header">
              <Col md={3}>
                <NavbarBrand>
                  <img className="logo-img" src={logo} alt="DevCo"/>
                </NavbarBrand>
              </Col>
              <Col md={6} className="nav-col">
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#landing">Landing</NavLink>
                    <NavDropdown title="Pages" id="basic-nav-dropdown" className="custom-dropdown">
                      <NavDropdown.Item href="#" className="dr-link">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#" className="dr-link">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#" className="dr-link">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#" className="dr-link">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <NavLink href="#docs">Docs</NavLink>
                    
                </NavbarCollapse>
              </Col>
              <Col md={3}>
                <div className="nav-utils">
                  <div className="search">
                    <span className="search-ico">
                      <FiSearch/>
                    </span>
                  </div> 
                  
                  <div className="icons">
                    <span className="btn-ico">
                      <DiGithubBadge/>
                    </span>
                    <span className="btn-ico">
                      <DiStackoverflow/>
                    </span>
                    <span className="btn-ico">
                      <HiOutlineUser/>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Navbar>
      
    </div>
  )
}

export default MainNav
