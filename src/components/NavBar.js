/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';

import {
  MDBNavbar,
  MDBContainer,
  // MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from 'mdb-react-ui-kit';

function NavBar() {
  const [showNavCentred, setShowNavCentred] = useState(false);

  return (
    <MDBNavbar expand="lg" sticky bgColor="transparent" className="my-nav shadow-1" fluid>
      <MDBContainer fluid>
        <MDBNavbarToggler
          type="button"
          data-target="#navbarCenteredExample"
          aria-controls="navbarCenteredExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavCentred(!showNavCentred)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBNavbarBrand href="#" className="brand">Angel Uray</MDBNavbarBrand>
        <MDBCollapse navbar show={showNavCentred} id="navbarCenteredExample">
          <MDBNavbarNav className="mb-2 mb-lg-0 d-flex-lg justify-content-lg-center collapse-my-nav">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#about-me">
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#work-portfolio">Portfolio</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#contact-me">Contact</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

  );
}

export default NavBar;
