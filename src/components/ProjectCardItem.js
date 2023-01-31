/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';
import Aos from 'aos';
import 'aos/dist/aos.css';

const ProjectCardItem = (props) => {
  const { project } = props;
  const {
    cardImage, cardDescription, title,
  } = project;

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <MDBCard data-aos="fade-up">
      <MDBCardImage src={cardImage} position="top" alt="..." />
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>
          {cardDescription}
        </MDBCardText>
        <MDBBtn href="#">Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default ProjectCardItem;
