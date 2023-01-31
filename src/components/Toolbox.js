/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBBadge,
} from 'mdb-react-ui-kit';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Toolbox = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="p-3">
      <div className="d-flex justify-content-center mb-4">
        <hr className="devider" />
        <h3 className="h3-title">My Toolbox</h3>
        <hr className="devider" />
      </div>

      <div className="circle-4 rounded-circle position-absolute opacity-70" />
      <div className="circle-5 rounded-circle position-absolute opacity-70" />
      <div className="circle-6 rounded-circle position-absolute opacity-70" />

      <MDBCard shadow="0" border="secondary" background="transparent" className="mb-3 card-toolbox" data-aos="fade-up">
        <MDBCardBody className="text-dark">
          <MDBCardTitle className="tb-t title-toolbox-1">Languages</MDBCardTitle>
          <div className="d-flex gap-2 flex-wrap">
            <MDBBadge className="my-badge">Javascript</MDBBadge>
            <MDBBadge className="my-badge">Ruby</MDBBadge>
            <MDBBadge className="my-badge">HTML</MDBBadge>
            <MDBBadge className="my-badge">CSS</MDBBadge>
          </div>
        </MDBCardBody>
      </MDBCard>

      <MDBCard shadow="0" border="secondary" background="transparent" className="mb-3 card-toolbox" data-aos="fade-up">
        <MDBCardBody className="text-primary">
          <MDBCardTitle className="tb-t">Frameworks and Libraries</MDBCardTitle>
          <div className="d-flex gap-2 flex-wrap">
            <MDBBadge>Ruby on Rails</MDBBadge>
            <MDBBadge>React</MDBBadge>
            <MDBBadge>Redux</MDBBadge>
            <MDBBadge>Tailwind</MDBBadge>
            <MDBBadge>Bootstrap</MDBBadge>
            <MDBBadge>RSpec</MDBBadge>
            <MDBBadge>Capybara</MDBBadge>
            <MDBBadge>Jest</MDBBadge>
          </div>
        </MDBCardBody>
      </MDBCard>

      <MDBCard shadow="0" border="secondary" background="transparent" className="mb-3 card-toolbox" data-aos="fade-up">
        <MDBCardBody className="text-info">
          <MDBCardTitle className="tb-t">Tools and Methodologies</MDBCardTitle>
          <div className="d-flex gap-2">
            <MDBBadge color="info">Git</MDBBadge>
            <MDBBadge color="info">GitHub</MDBBadge>
            <MDBBadge color="info">Eslint, Rubocop, Stylinter</MDBBadge>
            <MDBBadge color="info">Scrum</MDBBadge>
          </div>
        </MDBCardBody>
      </MDBCard>

      <MDBCard shadow="0" border="secondary" background="transparent" className="mb-3 card-toolbox" data-aos="fade-up">
        <MDBCardBody>
          <MDBCardTitle className="tb-t dif">Soft skills</MDBCardTitle>
          <div className="d-flex gap-2 flex-wrap">
            <MDBBadge color="secondary">Problem solving, Critical thinking</MDBBadge>
            <MDBBadge color="secondary">Communication</MDBBadge>
            <MDBBadge color="secondary">Time management</MDBBadge>
            <MDBBadge color="secondary">Mentoring</MDBBadge>
            <MDBBadge color="secondary">Self-taught, Adaptability</MDBBadge>
            <MDBBadge color="secondary">Teamwork</MDBBadge>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Toolbox;
