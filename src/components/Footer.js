import React from 'react';
import {
  MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn,
} from 'mdb-react-ui-kit';

const Footer = () => (
  <>
    <div className="circle-8 rounded-circle position-absolute opacity-70" />
    <MDBFooter bgColor="transparent" className="text-center text-lg-start text-muted card-toolbox shadow-1">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with me on social networks:</span>
        </div>

        <div>
          <a href="https://twitter.com/atangeluray" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="https://www.linkedin.com/in/angeluray-jobs" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="https://github.com/angeluray" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">

              <h6 className="mb-4 footer-name text-uppercase">
                Angel Uray
                {' '}
                <MDBIcon color="secondary" icon="gem" />
                {' '}
                Web services
              </h6>

              <p className="footer-description">
                Here you can use rows and columns to organize your footer content.
                Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4 footer-form">Contact me</h6>
              <form className="contact-input">
                <MDBInput id="form4Example1" wrapperClass="mb-4" label="Name" />
                <MDBInput type="email" id="form4Example2" wrapperClass="mb-4" label="Email address" />
                <MDBInput wrapperClass="mb-4" textarea id="form4Example3" rows={4} label="Message" />

                <MDBBtn type="submit" className="mb-4" block>
                  Send
                </MDBBtn>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4 footer-bottom-text" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          angeluray.dev
        </a>
      </div>
    </MDBFooter>

  </>
);

export default Footer;
