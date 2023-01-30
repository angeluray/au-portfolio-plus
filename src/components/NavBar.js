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
    <MDBNavbar expand="lg" sticky bgColor="transparent" className="my-nav shadow-1">
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
              <MDBNavbarLink active aria-current="page" href="#">
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Portfolio</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="#">Contact</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

  );
}

export default NavBar;
